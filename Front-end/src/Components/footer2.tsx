import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
export const Footer2 = () => {
    return (
        <div className="w-[1920px] h-[53px] bg-[#e7e4f8] flex gap-96">
            <div>
                <h1 className="text-xl text-gray-400 ml-44">©ecommerce</h1>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <FaFacebook className="w-[30px] h-[30px]" />
                </div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#151875] flex justify-center items-center">
                    <FaInstagram className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#151875] flex justify-center items-center">
                    <FaTwitter className="w-[20px] h-[20px] text-white" />

                </div>
            </div>
        </div>
    )
}