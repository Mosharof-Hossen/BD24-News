
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";


const RightSideNav = () => {
    return (
        <div className="font-poppins p-4">
            <h3 className="text-2xl font-bold mb-4">Login With</h3>
            <div className="space-y-2">
                <button className="btn border w-full"><FaGoogle className="h-4 w-4"></FaGoogle> Login with Google</button>
                <button className="btn border w-full"><FaGithub className="h-4 w-4"></FaGithub> Login with Github</button>
            </div>

            <h3 className="text-2xl font-bold my-4">Find Us on</h3>
            <div className="space-y-2">
                <a href="" className="flex space-x-2 items-center border-2 rounded-t-lg p-4">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
            </div>
        </div>
    );
};

export default RightSideNav;