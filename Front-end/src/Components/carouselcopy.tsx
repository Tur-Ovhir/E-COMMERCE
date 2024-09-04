("use client");
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { useEffect, useState } from "react";
import { CiDroplet } from "react-icons/ci";
import { setInterval } from "timers";
export const Caraousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { img: "/path/to/image1.jpg", title: "Slide 1" },
    { img: "/path/to/image2.jpg", title: "Slide 2" },
    { img: "/path/to/image3.jpg", title: "Slide 3" },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goNextSlide();
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);
  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     goNextSlide();
  // //   }, 3000); // Change slide every 3 seconds

  // //   return () => clearInterval(interval); // Clear interval on component unmount
  // // }, [currentSlide]);
  // // console.log(currentSlide);
  // console.log(currentSlide);

  return (
    <div className="flex justify-center w-screen h-[764px]">
      <div className="w-[1920px] h-[764px]  border border-black flex  bg-[#ead6d5] justify-between overflow-hidden ">
        <Carousel className="w-[1920px] h-[764px] flex items-center justify-center ">
          <CarouselContent>
            <CarouselItem className="flex  items-center justify-center">
              <div className="flex gap-72 items-center">
                <div className=" flex flex-col w-[500px] h-[280px] justify-between ">
                  <p className="font-bold">Тав тухтай орчинг таны амьдралд </p>
                  <h1 className="text-5xl font-bold">
                    2024 оны хамгийн шинэ загвар
                  </h1>
                  <p className="font-bold">
                    Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
                    оруулж ирж байна
                  </p>
                  <button className="w-[163px] h-[50px] bg-pink-600 hover:bg-pink-900 text-white">
                    Дэлгэрэнгүй
                  </button>
                </div>
                <div>
                  <div className="w-[629px] h-[629px] rounded-full bg-[#ebd4ea]">
                    <img
                      className="w-[629px] h-[629px]"
                      src="sandal.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>hahaha</CarouselItem>
            <CarouselItem>hehhehee</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div
          className="w-[300%] flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex-shrink-0 h-full border flex justify-center items-center "
              >
                <div>
                  {item.title}
                  {/* {" "}
                  <div className="flex gap-72 items-center">
                    <div className=" flex flex-col w-[500px] h-[280px] justify-between ">
                      <p className="font-bold">
                        Тав тухтай орчинг таны амьдралд{" "}
                      </p>
                      <h1 className="text-5xl font-bold">
                        2024 оны хамгийн шинэ загвар
                      </h1>
                      <p className="font-bold">
                        Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
                        оруулж ирж байна
                      </p>
                      <button className="w-[163px] h-[50px] bg-pink-600 hover:bg-pink-900 text-white">
                        Дэлгэрэнгүй
                      </button>
                    </div>
                    <div>
                      <div className="w-[629px] h-[629px] rounded-full bg-[#ebd4ea]">
                        <img
                          className="w-[629px] h-[629px]"
                          src="sandal.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
