import LogoSoveteria from "../assets/icon/LogoSoveteria.png"
import InconCarrinho from "../assets/icon/InconCarrinho.png"
import InconSovete from "../assets/icon/InconSovete.png"
import InconAcai from "../assets/icon/InconAcai.png"
import InconLanches from "../assets/icon/InconLanches.png"
import InconSalgadinhoEPipocas from "../assets/icon/InconSalgadinhoEPipocas.png"
import InconSaldaDeFlutas from "../assets/icon/InconSaldaDeFlutas.png"
import InconBebidasQuentes from "../assets/icon/InconBebidasQuentes.png"
import InconBebidasGeladas from "../assets/icon/InconBebidasGeladas.png"

const Data = [
    {
      headerLogo: [
        {src: LogoSoveteria, alt: "Logo sovete"}
      ],

      headerCarrinho: [
        {src: InconCarrinho, alt: "Carrinho"}
      ],
    },
    {
      containerCategory: [
        { id: 1, icon: InconSovete, alt: "Sorvetes e Gelados", name: "Sorvetes e Gelados", link: "/sorvetes-e-gelados" },
        { id: 2, icon: InconAcai, alt: "Açaí e Milk-shake", name: "Açaí e Milk-shake", link: "/acai-e-milk-shake" },
        { id: 3, icon: InconLanches, alt: "Lanches e Pratos", name: "Lanches e Pratos", link: "/lanches-e-pratos" },
        { id: 4, icon: InconSalgadinhoEPipocas, alt: "Salgadinhos e Pipocas", name: "Salgadinhos e Pipocas", link: "/salgadinhos-e-pipocas" },
        { id: 5, icon: InconSaldaDeFlutas, alt: "Salada de Frutas e Doces", name: "Salada de Frutas e Doces", link: "/salada-de-frutas-e-doces" },
        { id: 6, icon: InconBebidasQuentes, alt: "Bebidas Quentes", name: "Bebidas Quentes", link: "/bebidas-quentes" },
        { id: 7, icon: InconBebidasGeladas, alt: "Bebidas Geladas", name: "Bebidas Geladas", link: "/bebidas-geladas" },
      ]
    }
]

export default Data