import LogoSoveteria from "../assets/icon/LogoSoveteria.png"
import InconCarrinho from "../assets/icon/InconCarrinho.png"
import InconSovete from "../assets/icon/InconSovete.png"
import InconAcai from "../assets/icon/InconAcai.png"
import InconLanches from "../assets/icon/InconLanches.png"
import InconSalgadinhoEPipocas from "../assets/icon/InconSalgadinhoEPipocas.png"
import InconSaldaDeFlutas from "../assets/icon/InconSaldaDeFlutas.png"
import InconBebidasQuentes from "../assets/icon/InconBebidasQuentes.png"
import InconBebidasGeladas from "../assets/icon/InconBebidasGeladas.png"
import BannerSovete from "../assets/icon/InconTacaDeSovete1.png"

const Data = [
    {
      headerLogo: [
        {src: LogoSoveteria, alt: "Logo sovete"}
      ]
    },
    {
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
    },
    {
      bannerSoveter: [
        {src: BannerSovete, alt: "Incon Soverte"}
      ]
    },
    {
      products: {
        sorvetes: [
          { id: 1, name: "Sorvete 1 bola", obs: "copo", price: 4.00, category: "Sorvetes e Gelados" },
          { id: 2, name: "Sorvete 2 bolas", obs: "casquinha", price: 9.00, category: "Sorvetes e Gelados" },
          { id: 3, name: "Sorvete 2 bolas", obs: "copo", price: 8.00, category: "Sorvetes e Gelados" },
          { id: 4, name: "Sorvete 3 bolas", obs: "copo", price: 11.00, category: "Sorvetes e Gelados" },
          { id: 5, name: "Sorvete meio litro", obs: null, price: 18.00, category: "Sorvetes e Gelados" },
          { id: 6, name: "Sorvete 1 litro", obs: null, price: 29.00, category: "Sorvetes e Gelados" },
          { id: 7, name: "Trufa", obs: "unidade", price: 3.00, category: "Sorvetes e Gelados" },
        ],
        acaiMilkshake: [
          { id: 8, name: "Milk-shake", obs: "250 ml", price: 10.00, category: "Açaí e Milk-shake" },
          { id: 9, name: "Milk-shake", obs: "300 ml", price: 12.00, category: "Açaí e Milk-shake" },
          { id: 10, name: "Milk-shake", obs: "400 ml", price: 13.00, category: "Açaí e Milk-shake" },
          { id: 11, name: "Milk-shake", obs: "500 ml", price: 15.00, category: "Açaí e Milk-shake" },
          { id: 12, name: "Milk-shake", obs: "770 ml", price: 20.00, category: "Açaí e Milk-shake" },
          { id: 13, name: "Açaí", obs: "250 ml", price: 8.00, category: "Açaí e Milk-shake" },
          { id: 14, name: "Açaí", obs: "300 ml", price: 10.00, category: "Açaí e Milk-shake" },
          { id: 15, name: "Açaí", obs: "400 ml", price: 12.00, category: "Açaí e Milk-shake" },
          { id: 16, name: "Açaí", obs: "500 ml", price: 15.00, category: "Açaí e Milk-shake" },
          { id: 17, name: "Açaí", obs: "770 ml", price: 18.00, category: "Açaí e Milk-shake" },
          { id: 18, name: "Açaí", obs: "1 litro", price: 23.00, category: "Açaí e Milk-shake" },
          { id: 19, name: "Açaí de pote", obs: "900 ml", price: 18.00, category: "Açaí e Milk-shake" },
        ],
        lanches: [
          { id: 20, name: "Cachorro quente (carne)", obs: null, price: 8.00, category: "Lanches e Pratos" },
          { id: 21, name: "Cachorro quente (frango)", obs: null, price: 9.00, category: "Lanches e Pratos" },
          { id: 22, name: "Misto", obs: null, price: 7.00, category: "Lanches e Pratos" },
          { id: 23, name: "Hamburguer simples", obs: null, price: 13.00, category: "Lanches e Pratos" },
          { id: 24, name: "Tapioca", obs: "P", price: 8.00, category: "Lanches e Pratos" },
          { id: 25, name: "Tapioca", obs: "M", price: 11.00, category: "Lanches e Pratos" },
          { id: 26, name: "Tapioca", obs: "G", price: 15.00, category: "Lanches e Pratos" },
          { id: 27, name: "Cuscuz recheado", obs: null, price: 13.00, category: "Lanches e Pratos" },
        ],
        salgadinhos: [
          { id: 28, name: "Gravata", obs: "30 g", price: 2.00, category: "Salgadinhos e Pipocas" },
          { id: 29, name: "Reizinho", obs: "30 g", price: 2.00, category: "Salgadinhos e Pipocas" },
          { id: 30, name: "Fandangos", obs: "23 g", price: 2.00, category: "Salgadinhos e Pipocas" },
          { id: 31, name: "Cebolitos", obs: "21 g", price: 2.00, category: "Salgadinhos e Pipocas" },
          { id: 32, name: "Cheetos", obs: "21 g", price: 2.00, category: "Salgadinhos e Pipocas" },
          { id: 33, name: "Cheetos", obs: "40 g", price: 4.00, category: "Salgadinhos e Pipocas" },
          { id: 34, name: "Cebolitos", obs: "45 g", price: 5.00, category: "Salgadinhos e Pipocas" },
          { id: 35, name: "Fandangos", obs: "35 g", price: 3.00, category: "Salgadinhos e Pipocas" },
          { id: 36, name: "Ruffles", obs: "32 g", price: 5.00, category: "Salgadinhos e Pipocas" },
          { id: 37, name: "Doritos", obs: "32 g", price: 5.00, category: "Salgadinhos e Pipocas" },
          { id: 38, name: "Sensações", obs: "40 g", price: 6.50, category: "Salgadinhos e Pipocas" },
          { id: 39, name: "Biscoito Treloso", obs: "120 g", price: 2.50, category: "Salgadinhos e Pipocas" },
          { id: 40, name: "Pipoca de microondas", obs: "100 g", price: 7.00, category: "Salgadinhos e Pipocas" },
          { id: 41, name: "Pipoca estourada", obs: null, price: 8.00, category: "Salgadinhos e Pipocas" },
        ],
        saladaFrutas: [
          { id: 42, name: "Salada de frutas", obs: "250 ml", price: 6.00, category: "Salada de Frutas e Doces" },
          { id: 43, name: "Salada de frutas", obs: "300 ml", price: 7.00, category: "Salada de Frutas e Doces" },
          { id: 44, name: "Salada de frutas", obs: "400 ml", price: 8.00, category: "Salada de Frutas e Doces" },
          { id: 45, name: "Salada de frutas", obs: "500 ml", price: 10.00, category: "Salada de Frutas e Doces" },
          { id: 46, name: "Salada de frutas", obs: "770 ml", price: 13.00, category: "Salada de Frutas e Doces" },
        ],
        bebidasQuentes: [
          { id: 47, name: "Chocolate quente", obs: "250 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 48, name: "Chocolate quente", obs: "300 ml", price: 8.00, category: "Bebidas Quentes" },
          { id: 49, name: "Chocolate quente", obs: "400 ml", price: 10.00, category: "Bebidas Quentes" },
          { id: 50, name: "Chocolate quente", obs: "500 ml", price: 12.00, category: "Bebidas Quentes" },
          { id: 51, name: "Chocolate quente", obs: "770 ml", price: 17.00, category: "Bebidas Quentes" },
          { id: 52, name: "Café", obs: "250 ml", price: 4.00, category: "Bebidas Quentes" },
          { id: 53, name: "Cappuccino", obs: "250 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 54, name: "Suco natural - Maracujá", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 55, name: "Suco natural - Acerola", obs: "300 ml", price: 5.00, category: "Bebidas Quentes" },
          { id: 56, name: "Suco natural - Graviola", obs: "300 ml", price: 5.00, category: "Bebidas Quentes" },
          { id: 57, name: "Suco natural - Cajá", obs: "300 ml", price: 5.00, category: "Bebidas Quentes" },
          { id: 58, name: "Suco natural - Caju", obs: "300 ml", price: 5.00, category: "Bebidas Quentes" },
          { id: 59, name: "Suco natural - Umbu", obs: "300 ml", price: 5.00, category: "Bebidas Quentes" },
          { id: 60, name: "Suco natural - Maracujá com leite", obs: "300 ml", price: 7.00, category: "Bebidas Quentes" },
          { id: 61, name: "Suco natural - Acerola com leite", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 62, name: "Suco natural - Graviola com leite", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 63, name: "Suco natural - Cajá com leite", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 64, name: "Suco natural - Caju com leite", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
          { id: 65, name: "Suco natural - Umbu com leite", obs: "300 ml", price: 6.00, category: "Bebidas Quentes" },
        ],
        bebidasGeladas: [
          { id: 66, name: "Água", obs: "500 ml", price: 2.00, category: "Bebidas Geladas" },
          { id: 67, name: "Água com gás", obs: "500 ml", price: 4.00, category: "Bebidas Geladas" },
          { id: 68, name: "Coca-Cola lata", obs: "350 ml", price: 5.00, category: "Bebidas Geladas" },
          { id: 69, name: "Coca-Cola zero lata", obs: "350 ml", price: 5.00, category: "Bebidas Geladas" },
          { id: 70, name: "Fanta lata", obs: "350 ml", price: 4.00, category: "Bebidas Geladas" },
          { id: 71, name: "Sprite lata", obs: "350 ml", price: 4.00, category: "Bebidas Geladas" },
          { id: 72, name: "Coca-Cola garrafa", obs: "250 ml", price: 3.50, category: "Bebidas Geladas" },
          { id: 73, name: "Refrigerante Santa Joana", obs: "250 ml", price: 2.00, category: "Bebidas Geladas" },
          { id: 74, name: "Coca-Cola garrafa vidro", obs: "290 ml", price: 5.00, category: "Bebidas Geladas" },
          { id: 75, name: "Coca-Cola 1 litro", obs: null, price: 8.00, category: "Bebidas Geladas" },
          { id: 76, name: "Suco Del Valle", obs: "450 ml", price: 4.00, category: "Bebidas Geladas" },
          { id: 77, name: "Monster", obs: "473 ml", price: 13.00, category: "Bebidas Geladas" },
          { id: 78, name: "RedBull", obs: "250 ml", price: 11.50, category: "Bebidas Geladas" },
          { id: 79, name: "TNT", obs: "473 ml", price: 10.00, category: "Bebidas Geladas" },
        ],
      }
    }
]

export default Data