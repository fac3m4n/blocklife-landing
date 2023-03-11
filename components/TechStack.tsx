import React from "react";
import Image from "next/image";
// Front
import nextjs from "../public/img/nextjs.png";
import ts from "../public/img/ts.png";
import webgl from "../public/img/webgl.png";
import tailwind from "../public/img/tailwind.png";

// Back
import unity from "../public/img/unit.png";
import csharp from "../public/img/csharp.png";
import nether from "../public/img/nethereum.webp";

// Blockchain
import polygon from "../public/img/polygon.png";
import hardhat from "../public/img/hardhat.png";
import metamask from "../public/img/metamask.png";
import thirdweb from "../public/img/thirdweb.svg";

import ether from "../public/img/ether.png";
import openzep from "../public/img/openzep.png";

const TechStack = () => {
  return (
    <section className="py-10" id="tech">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Tech Stack
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend</h3>
              <div className="flex items-center justify-center space-x-4">
                <Image src={ts} alt="tech" height={56} />
                <Image src={nextjs} alt="tech" height={56} />
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Image src={webgl} alt="tech" height={50} />
                <Image src={tailwind} alt="tech" height={56} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend</h3>
              <div className="flex items-center justify-center space-x-4">
                <Image src={nether} alt="tech" height={56} />
                <Image src={csharp} alt="tech" height={56} />
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Image src={unity} alt="tech" height={56} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Blockcain
              </h3>
              <div className="flex items-center justify-center space-x-8">
                <Image src={polygon} alt="tech" height={56} />
                <Image src={hardhat} alt="tech" height={40} />
              </div>
              <div className="flex items-center justify-center space-x-8 mt-4">
                <Image src={metamask} alt="tech" height={56} />
                <Image src={thirdweb} alt="tech" height={40} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Token Standards
              </h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-1 text-sm">
                  <Image src={ether} alt="tech" height={54} />
                  <p>ERC-721</p>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Image src={ether} alt="tech" height={54} />
                  <p>ERC-1155</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-8 mt-4">
                <div className="flex items-center space-x-1 text-sm">
                  <Image src={ether} alt="tech" height={54} />
                  <p>ERC-4337</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
