import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/logo_black.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 items-center px-6">
      <div className="flex space-x-8 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="logo" height={56} className="fill-funcia" />
          <h1 className="font-bold text-2xl">BlockLife</h1>
        </Link>
        <div>
          <ul className="items-center justify-center space-y-4 md:flex md:space-x-4 md:space-y-0  gap-4">
            <li className=" hover:text-funcia">
              <Link href="#about">About</Link>
            </li>
            <li className=" hover:text-funcia">
              <Link href="#tech">Tech Stack</Link>
            </li>
            <li className=" hover:text-funcia">
              <Link href="#team">Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link
        href={"https://blocklife-drop.vercel.app/"}
        className="px-4 py-2 bg-funcia rounded-lg text-white font-bold"
      >
        Mint Avatar
      </Link>
    </div>
  );
};

export default Navbar;
