import Data from "../../Data/Data"
import ProductCard from "../../components/ProductCard"
import ContainerCategory from "../../components/ContainerCategory"

const SorvetesEgelados = () => {
    const products = Data.find((e) => e.products).products.sorvetes

    return (
        <section className="flex justify-center items-center flex-col py-5 gap-6">
          <ContainerCategory />
          <div className="w-full flex items-center justify-center">
              <h1 id="produtos" className="lg:text-4xl font-semibold text-2xl font-main">Sorvetes e Gelados</h1>
          </div>
          <div className="flex justify-center items-center w-full lg:max-w-5xl">
            <div className="px-4 grid lg:grid-cols-3 grid-cols-2 gap-4 bg-background lg:mx-auto w-full">
                {products.map(({ id, name, obs, price, image, category, description, flavors, calda, flavorCategories, maxFlavors, fruits, includedFruits, extraFruitPrice }) => (
                    <ProductCard key={id} id={id} name={name} price={price} alt={name} obs={obs} image={image} category={category} description={description} flavors={flavors} calda={calda} flavorCategories={flavorCategories} maxFlavors={maxFlavors} fruits={fruits} includedFruits={includedFruits} extraFruitPrice={extraFruitPrice} />
                ))}
            </div>
          </div>
        </section>
    )
}

export default SorvetesEgelados
