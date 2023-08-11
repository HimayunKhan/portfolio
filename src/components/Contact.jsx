// import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  text-black bg-gradient-to-b from-black  via-black to-gray-800">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pt-10">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4  text-black bg-gradient-to-b from-black  via-black to-gray-800">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <img
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">

              <a href="https://www.linkedin.com/in/himayun-khan-1854a0116/"
              target="_blank">

              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25}  className="text-blue-300"/>
              </div>
              </a>



              <a href="https://twitter.com/himayuk33114077"
              target="_blank">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaTwitter size={25} className="text-sky-600" />
              </div>
              </a>

              <a href="https://www.facebook.com/login/"
              target="_blank">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaFacebook size={25}  className="text-blue-700"/>
              </div>
              </a>

              <a href="https://github.com/HimayunKhan"
              target="_blank">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} className="text-white"/>
              </div>
              </a>
            </div>
          </div>

          {/* form stuff  */}
          {/* <div className="w-full md:w-1/2 h-full rounded-xl p-4  text-black bg-gradient-to-b from-black  via-black to-gray-800 ">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/8ae45410-c200-4975-99a6-5d4041b8bc4f"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-md  py-2 text-slate-100 font-bold ">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-md  py-2 text-slate-100 font-bold  ">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-md  py-2 text-slate-100 font-bold ">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-md  py-2 text-slate-100 font-bold ">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div> */}

<div className="w-full md:w-1/2 h-full rounded-xl p-4 text-black bg-gradient-to-b from-black via-black to-gray-800">
  <div className="p-4 text-left">
    <form action="https://getform.io/f/8ae45410-c200-4975-99a6-5d4041b8bc4f" method="POST">
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col w-full md:w-auto">
          <label className="capitalize text-md py-2 text-slate-100 font-bold">name</label>
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white w-full md:w-auto"
          />
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <label className="capitalize text-md py-2 text-slate-100 font-bold">phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Write your  phone number"

            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white w-full md:w-auto"
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label className="capitalize text-md py-2 text-slate-100 font-bold">email</label>
          <input
            type="email"
            name="email"
            placeholder="Write your email"

            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white w-full"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="capitalize text-md py-2 text-slate-100 font-bold">message</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Write your message"

            className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 bg-black text-white w-full"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
          send message
        </button>
      </div>
    </form>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
