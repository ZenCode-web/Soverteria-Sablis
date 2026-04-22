import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const produtos = document.getElementById("produtos")
      if (produtos) {
        produtos.scrollIntoView({ behavior: "smooth" })
      } else {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
      }
    }, 10)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header/>
         <main className="bg-background pt-20 lg:pt-22 flex-1">
            <Outlet/>
         </main>
      <Footer/>
    </div>
  )
}

export default App
