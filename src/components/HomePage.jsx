import React from "react";
import { Link } from "react-scroll";

// import HeroImage from "../public/assets/HeroImage.png";
import HeroImage from "../public/assets/heroImage.png"
 
const HomePage = () => {
  return (
    <div
      name="home"
      className="h-screen w-full pb-4 text-white bg-gradient-to-b from-black  via-black to-gray-800"
    >
      <div className=" pt-[300px] md:pt-0 text-center md:text-left  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full   mt-[-200px] md:mt-0">
          <h2 className="text-4xl sm:text-7xl   font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-600  py-4 max-w-md">
            I have 2 years of experience building and desgining web applications.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS,mongoDB, NodeJs and ExpressJS.
          </p>

          <div className="">
            <Link to="portfolio" smooth duration={500} className=" mx-auto md:mx-0 group text-white w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="  -rotate-90 duration-100 ease-in group-hover:rotate-0">
                {/* <MdExpandMore className="" size={30} /> */}
              </span>
            </Link>
          </div>
        </div>

        <div className="  mt-2 md:mt-[100px]  h-[80%] w-full md:w-[60%]  ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl  mx-auto w-2/3 md:w-full bg-blue-500"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
