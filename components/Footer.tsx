import React from "react";
import Image from "next/image";
import salty from "../public/img/saltyNode.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="flex items-center justify-center max-w-5xl mx-auto px-6 lg:px-8 text-center text-md space-x-2">
        <div>&copy; 2023 Bucharest Hackathon. Salty Node</div>
        <Image src={salty} alt="salty" height={32} />
      </div>
    </footer>
  );
};

export default Footer;
