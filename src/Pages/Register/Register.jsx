import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { createUserUsingEmailPassword , userUpdateProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const url = form.get("photoUrl");
        const email = form.get('email');
        const password = form.get('password');
        const condition = form.get("condition");

        if(!condition){
            alert("Accept Term and Condition")
            return
        }
        // createUserUsingEmailPassword
        createUserUsingEmailPassword(email, password)
            .then(result => {
                console.log(result.user);
                userUpdateProfile(result.user, {
                    displayName:name,
                    photoURL: url
                })
                .then(()=>{
                    navigate("/")

                })
                .catch(()=>{
                    alert("Provide valid all information")
                })

            })
            .catch(() => {
                alert("This email already in use");
            })

    }

    return (
        <div className="bg-[#F3F3F3]">
            <Navbar></Navbar>
            <div className="  min-h-screen pt-10">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 lg:w-1/2 shrink-0 shadow-2xl p-3 md:p-10">
                        <h1 className="text-3xl font-bold text-center mb-10">Register your account</h1>
                        <hr />
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" value={"https://i.ibb.co/HPcnyMP/profile.png"} name="photoUrl" placeholder="Enter your photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label mt-3 flex gap-2">
                                    <input type="checkbox" name="condition" className="checkbox" />
                                    <p><span> Accept</span><span className="font-semibold">Term & Condition</span></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Register</button>
                                <p className="text-center my-6 font-semibold">Already Have An Account? <span className="text-red-600"><Link to={'/login'}>Login</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;