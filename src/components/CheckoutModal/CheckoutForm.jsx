import { FaWhatsapp } from "react-icons/fa"
import { MdStorefront, MdDeliveryDining, MdTableRestaurant } from "react-icons/md"

const PAYMENT_OPTIONS = ["Pix", "Cartão", "Dinheiro"]

const DELIVERY_MODES = [
    { id: "retirada", label: "Retirada", icon: MdStorefront },
    { id: "entrega", label: "Entrega", icon: MdDeliveryDining },
    { id: "local", label: "Comer no local", icon: MdTableRestaurant },
]

const inputClass = "w-full bg-surface rounded-xl px-4 py-3 font-main text-sm text-header placeholder:text-header/40 outline-none focus:ring-2 focus:ring-primary"

const CheckoutForm = ({
    form, handleChange,
    deliveryMode, onDeliveryMode, deliveryAvailable,
    payment, setPayment,
    cardType, setCardType,
    needsChange, setNeedsChange,
    changeAmount, setChangeAmount,
    isValid, onContinue,
}) => (
    <>
        <div className="overflow-y-auto flex-1 px-5 py-6 flex flex-col gap-6">

            <div className="flex flex-col gap-1">
                <label className="font-main font-bold text-header text-sm">Nome <span className="text-red-500">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" className={inputClass} />
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-main font-bold text-header text-sm">
                    Como deseja receber? <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-2">
                    {DELIVERY_MODES.map(({ id, label, icon: Icon }) => {
                        const disabled = id === "entrega" && !deliveryAvailable
                        return (
                            <button
                                key={id}
                                onClick={() => !disabled && onDeliveryMode(id)}
                                disabled={disabled}
                                className={`flex-1 flex flex-col items-center gap-1.5 px-2 py-3 rounded-2xl border-2 transition-all ${
                                    disabled
                                        ? "border-surface text-header/30 cursor-not-allowed bg-surface/30"
                                        : deliveryMode === id
                                            ? "bg-accent border-accent text-secondary cursor-pointer"
                                            : "bg-background border-surface text-header hover:border-accent cursor-pointer"
                                }`}
                            >
                                <Icon size={22} />
                                <span className="font-main font-semibold text-xs text-center leading-tight">{label}</span>
                                {disabled && <span className="font-main text-[10px] text-header/40 leading-tight">a partir das 14h</span>}
                            </button>
                        )
                    })}
                </div>
            </div>

            {deliveryMode === "entrega" && (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <p className="font-main font-bold text-header text-sm">Endereço de entrega</p>
                        <span className="font-main text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">+ R$ 1,00 de taxa</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-main font-semibold text-header/70 text-xs">Endereço *</label>
                        <input name="address" value={form.address} onChange={handleChange} placeholder="Rua, Avenida..." className={inputClass} />
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-1 w-1/3">
                            <label className="font-main font-semibold text-header/70 text-xs">Número *</label>
                            <input name="number" value={form.number} onChange={handleChange} placeholder="Ex: 123" className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="font-main font-semibold text-header/70 text-xs">Complemento</label>
                            <input name="complement" value={form.complement} onChange={handleChange} placeholder="Apto, bloco... (opcional)" className={inputClass} />
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-3">
                <p className="font-main font-bold text-header text-sm">
                    Forma de pagamento <span className="text-red-500">*</span>
                </p>
                <div className="flex flex-wrap gap-2">
                    {PAYMENT_OPTIONS.map((op) => (
                        <button
                            key={op}
                            onClick={() => { setPayment(op); setCardType(""); setNeedsChange(false); setChangeAmount("") }}
                            className={`px-4 py-2 rounded-full text-sm font-main font-semibold border-2 transition-all cursor-pointer ${
                                payment === op
                                    ? "bg-accent border-accent text-secondary"
                                    : "bg-background border-surface text-header hover:border-accent"
                            }`}
                        >
                            {op}
                        </button>
                    ))}
                </div>

                {payment === "Cartão" && (
                    <div className="flex flex-col gap-2">
                        <p className="font-main font-semibold text-header/70 text-xs">Tipo de cartão *</p>
                        <div className="flex gap-2">
                            {["Crédito", "Débito"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setCardType(type)}
                                    className={`px-4 py-2 rounded-full text-sm font-main font-semibold border-2 transition-all cursor-pointer ${
                                        cardType === type
                                            ? "bg-accent border-accent text-secondary"
                                            : "bg-background border-surface text-header hover:border-accent"
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        {cardType === "Crédito" && (
                            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl px-4 py-3">
                                <p className="font-main text-xs text-yellow-700 leading-relaxed">
                                    Pagamentos no crédito estão sujeitos a uma taxa cobrada pela maquineta.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {payment === "Pix" && (
                    <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
                        <FaWhatsapp size={20} className="text-green-500 shrink-0 mt-0.5" />
                        <p className="font-main text-xs text-green-700 leading-relaxed">
                            O pedido só será liberado após o envio do comprovante de pagamento via WhatsApp. Aguarde a confirmação antes de buscar.
                        </p>
                    </div>
                )}

                {payment === "Dinheiro" && (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setNeedsChange(!needsChange)}
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                                    needsChange ? "bg-accent border-accent" : "border-surface"
                                }`}
                            >
                                {needsChange && <span className="text-secondary text-xs font-bold">✓</span>}
                            </button>
                            <label onClick={() => setNeedsChange(!needsChange)} className="font-main text-sm text-header cursor-pointer">
                                Preciso de troco
                            </label>
                        </div>
                        {needsChange && (
                            <div className="flex flex-col gap-1">
                                <label className="font-main font-semibold text-header/70 text-xs">Troco para quanto? *</label>
                                <input value={changeAmount} onChange={(e) => setChangeAmount(e.target.value)} placeholder="Ex: R$ 50,00" className={inputClass} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

        <div className="px-5 pb-6 pt-2 shrink-0">
            <button
                onClick={onContinue}
                disabled={!isValid}
                className="w-full cursor-pointer bg-accent text-secondary font-main font-semibold py-3.5 rounded-2xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
                Continuar
            </button>
        </div>
    </>
)

export default CheckoutForm
