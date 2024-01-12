import { Outlet } from "react-router-dom"
import Footer from "../FixedComponents/Footer"
import Navbar from "../FixedComponents/Navbar"

function Layout() {
    return (
        <div>
            <Navbar />
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}

export default Layout