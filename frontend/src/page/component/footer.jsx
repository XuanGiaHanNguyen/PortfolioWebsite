import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import FooterPg from '../../assets/Contactme.png';

function Footer() {
  return (
    <div className="w-screen m-0 p-0">
      <div 
        className="w-screen m-0 p-0 border-2 border-customBlue" 
        style={{
          backgroundImage: `url(${FooterPg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          backgroundPosition: 'center',
        }}
      >
        <section id="MessageMe" className="max-w-3xl ml-16 my-10 text-gray-500">
          <h2 className="text-4xl font-black mb-1 mt-1">
            Still Curious?
          </h2>
          <p className="text-lg text-gray-700 mb-5 font-bold">
            Leave me a message, and I will reach out as soon as possible!
          </p>

          <form
            action="https://httpbin.org/get"
            method="get"
            className="space-y-4 pr-40"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="FullName" className="text-gray-700 font-semibold">
                Full Name:
              </label>
              <input
                type="text"
                name="FullName"
                id="FullName"
                className="rounded w-full p-2 focus:ring-2 focus:ring-blue-500 w-[70%]"
                placeholder="Your Full Name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="Email" className="text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                className=" rounded w-full p-2 focus:ring-2 focus:ring-blue-500 w-[70%]"
                placeholder="Your Email"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="Message" className="text-gray-700 font-semibold">
                Your Message:
              </label>
              <textarea
                name="Message"
                id="Message"
                rows="5"
                placeholder="Write your message here..."
                className=" rounded w-full p-2 focus:ring-2 resize-none focus:ring-blue-500 w-"
              />
            </div>

            <div className="flex justify-start space-x-5">
              <button
                type="submit"
                className="bg-gray-500 text-white font-semibold py-2 px-6 rounded hover:bg-gray-600"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-gray-500 text-white font-semibold py-2 px-7 rounded hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className='w-screen flex justify-center py-2 text-gray-200 font-bold' style={{ backgroundColor: '#728099' }}>
        &copy;Whalecome! - My name is Han | 2025
      </div>
    </div>
  );
}

export default Footer;