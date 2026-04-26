import { createContext, useContext, useState, useEffect } from "react"

const COOKIE_NAME = "sablis_cart"
const COOKIE_DAYS = 7

function loadCartFromCookie() {
    const match = document.cookie.split("; ").find((r) => r.startsWith(`${COOKIE_NAME}=`))
    if (!match) return []
    try {
        return JSON.parse(decodeURIComponent(match.split("=")[1]))
    } catch {
        return []
    }
}

function saveCartToCookie(cart) {
    const expires = new Date()
    expires.setDate(expires.getDate() + COOKIE_DAYS)
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(cart))}; expires=${expires.toUTCString()}; path=/`
}

function deleteCookie() {
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => loadCartFromCookie())
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        saveCartToCookie(cart)
    }, [cart])

    function addToCart(product) {
        const cartKey = [
            product.id,
            product.flavor || "",
            product.calda || "",
            [...(product.selectedFlavors || [])].sort().join(","),
            [...(product.selectedFruits || [])].sort().join(","),
            [...(product.selectedAddons || [])].sort().join(","),
        ].join("|")
        const qty = product.quantity || 1

        setCart(prev => {
            const existing = prev.find(item => item.cartKey === cartKey)
            if (existing) {
                return prev.map(item =>
                    item.cartKey === cartKey ? { ...item, quantity: item.quantity + qty } : item
                )
            }
            return [...prev, { ...product, cartKey, quantity: qty }]
        })
    }

    function removeFromCart(cartKey) {
        setCart(prev => prev.filter(item => item.cartKey !== cartKey))
    }

    function updateQuantity(cartKey, delta) {
        setCart(prev =>
            prev.reduce((acc, item) => {
                if (item.cartKey !== cartKey) return [...acc, item]
                const newQty = item.quantity + delta
                if (newQty <= 0) return acc
                return [...acc, { ...item, quantity: newQty }]
            }, [])
        )
    }

    function clearCart() {
        setCart([])
        deleteCookie()
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
