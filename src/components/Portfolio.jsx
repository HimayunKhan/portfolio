import React from "react";

import { MdExpandMore } from "react-icons/md";

import questt from "../public/assets/portfolio/questt.png";
import amigo from "../public/assets/portfolio/amigo.png";

import movix from "../public/assets/portfolio/movix.png";
// import netmeds from "../public/assets/portfolio/netmeds.png";
import chokhaImage from "../public/assets/portfolio/chokhaImage.png";

import { Link } from "react-scroll";
// import Link from "next/link";
// import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Questt EdTech",
      imageSrc: questt,
      url: "https://www.questt.com/",
    },
    {
      id: 2,
      title: "Amigo Tweets",
      imageSrc: amigo,
      url: "https://questt-tweet.vercel.app/login",
    },
    {
      id: 3,
      title: "Movix",
      imageSrc: movix,
      url: "https://movix-eta.vercel.app/",
    },
    {
      id: 4,
      title: "Chokha-Ecom",
      imageSrc: chokhaImage,
      url: "https://chokha-ecom.vercel.app/",
    },
  ];

  return (
    <div name="portfolio" className="w-full ">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  text-white bg-gradient-to-b from-black  via-black to-gray-800">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pt-10">
          portfolio
        </h2>
        <p className="py-4 md:pl-8 max-w-lg">
        Browse through a curated selection of projects that reflect my versatility as a full stack web developer. Each project showcases a unique set of skills, from front-end design to back-end functionality.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios?.map(({ id, title, imageSrc, url }) => (
            // <Link key={id} href={`/portfolio/${url}`}>
            <a key={id} href={url}>

           
            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
              <img
                src={imageSrc}
                alt={title}

                className="rounded-md duration-200 
                  hover:scale-110 w-[700px] h-[300px]"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                {title}
              </h2>
            </div>
            </a>
            // </Link>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Portfolio;
