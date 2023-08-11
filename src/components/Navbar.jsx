import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4 ">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Himayun</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          // <Link key={id} href={`/#${link}`}>
          <li key={id} className="ml-10 text-sm uppercase cursor-pointer duration-200 text-gray-500 ease-out hover:scale-105 tracking-wider px-4">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
          // </Link>
        ))}
      </ul>

      <div
        onClick={() => setNavigation(!navigation)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navigation ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navigation && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            // <Link key={id} href={`/#${link}`}>
            <li key={id} className="px-4 cursor-pointer capitalize py-6  text-4xl">
              <Link onClick={()=>setNavigation(!navigation)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
            // </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
