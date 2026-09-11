import React from "react";
import img from '../assets/images/kashmir.jpg'
import img1 from '../assets/images/masoorie.jpg'
import img2 from '../assets/images/goa.jpg'
import img3 from '../assets/images/beach.jpg'

const Service = () => {
  return (
    <>
      <div className="md:px-12 px-4 py-16">
        <h2 className="about-label block text-xs font-medium uppercase pb-8 tracking-[0.2em] text-gray-400">
          Our Services
        </h2>

        <div className=" flex flex-col gap-4">
          {/* top */}
          <div className="flex gap-4">
            <div className=" h-75 rounded-lg w-4/7">
              <img
                src={img}
                className="h-full w-full object-cover object-top rounded-xl "
                alt=""
              />
            </div>
            <div className=" h-75 rounded-lg w-3/7">
              <img
                src={img1}
                className="h-full w-full object-cover object-center rounded-xl "
                alt=""
              />
            </div>
          </div>
          {/* bottom */}
          <div className="flex gap-4">
            <div className=" h-75 rounded-lg w-3/7">
              <img
                src={img2}
                className="h-full w-full object-cover object-bottom rounded-xl "
                alt=""
              />
            </div>
            <div className=" h-75 rounded-lg w-4/7">
              <img
                src={img3}
                className="h-full w-full object-cover object-top rounded-xl "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
