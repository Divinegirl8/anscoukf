import { Outlet } from "react-router"
import NavBar from "./Nav"
import Footer from "./Footer";

const Layout = () => {
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>

        </>
    )
}

export default Layout;
