import Companies from "@/components/Companies";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurValue from "@/components/OurValue";
import Residencies from "@/components/Residencies";

const Home = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="glow relative bg-slate-200 dark:bg-primary-black transition-all ease-in">
        <div className="gradient absolute w-80 h-80 bg-black/20 dark:bg-white/10 blur-[100px] left-[100px]" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <OurValue/>
      <ContactUs/>
    </div>
  );
};
export default Home;
