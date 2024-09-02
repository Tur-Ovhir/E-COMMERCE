import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
export const Caraousel = () => {
  return (
    <div className="flex justify-center w-screen h-[300px]">
      <div className="w-[1920px] h-[764px]  border border-black flex justify-center bg-[#f2f0ff]">
        <Carousel className="">
          <CarouselContent className="">
            <CarouselItem className=" flex items-center">
              <div className="flex items-center flex-col gap-6">
                <div>
                  <h1 className="">Тав тухтай орчинг таны амьдралд</h1>
                </div>
                <div>
                  <h1 className="text-3xl "> 2024 оны хамгийн шинэ загвар</h1>
                </div>
                <div>
                  <h1 className="text-sm text-[#8a8fb9]">
                    Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр
                    оруулж ирж байна
                  </h1>
                </div>
                <div>
                  <button className="w-[163px] h-[50px] bg-pink-600">
                    Дэлгэрэнгүй
                  </button>
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
