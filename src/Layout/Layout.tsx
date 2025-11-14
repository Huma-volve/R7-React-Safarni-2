import Footer from "@/Components/Footer/Footer"
import { lazy } from "react"
import { Outlet } from "react-router"

const Navbar = lazy(() => import("../Components/NavBar/NavBar"))
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
