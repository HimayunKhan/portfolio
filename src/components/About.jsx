// import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <div name="About" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left    text-white bg-gradient-to-b from-black  via-black to-gray-800">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pt-10">
        About ME
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8 ">
          <p className="py-4 max-w-2xl mx-auto">
          Hello! I'm a passionate and experienced full-stack web developer with a focus on the MERN stack. With over 2 years of hands-on experience in the field, I've honed my skills in crafting dynamic and user-friendly web applications. My expertise extends across a wide spectrum of technologies, including HTML5, CSS3, React, Node.js, MongoDB, Express.js, Next.js, JavaScript, TypeScript, and popular UI libraries like Tailwind CSS, Chakra UI, and Material UI.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          My journey as a developer has been marked by a commitment to delivering high-quality solutions. I take pride in my ability to seamlessly integrate front-end and back-end components, resulting in smooth and efficient user experiences. Throughout my career, I've successfully completed numerous projects that showcase my proficiency in both front-end and back-end development.
          </p>
          <p className="py-4 max-w-2xl mx-auto pb-10">
          I thrive on challenges and am constantly seeking opportunities to innovate and elevate my skills. As technology continues to evolve, I eagerly embrace new tools and techniques to stay at the forefront of web development trends. With a strong foundation in the MERN stack and a track record of creating impactful projects, I am excited to contribute my expertise to crafting cutting-edge web solutions.
          </p>
        </div>

        {/* <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default About;
