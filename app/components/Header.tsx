import React from "react";
import { display } from "../layout";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="relative">
          <div className=" absolute w-full max-w-4xl  z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 space-y-6 left-[50%] -translate-y-[50%] top-[50%] -translate-x-[50%] ">
            <h1
              className={`${display.className} text-5xl md:text-[60px] font-extrabold leading-[63px] tracking-tight text-blackdrop-shadow-lg transform transition-transform duration-500 hover:scale-105`}
            >
              End Freelance Chaos: Plan Your Day in 5 Minutes!
            </h1>
            <p className="text-[16px]">
              Get our <strong>Free Daily Time-Blocking Planner</strong> to
              organize your freelance life!
            </p>
          </div>
          <div className="">
            <Image
              src={"/web-images/header bg.jpg"}
              alt="business"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
