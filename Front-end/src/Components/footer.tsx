import { Input } from "@/Components/ui/input";

export const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full h-[532px] bg-[#eeeffb] flex  gap-36 justify-center ">
        <div className="flex flex-col  mt-32 gap-6">
          <h1 className="text-4xl font-bold">eCommerce</h1>
          <div className="flex">
            <Input
              placeholder="Имэйл хаяг"
              className="w-[270px] h-[44px] text-[#afb3d2]"
            />
            <button className="w-[140px] h-[44px] bg-[#fb2e86] hover:bg-pink-700 text-white">
              Бүртгүүлэх
            </button>
          </div>
          <div className="text-[#afbed2]">Хаяг:</div>
          <div className="text-[#afbed2]">
            <p className="font-bold text-sm">
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-4 mt-32 text-[#afb3d2] ">
          <h1 className="text-2xl font-bold text-black">Ангилал</h1>
          <p className="hover:bg-slate-600 rounded-xl">Хувцас</p>
          <p className="hover:bg-slate-600 rounded-xl">Камер, хэрэгсэл</p>
          <p className="hover:bg-slate-600 rounded-xl">Ухаалаг утас, таблет</p>
          <p className="hover:bg-slate-600 rounded-xl">Чихэвч</p>
          <p className="hover:bg-slate-600 rounded-xl">Гэр ахуйн бараа</p>
        </div>
        <div className="flex flex-col gap-4 mt-32 text-[#afb3d2]">
          <h1 className="text-2xl font-bold text-black">Бусад</h1>
          <p className="hover:bg-slate-600 rounded-xl">Бидний тухай</p>
          <p className="hover:bg-slate-600 rounded-xl">Холбоо барих</p>
          <p className="hover:bg-slate-600 rounded-xl">
            Түгээмэл асуулт хариулт
          </p>
        </div>
      </div>
    </div>
  );
};
