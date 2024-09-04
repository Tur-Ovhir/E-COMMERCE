import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
export const Footer2 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1920px] h-[53px] bg-[#e7e4f8] flex gap-96 justify-center">
        <div className="w-[965px] h-[53px] flex  justify-between items-center">
          <div>
            <h1 className="text-xl text-gray-400 ">©ecommerce</h1>
          </div>
          <div className="flex gap-4">
            <div className="">
              <Link href="https://www.facebook.com/groups/638631889499269/">
                <FaFacebook className="w-[30px] h-[30px]" />
              </Link>
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#151875] flex justify-center items-center">
              <Link href="https://www.instagram.com/marketshop_ecommerce/">
                <FaInstagram className="w-[20px] h-[20px] text-white" />
              </Link>
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#151875] hover:to-blue-500 flex justify-center items-center">
              <Link href="https://x.com/ecommerce?lang=en">
                <FaTwitter className="w-[20px] h-[20px] text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
