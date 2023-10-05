import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { FaFacebook, } from "react-icons/fa";
import {  FaSquareXTwitter } from "react-icons/fa6";
import {  RiInstagramFill } from "react-icons/ri";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"


const RightSide = () => {
    return (
        <div>
            <div className="p-4 space-y-6 mb-6">
                <h2 className="text-2xl font-semibold">Login with</h2>
                <div className="space-y-3">
                    <button className="btn btn-outline w-full">
                        <AiOutlineGoogle></AiOutlineGoogle>
                        Login with Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <AiFillGithub></AiFillGithub>
                        Login with Google
                    </button>
                </div>
            </div>
            <div className="p-4 space-y-6">
                <h2 className="text-2xl font-semibold">Find us</h2>
                <div className="">
                    <a className="flex items-center gap-3 p-5 border rounded-t-lg" href="">
                        <FaFacebook className="text-xl"></FaFacebook>
                        FaceBook
                    </a>
                    <a className="flex items-center gap-3 p-5 border-x" href="">
                        <FaSquareXTwitter className="text-xl"></FaSquareXTwitter>
                        Twitter
                    </a>
                    <a className="flex items-center gap-3 p-5 border rounded-b-lg" href="">
                        <RiInstagramFill className="text-xl"></RiInstagramFill>
                        Instagram
                    </a>
                </div>
            </div>

            <div className="p-4 space-y-6 mb-6 bg-[#F3F3F3] rounded">
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <div className="space-y-3">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSide;