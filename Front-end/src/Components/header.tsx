export const Header = () => {
  return (
    <div className="justify-center flex">
      <div className="w-[1920px] h-[500px] bg-white flex justify-center flex-col">
        <div className="justify-center">
          <h1 className="font-bold text-3xl text-[#1a0b5b] justify-center flex">
            Онцлох бүтээгдэхүүн
          </h1>
        </div>
        <div className="flex justify-center mt-10 gap-20 ">
          <div className="w-[270px] h-[361px] border border-black shadow-lg shadow-indigo-500/40 ... ">
            <div className=" w-[225px] h-[225px] flex  justify-center">
              <img className=" ml-10" src="pidjak.png" alt="" />
            </div>
            <div className="justify-center flex mt-10">
              <h1 className="text-[#fb2e86]"> Дан хүрэм пиджак</h1>
            </div>
            <div className="flex justify-center mt-5">
              <h1>750'000₮</h1>
            </div>
          </div>
          <div className="w-[270px] h-[361px] border border-black shadow-lg shadow-indigo-500/40 ...">
            <div className=" w-[225px] h-[225px] flex  justify-center">
              <img className=" ml-10" src="6.png" alt="" />
            </div>
            <div className="bg-blue-700 mt-10">
              <div className="justify-center flex mt-10">
                <h1 className="text-white"> Ширээний чийдэн</h1>
              </div>
              <div className="flex justify-center mt-5">
                <h1 className="text-white">750'000₮</h1>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[361px] border border-black shadow-lg shadow-indigo-500/40 ...">
            <div className=" w-[225px] h-[225px] flex  justify-center">
              <img className=" ml-10" src="3.png" alt="" />
            </div>

            <div className="justify-center flex mt-10">
              <h1 className="text-[#fb2e86]"> Гадуур хүрэм</h1>
            </div>
            <div className="flex justify-center mt-5">
              <h1>750'000₮</h1>
            </div>
          </div>
          <div className="w-[270px] h-[361px] border border-black shadow-lg shadow-indigo-500/40 ...">
            <div className=" w-[225px] h-[225px] flex  justify-center">
              <img className=" ml-10" src="5.png" alt="" />
            </div>
            <div className="justify-center flex mt-10">
              <h1 className="text-[#fb2e86]"> Дуу намсгагчтай чихэвч</h1>
            </div>
            <div className="flex justify-center mt-5">
              <h1>750'000₮</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
