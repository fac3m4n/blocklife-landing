import React from "react";
import Image from "next/image";
import hero from "../public/img/hero.png";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 h-screen">
      <div className="w-full md:w-1/2 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">
          Community-driven virtual universe.
        </h1>
        <div className="text-lg mb-8">
          <p>Welcome to BlockLife, and its unique gaming ecosystem!</p>
          <p>
            BlockLife is a fully on-chain city game where players can enjoy
            different types of games.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href={"https://github.com/salty-node/contracts"}
            className="flex items-center hover:text-funcia"
            target={"_blank"}
          >
            <p className="text-xl">Learn More</p>
            <TbArrowUpRight size={32} />
          </Link>
          <Link
            href={"/"}
            className="bg-funcia text-white text-xl py-2 px-4 rounded"
          >
            Enter to BlockLife
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={hero}
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
