import { contactCards } from "@/constants";
import ContactCard from "./ContactCard";
import ImageCol from "./ImageCol";

const ContactUs = () => {
  return (
    <section className="paddings innerWidth" id="contact-us">
      <div className="flexCenter paddings innerWidth">
        <div className="left-section flexColStart items-center md:items-start flex-auto lg:flex-1 gap-2">
          <h1 className="orangeText">Contact Us</h1>
          <h3 className="primaryText dark:text-light-gray">
            Easy to Contact Us
          </h3>
          <p className="secondaryText">
            We always ready to help by providing the best services for you
            <br />
            We believe a good place to live can make your life better
          </p>

          <div className="flex flex-col w-full md:w-auto justify-between md:flex-row gap-2">
            <ContactCard {...contactCards[0]} />
            <ContactCard {...contactCards[1]} />
          </div>
          <div className="flex flex-col w-full md:w-auto justify-between md:flex-row gap-2">
            <ContactCard {...contactCards[2]} />
            <ContactCard {...contactCards[3]} />
          </div>
        </div>
        <div className="right-section">
          <ImageCol
            src="/hero-image.png"
            dir="right"
            sectionName="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
