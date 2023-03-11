import Image from "next/image";
import React from "react";
import blockDice from "../public/img/dice_game.png";

const About = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2">
          <Image
            className="rounded-lg shadow-lg"
            src={blockDice}
            alt="About Us"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About BlockDice
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet diam et nulla fermentum varius quis vel turpis. Cras a lectus
            vel velit dictum pretium quis in tortor. Nam convallis magna ut
            luctus ullamcorper. Nunc congue, elit a tristique pulvinar, ante dui
            fringilla quam, ac suscipit elit odio eu eros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
