import Data from "../../Data/Data"
import Img from "../ImgTag"
import P from "../P"

const Banner = () => {
    const imagem = Data.find((e) => e.bannerSoveter).bannerSoveter

    return ( 

      <section className="h-55 w-full bg-golden-gradient flex justify-center px-7">
        
        <div className="py-8 flex items-center justify-between w-full lg:w-5xl ">

        <div className="flex flex-col gap-3.5 lg:pl-3.5">

        <h1 className="text-white text-[28px] font-main font-bold w-40 leading-none lg:text-4xl lg:w-60 ">O sabor que <span className="text-secondary font-display italic">você merece</span></h1>

        <P className="text-secondary font-normal text-[13px] w-60 lg:text-[15px] lg:w-70" valor="Sorvetes artesanais, açaí e muito mais. Faça seu pedido!"/>
        </div>

        <div className="">
          {imagem.map(({src, alt}, index) => (
            <img className="w-20 lg:w-22 animate-float" key={index} src={src} alt={alt}/>
          ))}
        </div>

       </div>
      </section>

    )
}

export default Banner