import Image from "next/image";

const Collection = () => {
  return (
    <div className="bg-[#D9E0EC33] w-full ">
      <div className="py-16 my-12 md:my-[8rem] ">
        <h3 className="font-[800] text-[23px] md:text-[28px] mb-12">
          Collection Featured NFTs
        </h3>
        <div className="flex items-center justify-around ">
          <div className="">
            <div className="flex gap-5">
              <Image
                src="/collection2.png"
                alt="image"
                width={1000}
                height={1000}
                className="  width={1000}
          height={1000} w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <Image
                  src="/collection2.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
                <Image
                  src="/collection3.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
                <Image
                  src="/collection4.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/avatar1.png"
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-[#3d00b7] text-[#3d00b7]   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-5">
              <Image
                src="/collection2.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <Image
                  src="/collection2.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/collection3.png"
                  alt="image"
                  className="w-[100px]"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/collection4.png"
                  alt="image"
                  className="w-[100px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/avatar1.png"
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-[#3d00b7] text-[#3d00b7]   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-5">
              <Image
                src="/collection3.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <Image
                  src="/collection2.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
                <Image
                  src="/collection3.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
                <Image
                  src="/collection4.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[100px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/avatar1.png"
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-[#3d00b7] text-[#3d00b7]   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
