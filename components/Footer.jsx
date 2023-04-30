import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter !justify-between f-container">
        <div className="flexColStart f-left gap-4">
          <Image src="/logo2.png" alt="logo" width={120} height={120} />
          <h3 className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </h3>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText dark:text-indigo-500">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu gap-6 font-medium mt-6">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
