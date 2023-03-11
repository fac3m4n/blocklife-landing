import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/block_logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 items-center px-6">
      <div className="flex space-x-8 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="logo" height={56} className="fill-funcia" />
          <h1 className="font-bold text-2xl">Block-Life</h1>
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
      <button className="px-4 py-2 bg-funcia rounded-lg text-white">
        Mint Avatar
      </button>
    </div>
  );
};

export default Navbar;
