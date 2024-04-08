import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaMoneyCheckDollar, FaUser, FaUtensils, } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-2">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'}><FaUtensils />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageBookings'}><FaBook />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}><FaUser />All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}><FaCalendar />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/review'}><FaAd />Review</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={'/dashboard/bookings'}><FaList />My Bookings</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'}><FaMoneyCheckDollar />Payment History</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider">
                    </div>
                    <li>
                        <NavLink to={'/'}><FaHome />Home</NavLink>
                    </li>

                    <li><NavLink to={'/order/salad'}> <FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to={'/contact'}> <FaEnvelope></FaEnvelope>Contact</NavLink></li>


                </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;