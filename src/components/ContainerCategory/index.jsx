import { Link } from "react-router-dom"
import Data from "../../Data/Data"
import Img from "../ImgTag"

const ContainerCategory = () => {

    const categories = Data.find((e) => e.containerCategory).containerCategory

    return (
        <section className="lg:px-0 px-4 py-6 bg-background w-full lg:max-w-5xl lg:mx-auto">

            <h2 className="text-[20px] font-main font-bold text-header mb-4 lg:text-[24px] border-b border-header">
                Nosso <span className="font-display italic text-primary">Cardápio</span>
            </h2>

            <div className="lg:flex  lg:flex-wrap lg:justify-center lg:items-center grid grid-cols-2 gap-4">
                {categories.map(({ id, icon, alt, name, link }) => (
                    <Link to={link} key={id} className="bg-white rounded-2xl flex flex-col items-center justify-center p-4 shadow-sm w-full h-full lg:max-w-61 lg:max-h-42.25 transition-all duration-75 hover:border-2 hover:border-header hover:p-3.5">
                        <div className=" rounded-2xl w-fit h-fit flex items-center justify-center">
                            <Img className="w-20 h-20 object-contain" src={icon} alt={alt} />
                        </div>
                        <p className="text-[13px] font-main font-semibold text-header text-center leading-tight lg:text-[15px]">
                            {name}
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default ContainerCategory
