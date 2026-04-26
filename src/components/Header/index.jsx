import Data from "../../Data/Data"
import H2 from "../H2"
import Img from "../ImgTag"
import P from "../P"
import CartModal from "../CartModal"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Header = () => {

    const imagemLogo = Data.find((e) => e.headerLogo).headerLogo
    const imagemCarrinho = Data.find((e) => e.headerCarrinho).headerCarrinho
    const { totalItems, setIsCartOpen } = useCart()

    return (
       <>
       <header className="w-full bg-header h-20 flex justify-center items-center lg:h-22 fixed top-0 left-0 z-20">

          <section className="flex items-center justify-between w-full mx-4 lg:w-[1024px]">

           <div className="flex items-center ">

                <div>
                  <Link to="/">
                        {imagemLogo.map(({src, alt}, index) => (
                    <Img className="w-18 lg:w-22" key={index} src={src} alt={alt} />
                   ))}
                  </Link>
                </div>

                <div className="flex flex-col gap-0 leading-none">

                 <H2 className="text-[18px] font-main font-bold text-secondary lg:text-[24px]" valor="Sorveteria"/>

                 <P className="text-[14px] font-normal italic font-display text-surface lg:text-[18px]" valor="Sambles"/>

                </div>

           </div>

           <div
             onClick={() => setIsCartOpen(true)}
             className="h-13 w-13 bg-primary rounded-2xl flex items-center justify-center lg:h-15 lg:w-15 lg:mr-2.5 cursor-pointer hover:opacity-90 active:scale-95 transition-all relative"
           >
             <div>
                 {imagemCarrinho.map(({src, alt}, index) => (
                    <Img className="w-9 lg:w-11" key={index} src={src} alt={alt}/>
                 ))}
             </div>
             <span className="bg-header rounded-full h-5 w-5 text-secondary flex justify-center items-center text-[10px] absolute -top-1 ml-12 border lg:ml-14">
                {totalItems > 99 ? "99+" : totalItems}
             </span>
           </div>

           </section>

       </header>
       <CartModal />
       </>
    )
}

export default Header
