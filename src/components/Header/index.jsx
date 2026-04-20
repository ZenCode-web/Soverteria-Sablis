import Data from "../../Data/Data"
import H2 from "../H2"
import Img from "../ImgTag"
import P from "../P"

const Header = () => {

    const imagemLogo = Data.find((e) => e.headerLogo).headerLogo
    const imagemCarrinho = Data.find((e) => e.headerCarrinho).headerCarrinho

    return (
       <header className="w-full bg-header h-20 flex justify-center items-center lg:h-15">
          
          <section className="flex items-center justify-between w-full mx-4 lg:w-[1024px]">

           <div className="flex items-center ">

                <div className="lg:w-14">
                   {imagemLogo.map(({src, alt}, index) => (
                    <Img className="w-18 " key={index} src={src} alt={alt} />
                   ))}
                </div>

                <div className="flex flex-col gap-0 leading-none">

                 <H2 className="text-[18px] font-main font-bold text-secondary lg:text-[14px]" valor="Soveteria"/>

                 <P className="text-[14px] font-normal italic font-display text-surface lg:text-[10px]" valor="Samblis"/>

                </div>

           </div>

           <div className="h-13 w-13 bg-primary rounded-2xl flex items-center justify-center lg:h-10 lg:w-10 lg:rounded-lg"> 
             <div>
                 {imagemCarrinho.map(({src, alt}, index) => (
                    <Img className="w-9 lg:w-7" key={index} src={src} alt={alt}/>
                 ))}
             </div>
             <span className="bg-header rounded-full h-5 w-5 text-secondary flex justify-center items-center text-[10px] absolute top-2 ml-12 border lg:h-3 lg:w-3 lg:text-[6px] lg:top-2 lg:ml-9">
                0
             </span>
           </div>

           </section>

       </header>
    )
}

export default Header