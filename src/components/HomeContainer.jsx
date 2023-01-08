import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import library from "../img/library.png";
import pickup from "../img/pickup.png";


const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Quick Delivery 
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
          <p className="text-base text-pink-600 font-semibold">
            Library-wise Collections
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={library}
              className="w-full h-full object-contain"
              alt="libr"
            />
          </div>
          <p className="text-base text-red-400 font-semibold">
            Set pickup times
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={pickup}
              className="w-full h-full object-contain"
              alt="pickup"
            />
          </div>

        </div>
        

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Borrow books at 
          <p className="text-orange-600 text-[3rem] lg:text-[5rem]">
          your own comfort!
          </p>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Ever wished to borrow books from a library but your busy life always takes you away from visiting one? <b>BookIt</b> is here to bring back your love of reading books by making borrowing books easier than ever. Choose the library within your area, select your choice of books and get them delivered right at your doorstep! Read to your heart's content and schedule a pickup time after 15 days!
        </p>

       
      </div>
      
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-3 left-0 flex items-center justify-center lg:px-32  py-2 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-15 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-base text-red-600">Rs.</span> {n.price}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-base text-red-600"> </span> {n.mem}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
