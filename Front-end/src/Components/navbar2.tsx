import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
export const Navbar2 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1920px] h-[59px] bg-white border border-black justify-center flex">
        <div className="flex w-[1200px] h-[40px] gap-96 items-center justify-between">
          <div className="flex gap-8 items-center">
            <h1 className="text-2xl font-bold">Ecommerce</h1>
            <Select>
              <SelectTrigger>
                <SelectValue className="text-pink-800" placeholder="Нүүр" />
              </SelectTrigger>
              <SelectContent className="text-pink-800">
                <SelectItem value="light">Нүүр</SelectItem>
                <SelectItem value="dark">Нэвтрэх</SelectItem>

                <SelectItem value="system">
                  <h1>Электрон бараа</h1>
                </SelectItem>
              </SelectContent>
            </Select>
            <Link href={`/angilal`}>
              <h1 className="text-sm">Ангилал</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <Input />
            <div className="w-[50px] h-[40px] bg-[#fb2e86] justify-center items-center flex ">
              <CiSearch className="w-[26px] h-[24px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
