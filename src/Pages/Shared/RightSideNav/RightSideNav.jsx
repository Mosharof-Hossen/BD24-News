
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div className="font-poppins p-4">
            <h3 className="text-2xl font-bold mb-4">Login With</h3>
            <div className="space-y-2">
                <button className="btn border w-full"><FaGoogle className="h-4 w-4"></FaGoogle> Login with Google</button>
                <button className="btn border w-full"><FaGithub className="h-4 w-4"></FaGithub> Login with Github</button>
            </div>

            <h3 className="text-2xl font-bold my-4">Find Us on</h3>
            <div className="">
                <a href="" className="flex space-x-2 items-center border-2 rounded-t-lg p-4">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className="flex space-x-2 items-center border-x-2  p-4">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
                <a href="" className="flex space-x-2 items-center border-2 rounded-b-lg p-4">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>

            <h3 className="text-2xl font-bold my-4">Q-Zone</h3>
            <div className="">
                <img className="mx-auto" src={qZone1} alt=""/>
                <img className="mx-auto" src={qZone2} alt=""/>
                <img className="mx-auto" src={qZone3} alt=""/>
                {/* ok done */}
            </div>
        </div>
    );
};

export default RightSideNav;