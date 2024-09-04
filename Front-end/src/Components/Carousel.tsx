"use client";
import { useEffect, useState } from "react";

export const Caraousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { img: "/sandal.png", title: "Slide 1" },
    { img: "/path/to/image2.jpg", title: "Slide 2" },
    { img: "/path/to/image3.jpg", title: "Slide 3" },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]);

  return (
    <div className="flex justify-center w-screen h-[764px] overflow-hidden bg-[#ead6d5]">
      <div className="relative w-[100vw] h-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slides.map((slide, index) => (
            // <div className="flex gap-72 items-center w-full">
            //   <div className=" flex flex-col w-[500px] h-[280px] justify-between ">
            //     <p className="font-bold">Тав тухтай орчинг таны амьдралд </p>
            //     <h1 className="text-5xl font-bold">
            //       2024 оны хамгийн шинэ загвар
            //     </h1>
            //     <p className="font-bold">
            //       Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
            //       оруулж ирж байна
            //     </p>
            //     <button className="w-[163px] h-[50px] bg-pink-600 hover:bg-pink-900 text-white">
            //       Дэлгэрэнгүй
            //     </button>
            //   </div>
            //   <div>
            //     <div className="w-[629px] h-[629px] rounded-full bg-[#ebd4ea]">
            //       <img className="w-[629px] h-[629px]" src={slide.img} alt="" />
            //     </div>
            //   </div>
            // </div>
            <div>
              <img src={slide.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
