// "use client";
// import { useEffect, useState } from "react";

// export const Caraousel = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   const slides = [
//     { img: "/sandal.png", title: "Slide 1" },
//     { img: "/path/to/image2.jpg", title: "Slide 2" },
//     { img: "/path/to/image3.jpg", title: "Slide 3" },
//   ];

//   const totalSlides = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [totalSlides]);

//   return (
//     <div className="flex justify-center w-screen h-[764px] overflow-hidden bg-[#ead6d5]">
//       <div className="relative w-[300%] h-full">
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//         >
//           {slides.map((slide, index) => (
//             // <div className="flex gap-72 items-center w-full">
//             //   <div className=" flex flex-col w-[500px] h-[280px] justify-between ">
//             //     <p className="font-bold">Тав тухтай орчинг таны амьдралд </p>
//             //     <h1 className="text-5xl font-bold">
//             //       2024 оны хамгийн шинэ загвар
//             //     </h1>
//             //     <p className="font-bold">
//             //       Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
//             //       оруулж ирж байна
//             //     </p>
//             //     <button className="w-[163px] h-[50px] bg-pink-600 hover:bg-pink-900 text-white">
//             //       Дэлгэрэнгүй
//             //     </button>
//             //   </div>
//             //   <div>
//             //     <div className="w-[629px] h-[629px] rounded-full bg-[#ebd4ea]">
//             //       <img className="w-[629px] h-[629px]" src={slide.img} alt="" />
//             //     </div>
//             //   </div>
//             // </div>
//             <div>
//               <div className=" bg-[#f2dbf2] rounded-full" key={index}>
//                 <img className="" src={slide.img} />
//                 {slide.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { title: "Slide 1", img: "/" },
    { title: "Slide 2" },
    { title: "Slide 3" },
  ];

  type SlideProps = {
    title: string;
  };

  const Slide = ({ title }: SlideProps) => {
    return (
      <div className="flex-1 flex justify-center items-center gap-14 ">
        {/* <div className=""> */}
        <div className=" w-[480px] h-[248px] flex gap-5 flex-col">
          <h1 className="text-xl">Тав тухтай орчинг таны амьдралд</h1>
          <h1 className="text-4xl font-bold ">2024 оны хамгийн
            шинэ загвар</h1>
          <h1 className="text-sm">Швед улсын хамгийн шилдэг брэндийг албан ёсны
            эрхтэйгээр оруулж ирж байна</h1>
          <div>
            <button className="w-[163px] h-[50px] bg-[#fb2e86] text-sm hover:bg-pink-800 ">Дэлгэрэнгүй</button>
          </div>
        </div>

        <div className="w-[629px] h-[629px] rounded-full bg-[#f2dbf2] flex justify-center items-center">
          <img className="w-[600px] h-[600px]" src="sandal.png" alt="" />
        </div>
        {/* </div> */}
      </div>
    );
  };

  type IndicatorProps = {
    active: boolean;
    onClick: () => void;
  };

  const Indicator = ({ active, onClick }: IndicatorProps) => {
    return (
      <div
        className={`w-6 h-6 rounded-md bg-slate-400 ${active ? "bg-slate-700" : ""}`}
        onClick={onClick}
      ></div>
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="bg-[#EAD6D5] w-screen h-[800px] overflow-hidden border relative">
      <div
        className="w-[300%] h-full flex [&>div]:text-5xl"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5s",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} title={slide.title} />
        ))}
      </div>
      <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === slideIndex}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

