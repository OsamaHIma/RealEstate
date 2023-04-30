"use client";
import { MapPinIcon } from "lucide-react";
import CountUp from "react-countup";
import ImageCol from "./ImageCol";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper transition-all ease-in relative pb-8 text-slate-900 dark:text-white ">
      <div className="paddings innerWidth flexCenter gap-11 !justify-around !items-end">
        <div className="hero-left flexColStart gap-12">
          <div className="hero-title relative z-[1]">
            <div className="circle w-16 h-16 rounded-full bg-orange-gradient absolute -z-[1] right-[30%] -top-[5%]" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="font-semibold text-[3.8rem] leading-[4rem]"
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="hero-desc flexColStart">
            <span className="text-light-gray">
              Find a variety of properties that suit you very easily
            </span>
            <span className="text-light-gray">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="search-bar flexCenter bg-white w-full rounded-md border-[3px] border-solid border-[rgba(120,120,120,0.374)] py-2 px-4 justify-between">
            <MapPinIcon className="text-dark-blue" />
            <input
              type="search"
              className="border-none outline-none bg-white dark:text-slate-900 px-2"
            />
            <button className="btn bg-dark-blue">Search</button>
          </div>
          <div className="status flexCenter gap-8 w-ful justify-between">
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={8800}
                  end={9000}
                  duration={4}
                  className="text-slate-700 font-semibold text-4xl dark:text-gray-100"
                />
                <span className="text-[orange] text-3xl font-bold ml-2">+</span>
              </span>
              <span className="text-light-gray">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={1961}
                  end={2000}
                  duration={4}
                  className="text-slate-700 font-semibold text-4xl dark:text-gray-100"
                />
                <span className="text-[#ffaa49] text-3xl font-bold ml-2">
                  +
                </span>
              </span>
              <span className="text-light-gray">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={0}
                  end={28}
                  duration={4}
                  className="text-slate-700 font-semibold text-4xl dark:text-gray-100"
                />
                <span className="text-[#eb9544] text-3xl font-bold ml-2">
                  +
                </span>
              </span>
              <span className="text-light-gray">Award winnings</span>
            </div>
          </div>
        </div>
        <motion.div
          className="hero-right flexCenter"
          initial={{ x: "3rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <ImageCol src="/hero-image.png" sectionName="Hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
