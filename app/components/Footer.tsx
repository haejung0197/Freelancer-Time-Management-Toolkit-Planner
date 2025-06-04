import Link from "next/link";
import React from "react";
import { BsBehance, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiGumroad } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 p-4 xxs:px-6 xs:px-10">
      <div className=" flex flex-col md:flex-row justify-between max-w-5xl mx-auto gap-10 items-center">
        <div className="space-y-6 xxs:space-y-2">
          <h1 className="text-3xl font-bold sm:text-left text-center">
            Haejung{" "}
            <span className="font-normal text-sm">(Content Creator)</span>
          </h1>
          <div className="text-[12px] tracking-wide flex xxs:flex-row flex-col items-center  gap-2 w-full xxs:w-auto xxs:text-left text-center">
            <p className="bg-indigo-400 text-black px-2 rounded-full font-semibold w-full xxs:w-auto ">
              Digital Book Creator
            </p>
            <p className="bg-indigo-400 text-black px-4 rounded-full font-semibold w-full xxs:w-auto">
              Designer
            </p>
            <p className="bg-indigo-400 text-black px-4 rounded-full font-semibold w-full xxs:w-auto">
              Developer
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-10">
          <Link href={"/"}>
            <BsTwitterX size={20} className="cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <SiGumroad size={20} className="cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <BsInstagram size={20} className="cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <BsBehance size={20} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
