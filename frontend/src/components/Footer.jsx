import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        {/* left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni pariatur molestiae atque dicta laboriosam eligendi libero perspiciatis quos, vero quisquam, deserunt officiis vitae nisi veritatis saepe, ipsum neque rem quod.
            </p>
        </div>
        {/* center section */}
        <div>
            <p className='text-xl font-medium mb-5' >Company</p>
            <ul className='flex flex-col gap-2 text-gray-600' >
                <li>Home</li>
                <li>About us</li>
                <li>Conatct us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* right section */}
        <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>1234567890</li>
                <li>21051659@kiit.ac.in</li>
            </ul>
        </div>
      </div>
      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center" >Copyright 2024@ YourDoctor - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
