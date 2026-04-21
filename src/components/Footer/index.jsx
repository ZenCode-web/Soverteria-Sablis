import P from "../P"
import { MdAutoAwesome } from "react-icons/md"
import { FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="h-55 w-full p-6 bg-header flex flex-col items-center mt-auto">

           <section className="flex flex-col items-center gap-1.5 w-full lg:w-5xl lg:flex-row lg:justify-between ">

            <div className="flex flex-col items-center gap-1">
                <h2 className="text-[20px] text-secondary font-display font-bold">Soveteria Sambris</h2>
                <div className="flex items-center gap-1">
                    <P className="text-surface text-[11px] font-main italic" valor="O sabor que você merece "/>
                    <MdAutoAwesome className="text-yellow-400 text-[11px]" />
                </div>
            </div>
       


            <div className="flex flex-col items-center mb-2 lg:mb-03">
                <h3 className="text-secondary font-display font-bold">Contato</h3>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                        <FaPhone className="text-surface text-[13px]" />
                        <P className="text-surface text-[14px]" valor="(81) 9 9549-4243"/>
                    </div>
                    <P className="text-surface text-[12px] w-70 text-center" valor="Segunda das 8h da manhã as10 horas dá noite. Domingo das 12h as 10 horas da noite."/>
                </div>
                
                      
            </div>

                

           </section>

            <div className="border-t border-surface/40 w-full pt-5 flex flex-col items-center mt-auto">
                    <p className="text-surface text-[11px] font-main">© 2026 ZEM<span className="font-bold">CODE</span>.</p>
                </div>
        </footer>
    )
}

export default Footer