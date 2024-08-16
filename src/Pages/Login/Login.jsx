import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const { signInUsingEmailPassword } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // signInUsingEmailPassword
        signInUsingEmailPassword(email, password)
            .then(() => {
                toast("Login Successfully");
                navigate(location?.state ? location.state :"/");
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    return (
        <div className="bg-[#F3F3F3]">
            <Navbar></Navbar>
            <div className="  min-h-screen pt-10">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 lg:w-1/2 shrink-0 shadow-2xl p-3 md:p-10">
                        <h1 className="text-3xl font-bold text-center mb-10">Login your Account!</h1>
                        <hr />
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                                <ToastContainer />
                                <p className="text-center my-6 font-semibold">Do not Have An Account? <span className="text-red-600"><Link to={'/register'}>Register</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;