"use client";
import { FormEvent, useState } from "react";
import { subscribeUser } from "../lib/subscribe";
import { LuMails } from "react-icons/lu";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await subscribeUser(email);
    if (result.success) {
      alert("Subscribed successfully! Check your email for the planner.");
      setEmail("");
    } else {
      alert(result.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4 mb-8 p-6 form-bg rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Subscribe Now!
      </h2>
      <div className="relative w-full">
        <LuMails className="absolute top-[50%] -translate-y-[50%] left-[35%] -translate-x-[50%] text-[#CCCCCC]" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-[#F4F6FE] text-[12px] flex-1 text-center p-4 w-full border border-indigo-700 rounded-lg focus:outline-none focus:ring-3 focus:ring-indigo-400  transition duration-200 shadow-sm hover:shadow-md"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white p-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105 text-[13px] w-full cursor-pointer "
      >
        Grab Your Free Planner
      </button>
    </form>
  );
}
