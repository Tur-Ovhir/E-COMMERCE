// Add this at the top of the file to indicate that this is a client component
"use client";

import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

export const Header = () => {
  // Move useState inside the component
  const [nowslide, setNowSlide] = useState(0);

  const right = () => {
    setNowSlide((prevSlide) => (prevSlide + 1) % 4);
  };

  const left = () => {
    setNowSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 2));
  };
  // const data2 = [
  //   { title: "Дан хүрэм пиджак", price: "750000" }
  //   { title: "Дан хүрэм пиджак", price: "750000" }
  //   { title: "Дан хүрэм пиджак", price: "750000" }
  //   { title: "Дан хүрэм пиджак", price: "750000" }
  //   { title: "Дан хүрэм пиджак", price: "750000" }
  // ];
  const data = [
    { title: "Дан хүрэм пиджак", price: 750000, img: "./pidjak.png" },
    { title: "Ширээний чийдэн", price: 750000, img: "./6.png" },
    { title: "Гадуур хүрэм", price: 750000, img: "./3.png" },
    { title: "Дуу намсгагчтай чихэвч", price: 750000, img: "./5.png" },
    { title: "laptop цүнх", price: 750000, img: "./laptop.png" },
    { title: "Canon камер", price: 750000, img: "./cam 3.png" },
    { title: "Beats  чихэвч ", price: 750000, img: "./9.png" },
  ];

  return (
    <div className="justify-center flex">
      <div className="w-[1920px] h-[500px] bg-white flex justify-center flex-col overflow-hidden">
        <div className="justify-center">
          <h1 className="font-bold text-3xl text-[#1a0b5b] justify-center flex ">
            Онцлох бүтээгдэхүүн
          </h1>
        </div>

        <div className="w-[1230px] m-auto overflow-hidden ">
          <div
            className="flex mt-10 gap-10 border w-[2130px]"
            style={{ transform: `translateX(-${nowslide * 14}%)` }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[270px] h-[361px] border border-black shadow-lg group shadow-indigo-500/40 relative duration-1000 overflow-hidden"
              >
                <div className="w-[225px] h-[225px] flex justify-center">
                  <img className="ml-10 mt-10" src={item.img} alt="" />
                </div>

                <div className="justify-center flex">
                  <h1 className="text-[#fb2e86]">{item.title}</h1>
                </div>
                <div className="flex justify-center mt-5">
                  <h1>{item.price}</h1>
                </div>
                <div className="absolute top-0 flex flex-col gap-[140px] left-0 translate-y-[-300px] group-hover:translate-y-[0px] duration-1000 ">
                  <div className="flex gap-3 text-blue-400 pt-4 pl-4">
                    <RiShoppingCart2Line className="w-[20px] h-[20px]" />
                    <CiHeart className="w-[20px] h-[20px]" />
                    <LiaSearchPlusSolid className="w-[20px] h-[20px]" />
                  </div>
                  <div className="flex justify-center pl-[80px]">
                    <button className="w-[100px] h-[35px] bg-green-400 hover:bg-green-600">
                      Дэлгэрэнгүй
                    </button>
                  </div>
                </div>

                <div className="w-[270px] h-[130px] bg-blue-700 absolute bottom-0 flex flex-col gap-6 justify-center items-center translate-y-[150px] group-hover:translate-y-0 duration-1000">
                  <h1 className="text-white">Дан хүрэм пиджак</h1>
                  <h1 className="text-white">750'000₮</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex gap-8">
              <div onClick={right}>
                <FaChevronCircleLeft className="w-[25px] h-[25px]" />
              </div>
              <div onClick={left}>
                <FaChevronCircleRight className="w-[25px] h-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
