import React from "react";
import Image from "next/image";
import hero from "../public/img/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-16">
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
        <button className="bg-funcia text-white font-bold py-2 px-4 rounded">
          Enter to BlockLife
        </button>
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
