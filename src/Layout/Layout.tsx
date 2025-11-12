import Footer from "@/Components/Footer/Footer"
import NavBar from "@/Components/NavBar/NavBar"
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
