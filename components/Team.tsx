import React from "react";
import umut from "../public/img/umut.jpg";
import jovi from "../public/img/jovi.jpeg";
import kerim from "../public/img/pic.jpeg";
import Image from "next/image";

const Team = () => {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap -mx-4 text-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                className="w-full h-56 object-cover"
                src={umut}
                alt="Team member name"
                width={1000}
                height={1000}
              />
              <div className="py-4 px-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Umut</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sit amet diam et nulla fermentum varius quis vel
                  turpis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                className="w-full h-56 object-cover"
                src={jovi}
                alt="Team member name"
                width={1000}
                height={1000}
              />
              <div className="py-4 px-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Jovi</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sit amet diam et nulla fermentum varius quis vel
                  turpis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                className="w-full h-56 object-cover"
                src={kerim}
                alt="Team member name"
                width={1000}
                height={1000}
              />
              <div className="py-4 px-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kerim</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sit amet diam et nulla fermentum varius quis vel
                  turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
