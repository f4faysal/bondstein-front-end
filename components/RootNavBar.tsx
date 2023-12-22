"use client";

import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { MainNav } from "./main-nav";

import { Button } from "./ui/button";
import Container from "./ui/container";
import { Input } from "./ui/input";

const RootNavBar = () => {
  const { role }: any = getUserInfo();
  const dispatch = useDispatch();
  const [toggleLogin, setToggleLogin] = useState<string>("sing-in");

  return (
    <nav className="border-b   sticky top-0">
      <Container>
        <div className="flex h-16 items-center  ">
          <Link href="/">
            {/* <Image src=" " width={100} height={100} alt="logo" /> */}
            <h1 className="text-3xl text-[#3d00b7] font-bold">NFTERS</h1>
          </Link>

          <div className=" pl-6 w-72 hidden md:flex">
            <Input className="h-8 rounded-full " placeholder="Find a quiz " />
          </div>
          <div className=" hidden md:block">
            <MainNav className="mx-6" />
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Button>hello</Button>
            hello
          </div>
          <div className="flex md:hidden px-2">
            <GiHamburgerMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default RootNavBar;
