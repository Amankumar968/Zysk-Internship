import React from "react";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import Logomark from "../assets/Logo.png";
import Avatar6 from '../assets/Avatar 6.png';

const Feature = () => {
  return (
    <div className="flex justify-center items-center flex-col p-6 gap-4">

      <p className="text-[#E63F3A] py-0 font-bold">Feature</p>

      <div className="flex justify-center text-center flex-col">
        <h1 className="text-5xl font-bold py-5">
          Analytics that feels like it’s from the future
        </h1>
        <p className="py-5">
          Powerful, self-serve product and growth analytics to help you convert, engage
          <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto">

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon1} alt="Icon 1" />
          <h3 className="font-semibold py-3">Share team inboxes</h3>
          <p className="text-gray-600">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon2} alt="Icon 2" />
          <h3 className="font-semibold py-3">Deliver instant answers</h3>
          <p className="text-gray-600"> An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon3} alt="Icon 3" />
          <h3 className="font-semibold py-3">Manage your team with reports</h3>
          <p className="text-gray-600">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.</p>
        </div>

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon5} alt="Icon 5" />
          <h3 className="font-semibold py-3">Connect with customers</h3>
          <p className="text-gray-600">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
        </div>

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon4} alt="Icon 4" />
          <h3 className="font-semibold py-3">Connect the tools you already use</h3>
          <p className="text-gray-600">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
        </div>

        <div className="text-center max-w-xs">
          <img className="mx-auto" src={Icon6} alt="Icon 6" />
          <h3 className="font-semibold py-3">Our people make the difference</h3>
          <p className="text-gray-600">We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>

      </div>

  
<div className="py-10 w-full flex flex-col items-center bg-blue-50 opacity-1">
 
  <div className="flex items-center gap-3 mb-6">
    <img className="w-12 h-12" src={Logomark} alt="Sisyphus Logo" />
    <p className="font-semibold text-xl text-gray-800">Sisyphus</p>
  </div>

 
  <div className="max-w-4xl text-center px-6">
    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-snug text-gray-900">
      We've been using Untitled to kick start every new project and can't imagine working without it.
    </h1>
  </div>

  
  <div className="flex flex-col items-center gap-4 mt-6">
    <img className="w-16 h-16 rounded-full" src={Avatar6} alt="Candice Wu" />
    <div className="text-center">
      <p className="font-semibold text-lg text-gray-800">Candice Wu</p>
      <p className="text-sm text-gray-600">Product Manager, Sisyphus</p>
    </div>
  </div>
</div>



    </div>
  );
};

export default Feature;
