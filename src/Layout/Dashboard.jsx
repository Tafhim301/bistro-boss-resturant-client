import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-2">
                    <li>
                        <NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}><FaCalendar />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}><FaAd />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}><FaList />My Bookings</NavLink>
                    </li>
                    <div className="divider">
                    </div>
                    <li>
                        <NavLink to={'/'}><FaHome />Home</NavLink>
                    </li>
                   
                    <li><NavLink to={'/menu'}> <FaSearch></FaSearch>Menu</NavLink></li>
                  

                </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;