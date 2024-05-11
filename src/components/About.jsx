import React from "react";
import Navbar from "./Navbar";
import banner3 from "../../public/banner3.png";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  ">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold font-mono underline">
              WELCOME TO OUR
              <br />
              <br />
              <span className="text-teal-300 font-serif underline">
                BOOKSTORE
              </span>
            </h1>

            <p className="text-xxl 	text-justify text-dark-900 ">
              Every month,we send our subscribers a box with the five best books
              of the month.These are best sellers and classic books that deserve
              to be read and placed on your bookshelf.
              <br /> <br />
              We select books according to the preferences of our customers.In
              addition,you can always attend our events join the book club or
              just visit our offline store in New York.
            </p>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter Your Email login"
              />
            </label> */}
          </div>
          <button className="btn mt-6 btn-outline font-bold btn-success text-white">
            Learn More
          </button>
        </div>
        <div className=" order-1 w-full md:w-1/2 mt-32">
          <img src={banner3} alt="" className="w-92 h-81" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
