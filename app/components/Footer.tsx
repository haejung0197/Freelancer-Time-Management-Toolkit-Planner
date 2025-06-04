import Link from "next/link";
import React from "react";
import { BsBehance, BsInstagram, BsTwitterX } from "react-icons/bs";
import { SiGumroad } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className=" flex justify-between max-w-5xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Haejung{" "}
            <span className="font-normal text-sm">(Content Creator)</span>
          </h1>
          <div className="text-[12px] tracking-wide flex items-center  gap-2 ">
            <p className="bg-indigo-400 text-black px-2 rounded-full font-semibold">
              Digital Book Creator
            </p>
            <p className="bg-indigo-400 text-black px-4 rounded-full font-semibold">
              Designer
            </p>
            <p className="bg-indigo-400 text-black px-4 rounded-full font-semibold">
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
