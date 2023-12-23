"use client";

// icons
import Image from "next/image";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { data } from "./data";
const DiscoverNft = () => {
  const [active, setActive] = useState(0);

  // filtering based on active state
  const filteredData = data.filter((singleData) => {
    if (active === 0) {
      return singleData;
    } else if (active === 1) {
      return singleData.category === "Art";
    } else if (active === 2) {
      return singleData.category === "Celebrities";
    } else if (active === 3) {
      return singleData.category === "Gaming";
    } else if (active === 4) {
      return singleData.category === "Sport";
    } else if (active === 5) {
      return singleData.category === "Music";
    } else if (active === 6) {
      return singleData.category === "Crypto";
    }
  });
  return (
    <div className="bg-[#D9E0EC33] w-full ">
      <div className="w-full max-w-[1400px] px-6 mx-auto py-16 mt-[8rem]">
        <h3 className="font-[800] text-[23px] md:text-[34px] uppercase">
          Discover more NFTs
        </h3>
        <div className="flex-col md:flex-row gap-8 flex items-center justify-between w-full">
          <div className="flex items-center gap-3 mt-4 md:flex-nowrap flex-wrap">
            <button
              onClick={() => setActive(0)}
              className={` ${
                active === 0 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border text-[#3d00b7]  border-[#3d00b7] rounded-full`}
            >
              All Categories
            </button>

            <button
              onClick={() => setActive(1)}
              className={`${
                active === 1 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Art
            </button>

            <button
              onClick={() => setActive(2)}
              className={`${
                active === 2 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Celebrities
            </button>

            <button
              onClick={() => setActive(3)}
              className={`${
                active === 3 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Gaming
            </button>

            <button
              onClick={() => setActive(4)}
              className={`${
                active === 4 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Sport
            </button>

            <button
              onClick={() => setActive(5)}
              className={`${
                active === 5 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Music
            </button>

            <button
              onClick={() => setActive(6)}
              className={`${
                active === 6 ? "bg-[#3d00b7] text-white " : "bg-none"
              } py-[0.3rem] md:py-[0.5rem] px-4 border border-[#3d00b7] text-[#3d00b7]  rounded-full`}
            >
              Crypto
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#3d00b7]">
            <MdFilterList className="text-[1.5rem]" />
            <p className="text-[16px]">All Filters</p>
          </div>
        </div>

        {/* cards */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {filteredData?.map((singleCard, i) => (
            <div key={i} className=" bg-white rounded-md p-3">
              <div className="w-full h-[70%] relative ">
                <Image
                  width={1000}
                  height={1000}
                  src={singleCard.img}
                  alt="Image"
                  className="w-full h-full object-cover"
                />
                <div className=" absolute left-[2%] top-[35%] md:top-[30%] flex items-center">
                  <div className=" relative w-[220px] h-[220px]">
                    <Image
                      width={1000}
                      height={1000}
                      src="/discover1.png"
                      alt=""
                      className=" absolute left-[0%] bottom-0 w-9"
                    />
                    <Image
                      width={1000}
                      height={1000}
                      src="/discover2.png"
                      alt=""
                      className=" absolute left-[8%] bottom-0 w-9"
                    />
                    <Image
                      width={1000}
                      height={1000}
                      src="/discover3.png"
                      alt=""
                      className=" absolute left-[16%] bottom-0 w-9"
                    />
                    <Image
                      width={1000}
                      height={1000}
                      src="/discover4.png"
                      alt=""
                      className=" absolute left-[24%] bottom-0 w-9"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[19px] font-[800] mt-6 md:mt-4">
                  {singleCard.title}
                </h3>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1">
                    <Image
                      width={1000}
                      height={1000}
                      src="/collectionVector.png"
                      alt="vector"
                      className="w-[10px]"
                    />
                    <p className="text-[#00AC4F] text-[10px]">0.25 ETH</p>
                  </div>
                  <p className="text-[#838383] text-[13px]">1 of 321</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button className="py-[0.5rem] px-5  border-none text-[#3d00b7]  rounded-full bg-[#F5F5F5] text-[10px]">
                    3h 50m 2s left
                  </button>
                  <p className="text-[#3d00b7] text-[15px]">Place a bid</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-12">
          <button className=" py-2 px-6 border border-[#3d00b7] text-[#3d00b7]  rounded-full ">
            Load NFTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNft;
