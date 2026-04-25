import { IoBagOutline } from "react-icons/io5"

const OrderSummary = ({
    form, deliveryMode, deliveryModeInfo, payment, cardType, needsChange, changeAmount,
    cart, totalPrice, deliveryFee, grandTotal,
    onBack, onConfirm,
}) => (
    <>
        <div className="overflow-y-auto flex-1 px-5 py-6 flex flex-col gap-5">

            <div className="flex flex-col gap-2">
                <p className="font-main font-bold text-header text-sm">Pedido</p>
                <div className="bg-surface rounded-2xl px-4 py-3 flex flex-col gap-1.5">
                    <span className="font-main font-semibold text-header text-sm">{form.name}</span>
                    {deliveryModeInfo && (
                        <div className="flex items-center gap-2">
                            <deliveryModeInfo.icon size={16} className="text-primary shrink-0" />
                            <span className="font-main font-semibold text-header text-sm">{deliveryModeInfo.label}</span>
                        </div>
                    )}
                    {deliveryMode === "entrega" && (
                        <p className="font-main text-xs text-header/70 pl-6">
                            {form.address}, {form.number}{form.complement ? ` — ${form.complement}` : ""}
                        </p>
                    )}
                    <div className="flex items-center gap-2 pt-0.5">
                        <span className="font-main text-xs text-header/70">Pagamento:</span>
                        <span className="font-main font-semibold text-xs text-header">
                            {payment}{cardType ? ` — ${cardType}` : ""}
                        </span>
                        {payment === "Dinheiro" && needsChange && changeAmount && (
                            <span className="font-main text-xs text-header/60">— troco p/ {changeAmount}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-main font-bold text-header text-sm">Itens</p>
                <div className="flex flex-col bg-surface rounded-2xl overflow-hidden">
                    {cart.map((item, index) => (
                        <div key={item.cartKey}>
                        {index > 0 && <div className="border-t border-background mx-4" />}
                        <div className="flex items-center gap-3 px-4 py-3">
                            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shrink-0">
                                {item.image
                                    ? <img src={item.image} alt={item.name} className="w-8 h-8 object-contain" />
                                    : <IoBagOutline size={18} className="text-header/30" />
                                }
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-main font-semibold text-header text-xs line-clamp-1">
                                    {item.name}{item.obs ? ` - ${item.obs}` : ""}
                                </p>
                                {item.selectedFlavors?.length > 0 && (
                                    <p className="font-main text-header/50 text-[11px]">{item.selectedFlavors.join(", ")}</p>
                                )}
                                {item.flavor && <p className="font-main text-header/50 text-[11px]">Sabor: {item.flavor}</p>}
                                {item.calda && <p className="font-main text-header/50 text-[11px]">Calda: {item.calda}</p>}
                                {item.selectedAddons?.length > 0 && (
                                    <p className="font-main text-header/50 text-[11px]">Adicionais: {item.selectedAddons.join(", ")}</p>
                                )}
                                {item.notes && <p className="font-main text-header/50 text-[11px] italic">"{item.notes}"</p>}
                            </div>
                            <div className="text-right shrink-0">
                                <p className="font-main font-bold text-primary text-sm">
                                    R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                                </p>
                                <p className="font-main text-header/50 text-xs">x{item.quantity}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-surface rounded-2xl px-4 py-3 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="font-main text-sm text-header/70">Subtotal</span>
                    <span className="font-main text-sm text-header">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                </div>
                {deliveryFee > 0 && (
                    <div className="flex items-center justify-between">
                        <span className="font-main text-sm text-header/70">Taxa de entrega</span>
                        <span className="font-main text-sm text-header">R$ {deliveryFee.toFixed(2).replace(".", ",")}</span>
                    </div>
                )}
                <div className="border-t border-background pt-2 flex items-center justify-between">
                    <span className="font-main font-bold text-header text-sm">Total</span>
                    <span className="font-main font-bold text-primary text-lg">R$ {grandTotal.toFixed(2).replace(".", ",")}</span>
                </div>
            </div>
        </div>

        <div className="px-5 pb-6 pt-2 flex gap-3 shrink-0">
            <button
                onClick={onBack}
                className="flex-1 cursor-pointer bg-surface text-header font-main font-semibold py-3.5 rounded-2xl hover:opacity-80 active:scale-95 transition-all"
            >
                Voltar
            </button>
            <button
                onClick={onConfirm}
                className="flex-1 cursor-pointer bg-accent text-secondary font-main font-semibold py-3.5 rounded-2xl hover:opacity-90 active:scale-95 transition-all"
            >
                Confirmar pedido
            </button>
        </div>
    </>
)

export default OrderSummary
