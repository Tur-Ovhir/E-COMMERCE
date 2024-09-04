import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full h-[44px] bg-[#7e33e0] flex flex-row gap-2 justify-center items-center">
        <div className="w-[1200px] h-[24px] justify-between">
          <div className="flex  justify-between ">
            <div className="flex gap-4">
              <div className="flex gap-1">
                <CiMail className="w-[15px] h-[13px] text-white mt-1" />
                <Link href="https://e-commerce.mn/">
                  <h1 className="text-white">info@ecommerce.mn</h1>
                </Link>
              </div>
              <div className="flex text-white gap-2">
                <FaPhoneVolume />
                <h1>77123456</h1>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 text-white">
                <h1>Нэвтрэх</h1>
                <FaRegUser />
              </div>
              <div className="flex gap-1 text-white items-center">
                <h1>Хадгалах</h1>
                <CiHeart />
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
