import { useState } from "react"
import { useCart } from "../../context/CartContext"
import ProductModal from "../ProductModal"

const ProductCard = ({ id, name, price, image, alt, badge, obs, category, description, flavors, calda, flavorCategories, maxFlavors, fruits, includedFruits, extraFruitPrice, addons, fruitsLabel }) => {
    const { addToCart, setIsCartOpen } = useCart()
    const [modalOpen, setModalOpen] = useState(false)

    function handleAdd() {
        if (description || flavors || flavorCategories || fruits) {
            setModalOpen(true)
        } else {
            addToCart({ id, name, price, image, obs, category })
            setIsCartOpen(true)
        }
    }

    return (
        <>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-surface w-full lg:max-w-75">

                <div className="bg-surface flex flex-col items-center justify-center h-44 relative">
                    {badge && (
                        <span className="absolute top-3 left-3 bg-header text-secondary text-[11px] font-main font-semibold px-3 py-1 rounded-full">
                            {badge}
                        </span>
                    )}
                    {image && (
                        <img className="lg:w-60 lg:h-60 object-contain" src={image} alt={alt} />
                    )}
                </div>

                <div className="bg-background px-2 pt-3 pb-3 flex flex-col gap-3 justify-between">
                    <div>
                        <p className="lg:text-[15px] text-xs line-clamp-1 font-main font-bold text-header">{name}{obs && ` - ${obs}`}</p>
                        {price !== null ? (
                            <p className="text-[13px] font-main font-semibold text-primary">
                                R$ {price.toFixed(2).replace(".", ",")}
                            </p>
                        ) : (
                            <p className="text-[13px] font-main font-semibold text-primary">A consultar</p>
                        )}
                    </div>

                    <button
                        onClick={handleAdd}
                        className="w-full cursor-pointer bg-accent text-secondary text-[10px] lg:text-[13px] font-main font-semibold py-3 rounded-2xl hover:opacity-90 active:scale-95 transition-all"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>

            </div>

            {modalOpen && (
                <ProductModal
                    product={{ id, name, price, image, obs, category, description, flavors, calda, flavorCategories, maxFlavors, fruits, includedFruits, extraFruitPrice, addons, fruitsLabel }}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    )
}

export default ProductCard
