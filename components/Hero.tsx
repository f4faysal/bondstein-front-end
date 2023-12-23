import Image from "next/image";
import PrimaryButton from "./ui/primaryButton";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row py-20 justify-between   ">
      <div className="w-1/2 flex flex-col ">
        <h2 className="text-[45px] md:text-5xl font-bold leading-[50px] md:leading-[60px] uppercase">
          Discover, and collect Digital Art NFTs
        </h2>
        <p className="text-[0.9rem] my-3">
          Digital marketplace for crypto collectibles and <br />
          non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive
          digital assets.
        </p>

        <PrimaryButton title="Explore Now"></PrimaryButton>

        <div className="flex  gap-10 mt-10">
          {[
            {
              text: "Artwork",
              count: "98k+",
            },
            {
              text: "Auction",
              count: "12k+",
            },
            {
              text: "Artist",
              count: "15k+",
            },
          ].map((item, i) => (
            <div key={i} className=" ">
              <h3 className=" font-bold text-3xl md:text-[40px] leading-[25px]">
                {item.count}
              </h3>
              <p className="text-base mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full relative  md:block hidden md:mt-0 mt-[6rem] md:w-[430px]">
        <div>
          <Image
            src="/hero3.png"
            alt="image"
            width={1000}
            height={1000}
            className=" absolute right-[0%] top-[17%] md:top-[13%] w-[200px] md:w-[300px]"
          />
          <Image
            src="/hero2.png"
            alt="image"
            width={1000}
            height={1000}
            className=" absolute right-[5%] md:top-[7%] w-[250px] md:w-[350px]"
          />
          <Image
            src="/hero1.png"
            alt="image"
            width={1000}
            height={1000}
            className=" absolute right-[10%] top-0 w-[300px] md:w-[400px]"
          />

          <Image
            src="/Rectangle.png"
            alt="image"
            width={1000}
            height={1000}
            className=" absolute left-[10%] md:left-[3%] w-[75%] bottom-[200%]  md:bottom-[-25%]"
          />

          <div className=" absolute md:left-[3%] bottom-[-20%] md:bottom-[-22%] flex items-center justify-evenly w-[350px] px-4 text-white">
            <div>
              <p className="text-[0.9rem]">Current Bid</p>
              <div className="flex items-center gap-2">
                <Image
                  src="/Vector-white.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className=" w-[12px]"
                />
                <p className="text-[1.1rem]">0.25 ETH</p>
              </div>
            </div>

            <div>
              <p className="text-[0.9rem]">Ends in</p>
              <p className="text-[1.1rem]">12h 43m 42s</p>
            </div>
          </div>

          <div className=" absolute top-[5%] left-[10%] md:left-[3%] text-white">
            <h3 className="text-[500] text-[25px]">Abstr Gradient NFT</h3>
            <div className="flex items-center gap-3">
              <Image
                src="/avatar1.png"
                alt="avatar"
                width={1000}
                height={1000}
                className="w-[30px] "
              />
              <p className="text-[0.9rem]">Arkhan17</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
