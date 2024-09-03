import { Input } from "@/Components/ui/input"


export const Footer = () => {
    return (
        <div className="w-[1920px] h-[532px] bg-[#eeeffb] flex  gap-24">
            <div className="flex flex-col ml-28 mt-32 gap-6">
                <h1 className="text-4xl font-bold">eCommerce</h1>
                <div className="flex">
                    <Input placeholder="Имэйл хаяг" className="w-[270px] h-[44px] " />
                    <button className="w-[140px] h-[44px] bg-[#fb2e86]">Бүртгүүлэх</button>
                </div>
                <div>Хаяг:</div>
                <div>
                    <p className="font-bold text-sm">Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                        Гурван гол - 401 тоот</p>
                </div>
            </div>
            <div className=" flex flex-col gap-4 mt-32">
                <h1 className="text-2xl font-bold">Ангилал</h1>
                <p>Хувцас</p>
                <p>Камер, хэрэгсэл</p>
                <p>Ухаалаг утас, таблет</p>
                <p>Чихэвч</p>
                <p>Гэр ахуйн бараа</p>
            </div>
            <div className="flex flex-col gap-4 mt-32">
                <h1 className="text-2xl font-bold">Бусад</h1>
                <p>Бидний тухай</p>
                <p>Холбоо барих</p>
                <p>Түгээмэл асуулт хариулт</p>
            </div>
        </div>

    )
} 