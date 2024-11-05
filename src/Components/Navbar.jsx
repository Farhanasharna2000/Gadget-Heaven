import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useCart } from "../Utilitis/CartProvider ";


const Navbar = () => {
    const { cartCount } = useCart();
    const { favCount  } = useCart();
    const location = useLocation();

    const navbarBgColor = location.pathname === '/' ? 'bg-[#9538E2] rounded-t-2xl' : 'bg-base-100';
    const hoverTextColor = location.pathname === '/' ? 'hover:text-base-100 rounded-t-2xl' : 'hover:text-[#9538E2]';
    const textColor = location.pathname === '/' ? 'text-white' : 'text-black';

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `font-bold ${isActive ? 'bg-black text-white' : `${hoverTextColor} ${textColor}`}`
                    }
                    to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `font-bold ${isActive ? 'bg-black text-white' : `${hoverTextColor} ${textColor}`}`
                    }
                    to='/statistics'>
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `font-bold ${isActive ? 'bg-black text-white' : `${hoverTextColor} ${textColor}`}`
                    }
                    to='/dashboard'>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `font-bold ${isActive ? 'bg-black text-white' : `${hoverTextColor} ${textColor}`}`
                    }
                    to='/products'>
                    Products
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`navbar ${navbarBgColor} pt-5 mt-5`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className={`btn font-bold text-xl ${textColor} ${navbarBgColor} border-none`}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4 ">
                <div className="indicator">
                    <a className="btn bg-white border px-3 rounded-full text-xl "><IoCartOutline />  <span className="indicator-item badge badge-secondary">{cartCount}</span></a>
                </div>
                <div className="indicator mr-5">
                    <a className="btn bg-white border px-3 rounded-full text-xl"><FaRegHeart /> <span className="indicator-item badge badge-secondary">{favCount}</span></a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
