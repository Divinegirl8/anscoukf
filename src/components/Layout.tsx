import { Outlet } from "react-router"
import NavBar from "./Nav"

const Layout = () => {
    return(
        <>
        <NavBar/>
        <Outlet/>

        </>
    )
}

export default Layout;
