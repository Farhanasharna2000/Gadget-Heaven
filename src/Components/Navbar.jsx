import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {

    const links=<>
     <li><NavLink 
     className={({ isActive }) =>
                `font-bold ${isActive ? 'bg-slate-800 text-white' : 'hover:text-warning'}`
              } to='/'>Home</NavLink ></li>
     <li><NavLink className={({ isActive }) =>
                `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
              } to='/statistics'>Statistics</NavLink ></li>
     <li><NavLink className={({ isActive }) =>
                `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
              } to='/dashboard'>Dashboard</NavLink ></li>

    </>
    return (
        <div className="navbar bg-base-100 pt-5">
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
                <a className="btn font-bold text-xl bg-white border-none">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
            {/* <div className="indicator">
  <span className="indicator-item badge badge-secondary bg-white text-black border-gray-300">1</span>
  <a className="btn bg-white border px-3  rounded-full text-xl"><IoCartOutline /></a>
</div> */}
<a className="btn bg-white border px-3  rounded-full text-xl"><IoCartOutline /></a>
<a className="btn bg-white border px-3 rounded-full text-xl"><FaRegHeart /></a>
{/* <div className="indicator">
  <span className="indicator-item badge badge-secondary bg-white text-black border-gray-300">1</span>
  <a className="btn bg-white border px-3 rounded-full text-xl"><FaRegHeart /></a>
</div> */}
               
             

            </div>
        </div>
    );
};

export default Navbar;