import React from "react";
// icons
import { CiSearch } from "react-icons/ci";
import PrimaryButton from "./ui/primaryButton";
import OutlineButon from "./ui/outlineButon";

const NavBar = () => {
  return (
    <nav className="hidden md:flex items-center   justify-between w-full h-[70px] shadow-sm py-3 px-8 mx-auto max-w-[1400px]">
      {/* logo */}
      <h2 className=" text-[#3D00B7] uppercase font-bold text-[1.5rem]">
        NFters
      </h2>

      {/* nav items */}
      <ul className="footerUl flex items-center gap-10 font-500">
        <li>Marketplace</li>
        <li>Resource</li>
        <li>About</li>
      </ul>

      <div className="flex items-center gap-3">
        {/* search bar */}
        <div className=" relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="py-2 pl-3 pr-10 border outline-none rounded-full border-[#EFEFEF] focus:border-[#3D00B7]"
          />
          <CiSearch className=" text-[1.5rem] text-[#858585] absolute top-[20%] right-3" />
        </div>

        {/* buttons */}
        {/* <button className="py-2 px-6 border border-[#3D00B7] bg-[#3D00B7] text-white rounded-full ">
          Upload
        </button>
        <button className="py-2 px-6 border border-[#3D00B7] text-[#3D00B7]  rounded-full ">
          Connect Wallet
        </button> */}

        <PrimaryButton title="Upload"></PrimaryButton>
        <OutlineButon title="Connect Wallet"></OutlineButon>
      </div>
    </nav>
  );
};

export default NavBar;
