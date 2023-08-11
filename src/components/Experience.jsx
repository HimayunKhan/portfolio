import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import typescript from "../public/assets/experience/typescript.png";
import node from "../public/assets/experience/node.png";
import mongoImage from "../public/assets/experience/mongoImage.png";
import ExpressJS from "../public/assets/experience/expressJS.png";
import chakrauilogo from "../public/assets/experience/chakrauilogo.png";
import materialLogo from "../public/assets/experience/materialLogo.png";
// import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style:"shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style:"shadow-blue-500",

    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
      style:"shadow-yellow-400",

    },
    {
      id: 4,
      title: "React",
      src: reactImage,
      style:"shadow-blue-600",

    },
    {
      id: 5,
      title: "Mongo DB",
      src: mongoImage,
      style:"shadow-green-900",

    },
   
    {
      id: 6,
      title: "Next JS",
      src: nextjs,
      style:"shadow-white",

    },
    
    {
      id: 7,
      title: "Tailwind",
      src: tailwind,
      style:"shadow-sky-400",

    },
    {
      id: 8,
      title: "Node JS",
      src: node,
      style:"shadow-green-400",

    },

    {
      id: 9,
      title: "TypeScript",
      src: typescript,
      style:"shadow-blue-400",

    },

    
    {
      id: 10,
      title: "Express JS",
      src: ExpressJS,
      style:"shadow-yellow-400",

    },
    {
      id: 11,
      title: "Chakra UI",
      src: chakrauilogo,
      style:"shadow-green-200",

    },
    {
      id: 12,
      title: "Material UI",
      src: materialLogo,
      style:"shadow-blue-700",

    },
  ];

  return (
    <div name="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  text-white bg-gradient-to-b from-black  via-black to-gray-800">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pt-10">
          experience
        </h2>
        <p className="py-4 md:pl-8 max-w-lg">
        I take pride in my diverse skill set that empowers me to create robust and dynamic web solutions from start to finish. My experience spans across the following key areas:
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences?.map(({ id, title, src ,style}) => (
            <div
              key={id}
              className={"flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300" +" "+style}
            >
              <img src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
