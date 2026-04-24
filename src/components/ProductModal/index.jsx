import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { FiMinus, FiPlus } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5"
import { useCart } from "../../context/CartContext"

const ProductModal = ({ product, onClose }) => {
    const { addToCart, setIsCartOpen } = useCart()
    const [quantity, setQuantity] = useState(1)
    const [selectedFlavor, setSelectedFlavor] = useState("")
    const [selectedCalda, setSelectedCalda] = useState("")
    const [selectedFlavors, setSelectedFlavors] = useState([])
    const [selectedFruits, setSelectedFruits] = useState([])
    const [selectedAddons, setSelectedAddons] = useState([])
    const [notes, setNotes] = useState("")

    const hasMultiFlavors = product.flavors?.length > 0 && (product.maxFlavors > 1)
    const hasFlavors = product.flavors?.length > 0 && !hasMultiFlavors
    const hasCalda = product.calda?.length > 0
    const hasFlavorCategories = product.flavorCategories?.length > 0
    const hasFruits = product.fruits?.length > 0
    const hasAddons = product.addons?.length > 0

    const extraFruitsCount = hasFruits
        ? Math.max(0, selectedFruits.length - (product.includedFruits || 0))
        : 0
    const addonsTotal = selectedAddons.reduce((sum, name) => {
        const addon = product.addons?.find(a => a.name === name)
        return sum + (addon?.price || 0)
    }, 0)
    const unitPrice = product.price + extraFruitsCount * (product.extraFruitPrice || 1) + addonsTotal
    const totalPrice = unitPrice * quantity

    const isValid =
        (!hasFlavors || !!selectedFlavor) &&
        (!hasMultiFlavors || selectedFlavors.length > 0) &&
        (!hasFlavorCategories || selectedFlavors.length > 0)

    const selectedCategory = hasFlavorCategories && selectedFlavors.length > 0
        ? product.flavorCategories.find(cat => cat.options.includes(selectedFlavors[0]))?.label
        : null

    function toggleMultiFlavor(flavor, catLabel) {
        if (selectedCategory && catLabel !== selectedCategory) return
        setSelectedFlavors(prev => {
            if (prev.includes(flavor)) return prev.filter(f => f !== flavor)
            if (prev.length >= product.maxFlavors) return prev
            return [...prev, flavor]
        })
    }

    function toggleFruit(fruit) {
        setSelectedFruits(prev =>
            prev.includes(fruit) ? prev.filter(f => f !== fruit) : [...prev, fruit]
        )
    }

    function handleAdd() {
        addToCart({
            id: product.id,
            name: product.name,
            price: unitPrice,
            image: product.image,
            obs: product.obs,
            category: product.category,
            flavor: selectedFlavor || null,
            calda: selectedCalda || null,
            selectedFlavors: selectedFlavors.length > 0 ? selectedFlavors : null,
            selectedFruits: selectedFruits.length > 0 ? selectedFruits : null,
            selectedAddons: selectedAddons.length > 0 ? selectedAddons : null,
            notes: notes.trim() || null,
            quantity,
        })
        setIsCartOpen(true)
        onClose()
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />

            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
                <div className="bg-background w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">

                    <div className="bg-header px-5 py-4 flex items-center justify-between shrink-0">
                        <h2 className="text-secondary font-display font-bold text-lg line-clamp-1 mr-2">
                            {product.name}{product.obs ? ` - ${product.obs}` : ""}
                        </h2>
                        <button onClick={onClose} className="text-secondary hover:text-surface transition-colors cursor-pointer shrink-0">
                            <IoClose size={24} />
                        </button>
                    </div>

                    <div className="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-5">

                        {/* Imagem + preço */}
                        <div className="flex items-center gap-4">
                            <div className="bg-surface rounded-2xl w-24 h-24 flex items-center justify-center shrink-0">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
                                ) : (
                                    <IoBagOutline size={32} className="text-header/30" />
                                )}
                            </div>
                            <div>
                                <p className="font-main font-bold text-header text-base leading-tight">{product.name}</p>
                                {product.obs && <p className="font-main text-header/60 text-sm mt-0.5">{product.obs}</p>}
                                <p className="font-main font-bold text-primary text-xl mt-1">
                                    R$ {product.price.toFixed(2).replace(".", ",")}
                                </p>
                            </div>
                        </div>

                        {/* Descrição */}
                        {product.description && (
                            <p className="font-main text-sm text-header/70 leading-relaxed">
                                {product.description}
                            </p>
                        )}

                        {/* Sabor único (sorvete, trufa, milkshake) */}
                        {hasFlavors && (
                            <div>
                                <p className="font-main font-bold text-header text-sm mb-3">
                                    Escolha o sabor <span className="text-red-500">*</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {product.flavors.map(flavor => (
                                        <button
                                            key={flavor}
                                            onClick={() => setSelectedFlavor(flavor)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer ${
                                                selectedFlavor === flavor
                                                    ? "bg-accent border-accent text-secondary"
                                                    : "bg-background border-surface text-header hover:border-accent"
                                            }`}
                                        >
                                            {flavor}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sabores múltiplos (sorvete 2 e 3 bolas) */}
                        {hasMultiFlavors && (
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="font-main font-bold text-header text-sm">
                                        Escolha os sabores <span className="text-red-500">*</span>
                                    </p>
                                    <span className={`text-xs font-main font-semibold px-2 py-0.5 rounded-full ${
                                        selectedFlavors.length >= product.maxFlavors
                                            ? "bg-accent text-secondary"
                                            : "bg-surface text-header/60"
                                    }`}>
                                        {selectedFlavors.length}/{product.maxFlavors}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.flavors.map(flavor => {
                                        const selected = selectedFlavors.includes(flavor)
                                        const atLimit = selectedFlavors.length >= product.maxFlavors
                                        return (
                                            <button
                                                key={flavor}
                                                onClick={() => setSelectedFlavors(prev =>
                                                    prev.includes(flavor)
                                                        ? prev.filter(f => f !== flavor)
                                                        : atLimit ? prev : [...prev, flavor]
                                                )}
                                                disabled={!selected && atLimit}
                                                className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                                                    selected
                                                        ? "bg-accent border-accent text-secondary"
                                                        : "bg-background border-surface text-header hover:border-accent"
                                                }`}
                                            >
                                                {flavor}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Calda (sorvetes) */}
                        {hasCalda && (
                            <div>
                                <p className="font-main font-bold text-header text-sm mb-3">
                                    Calda <span className="font-normal text-header/50">(opcional)</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {product.calda.map(c => (
                                        <button
                                            key={c}
                                            onClick={() => setSelectedCalda(prev => prev === c ? "" : c)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer ${
                                                selectedCalda === c
                                                    ? "bg-primary border-primary text-secondary"
                                                    : "bg-background border-surface text-header hover:border-primary"
                                            }`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sabores por categoria (tapioca) */}
                        {hasFlavorCategories && (
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="font-main font-bold text-header text-sm">
                                        Escolha o recheio <span className="text-red-500">*</span>
                                    </p>
                                    <span className={`text-xs font-main font-semibold px-2 py-0.5 rounded-full ${
                                        selectedFlavors.length >= product.maxFlavors
                                            ? "bg-accent text-secondary"
                                            : "bg-surface text-header/60"
                                    }`}>
                                        {selectedFlavors.length}/{product.maxFlavors}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {product.flavorCategories.map(cat => {
                                        const isCategoryBlocked = selectedCategory && cat.label !== selectedCategory
                                        return (
                                            <div key={cat.label}>
                                                <p className={`font-main text-xs font-semibold uppercase tracking-wide mb-2 ${isCategoryBlocked ? "text-header/25" : "text-header/50"}`}>
                                                    {cat.label}
                                                    {isCategoryBlocked && <span className="ml-1 normal-case">(não mistura com {selectedCategory.toLowerCase()})</span>}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {cat.options.map(opt => {
                                                        const selected = selectedFlavors.includes(opt)
                                                        const atLimit = selectedFlavors.length >= product.maxFlavors
                                                        const blocked = isCategoryBlocked || (!selected && atLimit)
                                                        return (
                                                            <button
                                                                key={opt}
                                                                onClick={() => toggleMultiFlavor(opt, cat.label)}
                                                                disabled={blocked}
                                                                className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                                                                    selected
                                                                        ? "bg-accent border-accent text-secondary"
                                                                        : "bg-background border-surface text-header hover:border-accent"
                                                                }`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Frutas (açaí) */}
                        {hasFruits && (
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-main font-bold text-header text-sm">
                                        {product.fruitsLabel || "Frutas"}
                                    </p>
                                    <span className="text-xs font-main text-header/50">
                                        Tem direito a {product.includedFruits} — extras +R$ {(product.extraFruitPrice || 1).toFixed(2).replace(".", ",")} cada
                                    </span>
                                </div>
                                {extraFruitsCount > 0 && (
                                    <p className="text-xs font-main text-primary font-semibold mb-2">
                                        +{extraFruitsCount} fruta{extraFruitsCount > 1 ? "s" : ""} extra{extraFruitsCount > 1 ? "s" : ""} = +R$ {(extraFruitsCount * (product.extraFruitPrice || 1)).toFixed(2).replace(".", ",")}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {product.fruits.map(fruit => (
                                        <button
                                            key={fruit}
                                            onClick={() => toggleFruit(fruit)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer ${
                                                selectedFruits.includes(fruit)
                                                    ? "bg-accent border-accent text-secondary"
                                                    : "bg-background border-surface text-header hover:border-accent"
                                            }`}
                                        >
                                            {fruit}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Adicionais (açaí) */}
                        {hasAddons && (
                            <div>
                                <p className="font-main font-bold text-header text-sm mb-3">Adicionais</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.addons.map(addon => {
                                        const selected = selectedAddons.includes(addon.name)
                                        return (
                                            <button
                                                key={addon.name}
                                                onClick={() => setSelectedAddons(prev =>
                                                    prev.includes(addon.name)
                                                        ? prev.filter(a => a !== addon.name)
                                                        : [...prev, addon.name]
                                                )}
                                                className={`px-3 py-1.5 rounded-full text-xs font-main font-semibold border-2 transition-all cursor-pointer ${
                                                    selected
                                                        ? "bg-accent border-accent text-secondary"
                                                        : "bg-background border-surface text-header hover:border-accent"
                                                }`}
                                            >
                                                {addon.name} +R$ {addon.price.toFixed(2).replace(".", ",")}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Observações */}
                        <div>
                            <p className="font-main font-bold text-header text-sm mb-2">Observações</p>
                            <textarea
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                                placeholder="Ex: Algo que você queria tirar do lanche..."
                                rows={3}
                                className="w-full rounded-2xl border-2 border-surface bg-surface px-4 py-3 font-main text-sm text-header placeholder-header/40 focus:outline-none focus:border-accent resize-none"
                            />
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="border-t border-surface px-5 py-4 flex items-center gap-3 shrink-0">
                        <div className="flex items-center gap-2 bg-surface rounded-2xl px-3 py-2.5">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-7 h-7 rounded-full bg-accent text-secondary flex items-center justify-center hover:opacity-80 active:scale-95 transition-all cursor-pointer"
                            >
                                <FiMinus size={12} />
                            </button>
                            <span className="font-main font-bold text-header text-base w-6 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-7 h-7 rounded-full bg-accent text-secondary flex items-center justify-center hover:opacity-80 active:scale-95 transition-all cursor-pointer"
                            >
                                <FiPlus size={12} />
                            </button>
                        </div>

                        <button
                            onClick={handleAdd}
                            disabled={!isValid}
                            className="flex-1 cursor-pointer bg-accent text-secondary font-main font-semibold py-3 rounded-2xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Adicionar · R$ {totalPrice.toFixed(2).replace(".", ",")}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductModal
