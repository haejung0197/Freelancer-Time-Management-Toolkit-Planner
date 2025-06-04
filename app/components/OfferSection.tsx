import SubscriptionForm from "./SubscriptionForm";
import CountdownTimer from "./CountdownTimer";

export default function OfferSection() {
  return (
    <section className="py-12 bg-gray-50 text-center px-4 space-y-[28px]">
      <h2 className="text-[32px] font-bold text-black ">
        Struggling to Balance Client Work?
      </h2>
      <p className="text-[16px] max-w-xl mx-auto text-gray-600 leading-[26px]">
        Our free planner helps you manage tasks in minutes. Want more? Grab the{" "}
        <strong className="text-black">
          Freelancer’s Time Management Toolkit
        </strong>{" "}
        for just $10!
      </p>
      <SubscriptionForm />
      <p className="text-[16px]">
        {`This planner saved me 3 hours a day! – Ayesha, Freelance Writer`}
      </p>
      <CountdownTimer deadline="2025-06-10 23:59:59" />
      <button className="w-full bg-black text-white  p-4  rounded-lg transition hover:scale-105 duration-300 cursor-pointer max-w-md mx-auto ">
        <a href="[your-gumroad-product-url]" className="text-[13px] shadow-md ">
          Get the Toolkit for $10
        </a>
      </button>
    </section>
  );
}
