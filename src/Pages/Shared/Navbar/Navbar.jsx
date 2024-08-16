import { Link, NavLink } from "react-router-dom";
import defaultUserImage from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut()
            .then(() => {
                toast("Logout Successfully.")
            }).catch((err) => {
                console.log(err.message);
            })
    }

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 my-4">

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
                        {
                            links
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={defaultUserImage} />
                    </div>
                </div>
                {
                    user ?
                        <>
                            <button onClick={handleSingOut} className="btn text-white bg-gray-700">Sign Out</button>

                        </>
                        :
                        <Link to={"/login"}>
                            <button className="btn text-white bg-gray-700">Login</button>
                        </Link>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;