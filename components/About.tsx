import Image from "next/image";
import React from "react";
import blockDice from "../public/img/dice_game.png";
import { GiRollingDices } from "react-icons/gi";
import { TbArrowUpRight } from "react-icons/tb";

const About = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <Image
            className="rounded-lg shadow-lg w-full object-cover"
            src={blockDice}
            alt="About Us"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center">
            About BlockDice
            <GiRollingDices size={56} className="fill-funcia" />
          </h2>
          <p className="text-lg leading-relaxed">
            BlockDice is an on-chain turn-based game. It is a decentralized
            version of popular diced-table Monopoly game. The game is played
            between two and ten players, each of which has a wallet.
          </p>
          <button className="mt-6 flex items-center hover:text-funcia">
            <p className="text-2xl">Learn More</p>
            <TbArrowUpRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
