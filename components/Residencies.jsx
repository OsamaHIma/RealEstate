"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import { sliderData, sliderSittings } from "@/constants";
import { LucideChevronRight, LucideChevronLeft } from "lucide-react";

const Residencies = () => {
  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="swiper-buttons flex gap-3 flex-wrap absolute -top-16 right-0">
        <button
          className="text-dark-blue py-1 px-2 rounded-md bg-slate-200 dark:bg-gray-400 shadow hover:scale-110 transition-all ease-in"
          onClick={() => swiper.slidePrev()}
        >
          <LucideChevronLeft width={19} />
        </button>
        <button
          className="text-dark-blue py-1 px-2 dark:bg-[#eee] rounded-md shadow hover:scale-110 transition-all ease-in"
          onClick={() => swiper.slideNext()}
        >
          <LucideChevronRight width={19} />
        </button>
      </div>
    );
  };
  return (
    <section id="residencies">
      <div className="paddings innerWidth overflow-hidden relative">
        <div className="flex flex-wrap items-center">
          <div className="flexColStart mb-8">
            <h1 className="orangeText">Best Choices</h1>
            <h3 className="primaryText dark:text-light-gray">
              Popular Residencies
            </h3>
          </div>
        </div>
        <Swiper {...sliderSittings}>
          <SwiperButtons />
          {sliderData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-card bg-gray-50 dark:bg-black/10 flexColStart hover:scale-105 cursor-pointer gap-3 p-4 rounded-2xl max-w-max m-auto transition-all ease-in-out">
                <img
                  className="max-w-[15rem] w-full"
                  src={card.image}
                  alt={card.name}
                />
                <span className="text-[#1f3e72] font-semibold text-xl">
                  <p className="dark:text-gray-200">
                    <span className="text-[orange] mr-1">$</span>
                    {card.price}
                  </p>
                </span>
                <h3 className="text-[#1f3e72] dark:text-gray-300 font-semibold text-2xl">
                  {card.name}
                </h3>
                <p className="font-semibold text-sm w-60 dark:text-[#e4e4e4]">
                  {card.detail}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
