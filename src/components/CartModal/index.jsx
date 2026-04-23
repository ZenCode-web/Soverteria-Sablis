import { useCart } from "../../context/CartContext"
import { IoClose } from "react-icons/io5"
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5"

const CartModal = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart()

    if (!isCartOpen) return null

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsCartOpen(false)}
            />

            <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-background z-50 flex flex-col shadow-2xl">

                <div className="bg-header px-5 py-4 flex items-center justify-between shrink-0">
                    <h2 className="text-secondary font-display font-bold text-xl">Seu Carrinho</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-secondary hover:text-surface transition-colors cursor-pointer"
                    >
                        <IoClose size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-3 text-header/40">
                            <IoBagOutline size={56} />
                            <p className="font-main text-sm">Seu carrinho está vazio</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.cartKey} className="flex items-center gap-3 bg-surface rounded-2xl p-3">
                                <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center shrink-0">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                                    ) : (
                                        <IoBagOutline size={28} className="text-header/30" />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-main font-bold text-header text-xs line-clamp-1">
                                        {item.name}{item.obs && ` - ${item.obs}`}
                                    </p>
                                    {item.flavor && (
                                        <p className="font-main text-header/60 text-xs mt-0.5">Sabor: {item.flavor}</p>
                                    )}
                                    {item.calda && (
                                        <p className="font-main text-header/60 text-xs mt-0.5">Calda: {item.calda}</p>
                                    )}
                                    {item.selectedFlavors?.length > 0 && (
                                        <p className="font-main text-header/60 text-xs mt-0.5">{item.category === "Lanches e Pratos" ? "Recheio" : "Sabor(es)"}: {item.selectedFlavors.join(", ")}</p>
                                    )}
                                    {item.selectedFruits?.length > 0 && (
                                        <p className="font-main text-header/60 text-xs mt-0.5">Frutas: {item.selectedFruits.join(", ")}</p>
                                    )}
                                    {item.selectedAddons?.length > 0 && (
                                        <p className="font-main text-header/60 text-xs mt-0.5">Adicionais: {item.selectedAddons.join(", ")}</p>
                                    )}
                                    {item.notes && (
                                        <p className="font-main text-header/50 text-xs mt-0.5 italic line-clamp-1">"{item.notes}"</p>
                                    )}
                                    <p className="font-main font-semibold text-primary text-sm mt-0.5">
                                        R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.cartKey, -1)}
                                            className="w-6 h-6 rounded-full bg-accent text-secondary flex items-center justify-center hover:opacity-80 active:scale-95 transition-all cursor-pointer"
                                        >
                                            <FiMinus size={10} />
                                        </button>
                                        <span className="font-main font-bold text-header text-sm w-4 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.cartKey, 1)}
                                            className="w-6 h-6 rounded-full bg-accent text-secondary flex items-center justify-center hover:opacity-80 active:scale-95 transition-all cursor-pointer"
                                        >
                                            <FiPlus size={10} />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.cartKey)}
                                    className="text-red-400 hover:text-red-600 transition-colors shrink-0 cursor-pointer"
                                >
                                    <FiTrash2 size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t border-surface px-5 py-4 flex flex-col gap-3 shrink-0">
                        <div className="flex items-center justify-between">
                            <span className="font-main font-semibold text-header">Total</span>
                            <span className="font-main font-bold text-primary text-lg">
                                R$ {totalPrice.toFixed(2).replace(".", ",")}
                            </span>
                        </div>
                        <button className="w-full cursor-pointer bg-accent text-secondary font-main font-semibold py-3.5 rounded-2xl hover:opacity-90 active:scale-95 transition-all">
                            Finalizar pedido
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartModal
