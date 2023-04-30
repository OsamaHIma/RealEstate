"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { LucideChevronDown } from "lucide-react";
import { useState } from "react";
import ImageCol from "./ImageCol";
import { accordionData } from "@/constants";
import { motion } from "framer-motion";

const OurValue = () => {
  const [ClassName, setClassName] = useState(null);
  console.log(ClassName);
  return (
    <section id="our-value">
      <div className="paddings flexCenter gap-4 innerWidth">
        <motion.div
          className="left-section flex-1"
          initial={{ x: "-6rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          <ImageCol src="/value.png" sectionName="Our Value" />
        </motion.div>
        <motion.div
          initial={{ x: "6rem", opacity: 0 }}
          transition={{ duration: 1, type: "tween" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="right-section flexColStart flex-auto lg:flex-1 gap-2"
        >
          <h1 className="orangeText">Our value</h1>
          <h3 className="primaryText dark:text-light-gray">
            Value We Give To You
          </h3>
          <p className="secondaryText">
            We always ready to help by providing the best services for you
            <br />
            We believe a good place to live can make your life better
          </p>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="border-none !mt-8"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                uuid={index}
                className={`bg-slate-50 ${ClassName} dark:!bg-black/10 rounded-md overflow-hidden mb-6`}
              >
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={`flexCenter data-[aria-expanded="true"]:!text-red-600 dark:bg-white/10 p-4 w-full !justify-between cursor-pointer`}
                  >
                    <div
                      className={`flexCenter p-2 bg-slate-50 dark:bg-black/25 rounded-md text-dark-blue`}
                    >
                      {item.icon}
                    </div>
                    <p className="primaryText !text-[1.1rem] dark:text-light-blue">
                      {item.heading}
                    </p>
                    <div className="flexCenter">
                      <LucideChevronDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText dark:text-gray-200">
                    {item.detail}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValue;
