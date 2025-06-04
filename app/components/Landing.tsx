"use client"
import { FormEvent, useState } from 'react';
import Head from 'next/head';

export default function Landing () {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, api_key: 'YOUR_API_KEY' }),
      });
      if (response.ok) {
        alert('Subscribed successfully! Check your email for the planner.');
        setEmail('');
      } else {
        alert('Error subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error subscribing. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      <Head>
        <title>Freelancer’s Time Management Toolkit</title>
        <meta name="description" content="End freelance chaos with our free Daily Time-Blocking Planner and full Toolkit!" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
        <script src="https://cdn.deadlinefunnel.com/scripts/df.js"></script>
      </Head>

      <main className="flex-grow">
        <section className="bg-teal-600 text-white py-12">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">End Freelance Chaos: Plan Your Day in 5 Minutes!</h1>
            <p className="text-lg md:text-xl mb-6">Get our <strong>Free Daily Time-Blocking Planner</strong> to organize your freelance life!</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-4">Struggling to Balance Client Work?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our free planner helps you manage tasks in minutes. Want more? Grab the <strong>Freelancer’s Time Management Toolkit</strong> for just $10!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="p-3 w-full max-w-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Grab Your Free Planner
              </button>
            </form>

            <p className="text-lg italic mb-6">"This planner saved me 3 hours a day! – Ayesha, Freelance Writer"</p>

            <div id="df-timer" data-deadline="2025-06-10T23:59:59Z" className="text-red-600 font-bold text-lg mb-6">
              Limited Offer: 20% Off Ends in <span id="df-countdown"></span>!
            </div>
            <a
              href="[your-gumroad-product-url]"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-orange-600"
            >
              Get the Toolkit for $10
            </a>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-4">What’s in the Toolkit?</h2>
            <ul className="list-disc list-inside text-lg max-w-2xl mx-auto">
              <li>Guide: 5 Steps to Master Freelance Time Management</li>
              <li>Daily and Weekly Time-Blocking Templates</li>
              <li>Bonus: Productivity Checklist for Freelancers</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Sadaf Shahab. <a href="[your-privacy-policy-url]" className="underline">Privacy Policy</a></p>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const deadline = new Date(document.getElementById('df-timer').dataset.deadline).getTime();
            const countdownElement = document.getElementById('df-countdown');
            function updateTimer() {
              const now = new Date().getTime();
              const distance = deadline - now;
              if (distance < 0) {
                countdownElement.innerHTML = "Offer Expired!";
                return;
              }
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
              countdownElement.innerHTML = \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
            }
            setInterval(updateTimer, 1000);
          `,
        }}
      />
    </div>
  );
}
