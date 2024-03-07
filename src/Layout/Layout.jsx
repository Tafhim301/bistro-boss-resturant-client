import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Layout;