import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

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

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
