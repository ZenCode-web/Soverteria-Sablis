import Data from "../../Data/Data"
import ProductCard from "../../components/ProductCard"
import ContainerCategory from "../../components/ContainerCategory"

const LanchesEpratos = () => {
    const products = Data.find((e) => e.products).products.lanches

    return (
        <section className="flex justify-center items-center flex-col py-5 gap-6">
          <ContainerCategory />
          <div className="w-full flex items-center justify-center">
              <h1 className="lg:text-4xl font-semibold text-2xl font-main">Lanches e Pratos</h1>
          </div>
          <div className="flex justify-center items-center w-full lg:max-w-5xl">
            <div className="px-4 grid lg:grid-cols-3 grid-cols-2 gap-4 bg-background lg:mx-auto w-full">
                {products.map(({ id, name, obs, price, image }) => (
                    <ProductCard key={id} name={name} price={price} alt={name} obs={obs} image={image} />
                ))}
            </div>
          </div>
        </section>
    )
}

export default LanchesEpratos
