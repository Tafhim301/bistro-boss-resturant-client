import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const navOptions =
        <div className="flex justify-center items-center">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
            <li><NavLink to={'/order/salad'}>Order Foods </NavLink></li>
            {
                user ? isAdmin ?<li><NavLink to={'/dashboard/adminHome'}>Dashboard</NavLink></li>:<li><NavLink to={'/dashboard/userHome'}>Dashboard </NavLink></li>: ''
            }
            <li><Link to={'dashboard/cart'}><button className="btn">
            <FaCartShopping className="" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button></Link></li>


        </div>
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }
    return (
        <div className="navbar fixed z-10   bg-black text-neutral-content bg-opacity-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            {
                                <button onClick={handleLogOut} className="btn">Log Out</button>

                            }

                        </div>
                        :

                        <Link to={'/login'}><button className="btn">Login</button></Link>
                }
            </div>
        </div>


    );
};

export default Navbar;