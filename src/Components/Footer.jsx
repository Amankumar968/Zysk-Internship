import React from 'react';
import Firstlogo1 from "../assets/Firstlogo.png";
import Badge from "../assets/Badge.png";

const Footer = () => {
  return (
    <div className="text-black py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        
        <div>
          <p className=" text-lg mb-4">Product</p>
          <ul className='gap-2'>
            <li>Overview</li>
            <li>Features</li>
            <li className=" flex items-center">Solution 
              <img  src={Badge} alt="Badge" className="ml-2  w-4 w-14 h-5" />
            </li>
            <li>Tutorial</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

       
        <div>
          <p className=" text-lg mb-4">Company</p>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media Kit</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <p className="text-lg mb-4">Resources</p>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Tutorial</li>
            <li>Support</li>
          </ul>
        </div>

       
        <div>
          <p className=" text-lg mb-4">Use Case</p>
          <ul>
            <li>Startup</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS Centre</li>
            <li>Marketplace</li>
            <li>Ecommerce</li>
          </ul>
        </div>


        <div>
          <p className=" text-lg mb-4">Social</p>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Github</li>
            <li>AngelList</li>
            <li>Dribble</li>
          </ul>
        </div>

        <div>
          <p className=" text-lg mb-4">Legal</p>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    
      <div className="text-center mt-8 flex flex-col sm:flex-row justify-between items-center">
        <img src={Firstlogo1} alt="Logo" className="mb-4 sm:mb-0 sm:mr-4" />
        <p className="sm:text-right">© 2077 Zysk Technologies. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
