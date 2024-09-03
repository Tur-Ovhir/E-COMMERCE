import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { CiDroplet } from "react-icons/ci";
export const Caraousel = () => {
  return (
    <div className="flex justify-center w-screen h-[764px]">
      <div className="w-[1920px] h-[764px]  border border-black flex  bg-[#ead6d5] justify-between ">
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
      </div>
    </div>
  );
};
