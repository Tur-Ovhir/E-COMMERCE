import { Navbar } from "@/Components/ navbar";
import { Navbar2 } from "@/Components/navbar2";

const Angilal = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="flex justify-center">
        <div className="w-full h-[100px] bg-[#f6f5ff] flex gap-4 items-center ">
          <div className="w-[1500px] h-[100px] flex justify-center items-center gap-4">
            <h1 className="">Home</h1>
            <h1 className="text-[#fb2e86]">. Электрон бараа</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1920px] h-[44px]  flex justify-center mt-44 ">
          <div className="w-[1000px] h-[50px] border border-black ">
            <h1 className="text-xl font-bold text-[#151875]">Электрон бараа</h1>
            <p className="text-sm text-[#a7abcb]">127 бүтээгдэхүүн</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Angilal;
