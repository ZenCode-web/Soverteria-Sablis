import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { MdStorefront, MdDeliveryDining, MdTableRestaurant } from "react-icons/md"
import { useCart } from "../../context/CartContext"
import CheckoutForm from "./CheckoutForm"
import OrderSummary from "./OrderSummary"

const DELIVERY_FEE = 1

const DELIVERY_MODES = [
    { id: "retirada", label: "Retirada", icon: MdStorefront },
    { id: "entrega", label: "Entrega", icon: MdDeliveryDining },
    { id: "local", label: "Comer no local", icon: MdTableRestaurant },
]

const CheckoutModal = ({ onClose }) => {
    const { cart, totalPrice, clearCart } = useCart()
    const [form, setForm] = useState({ name: "", address: "", number: "", complement: "" })
    const [deliveryMode, setDeliveryMode] = useState("")
    const [payment, setPayment] = useState("")
    const [cardType, setCardType] = useState("")
    const [needsChange, setNeedsChange] = useState(false)
    const [changeAmount, setChangeAmount] = useState("")
    const [showSummary, setShowSummary] = useState(false)

    const deliveryAvailable = new Date().getHours() >= 11

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleDeliveryMode(id) {
        setDeliveryMode(id)
        if (id !== "entrega") setForm((prev) => ({ ...prev, address: "", number: "", complement: "" }))
    }

    const addressValid = deliveryMode !== "entrega" || (form.address && form.number)
    const isValid = form.name && deliveryMode && addressValid && payment &&
        (payment !== "Cartão" || cardType) &&
        (payment !== "Dinheiro" || !needsChange || changeAmount)

    const deliveryFee = deliveryMode === "entrega" ? DELIVERY_FEE : 0
    const grandTotal = totalPrice + deliveryFee
    const deliveryModeInfo = DELIVERY_MODES.find((m) => m.id === deliveryMode)

    function handleFinalConfirm() {
        let msg = `*Novo pedido - Sorveteria Sambles* 🍦\n\n`
        msg += `*Cliente:* ${form.name}\n`
        msg += `*Modalidade:* ${deliveryModeInfo?.label || deliveryMode}\n`
        if (deliveryMode === "entrega") {
            msg += `*Endereço:* ${form.address}, ${form.number}${form.complement ? ` - ${form.complement}` : ""}\n`
        }
        msg += `\n*Itens:*\n`
        cart.forEach((item) => {
            msg += `• ${item.quantity}x ${item.name}${item.obs ? ` - ${item.obs}` : ""}\n`
            if (item.selectedFlavors?.length > 0) msg += `  Sabor(es): ${item.selectedFlavors.join(", ")}\n`
            if (item.flavor) msg += `  Sabor: ${item.flavor}\n`
            if (item.calda) msg += `  Calda: ${item.calda}\n`
            if (item.selectedFruits?.length > 0) msg += `  Frutas: ${item.selectedFruits.join(", ")}\n`
            if (item.selectedAddons?.length > 0) msg += `  Adicionais: ${item.selectedAddons.join(", ")}\n`
            if (item.notes) msg += `  Complemento: ${item.notes}\n`
            msg += `  R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n\n`
        })
        msg += `*Pagamento:* ${payment}${cardType ? ` (${cardType})` : ""}`
        if (payment === "Dinheiro" && needsChange && changeAmount) msg += ` (troco para ${changeAmount})`
        msg += `\n`
        if (deliveryFee > 0) {
            msg += `*Subtotal:* R$ ${totalPrice.toFixed(2).replace(".", ",")}\n`
            msg += `*Taxa de entrega:* R$ ${deliveryFee.toFixed(2).replace(".", ",")}\n`
        }
        msg += `*Total:* R$ ${grandTotal.toFixed(2).replace(".", ",")}`
        window.open(`https://wa.me/5581995494243?text=${encodeURIComponent(msg)}`, "_blank")
        clearCart()
        onClose()
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-60" onClick={onClose} />

            <div className="fixed inset-0 z-70 flex items-end sm:items-center justify-center">
                <div className="bg-background w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh]">

                    <div className="bg-header px-5 py-4 rounded-t-3xl flex items-center justify-between shrink-0">
                        <h2 className="text-secondary font-display font-bold text-xl">
                            {showSummary ? "Resumo do pedido" : "Finalizar pedido"}
                        </h2>
                        <button onClick={onClose} className="text-secondary hover:text-surface transition-colors cursor-pointer">
                            <IoClose size={24} />
                        </button>
                    </div>

                    {showSummary ? (
                        <OrderSummary
                            form={form}
                            deliveryMode={deliveryMode}
                            deliveryModeInfo={deliveryModeInfo}
                            payment={payment}
                            cardType={cardType}
                            needsChange={needsChange}
                            changeAmount={changeAmount}
                            cart={cart}
                            totalPrice={totalPrice}
                            deliveryFee={deliveryFee}
                            grandTotal={grandTotal}
                            onBack={() => setShowSummary(false)}
                            onConfirm={handleFinalConfirm}
                        />
                    ) : (
                        <CheckoutForm
                            form={form}
                            handleChange={handleChange}
                            deliveryMode={deliveryMode}
                            onDeliveryMode={handleDeliveryMode}
                            deliveryAvailable={deliveryAvailable}
                            payment={payment}
                            setPayment={setPayment}
                            cardType={cardType}
                            setCardType={setCardType}
                            needsChange={needsChange}
                            setNeedsChange={setNeedsChange}
                            changeAmount={changeAmount}
                            setChangeAmount={setChangeAmount}
                            isValid={isValid}
                            onContinue={() => setShowSummary(true)}
                        />
                    )}

                </div>
            </div>
        </>
    )
}

export default CheckoutModal
