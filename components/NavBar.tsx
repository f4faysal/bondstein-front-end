// icons
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Container from "./ui/container";
import OutlineButon from "./ui/outlineButon";
import PrimaryButton from "./ui/primaryButton";

const NavBar = () => {
  return (
    <nav className="border-b  bg-white/90  sticky top-0 z-50">
      <Container>
        <div className="hidden md:flex items-center justify-between w-full h-[70px]  py-3 px-8    ">
          <div className="flex gap-8">
            {/* logo */}
            <Link href="/">
              <h1 className=" text-[#3d00b7] uppercase font-bold text-[1.5rem]">
                nfters
              </h1>
            </Link>

            {/* nav items */}
            <ul className="footerUl flex items-center gap-10 font-semibold  ">
              <li className="hover:text-[#3d00b7] cursor-pointer">
                Marketplace
              </li>
              <li className="hover:text-[#3d00b7] cursor-pointer">Resource</li>
              <li className="hover:text-[#3d00b7] cursor-pointer">About</li>
            </ul>
          </div>

          <div className="flex items-center gap-5">
            {/* search bar */}
            <div className=" relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="py-2 pl-3 pr-10 border outline-none rounded-full border-[#EFEFEF] focus:border-[#3d00b7]"
              />
              <CiSearch className=" text-[1.5rem] text-[#858585] absolute top-[20%] right-3" />
            </div>

            <PrimaryButton title="Upload"></PrimaryButton>
            <OutlineButon title="Connect&nbsp;Wallet"></OutlineButon>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
