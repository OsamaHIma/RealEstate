import { MessagesSquare } from "lucide-react";
import {
  BarChart2Icon,
  ShieldCheck,
  XCircleIcon,
  MessageSquare,
  PhoneCallIcon,
  VideoIcon,
} from "lucide-react";

export const navLinks = [
  {
    id: "residencies",
    name: "Residencies",
  },
  {
    id: "our-value",
    name: "Our Value",
  },
  {
    id: "contact-us",
    name: "Contact Us",
  },
  {
    id: "get-started",
    name: "Get started",
  },
];

export const sliderData = [
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: "/r1.png",
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: "/r2.png",
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: "/r3.png",
  },
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: "/r1.png",
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: "/r2.png",
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: "/r3.png",
  },
];

export const sliderSittings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

export const accordionData = [
  {
    icon: <ShieldCheck />,
    heading: "Best interest rates on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <XCircleIcon />,
    heading: "Prevent unstable prices",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <BarChart2Icon />,
    heading: "Best price on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];

export const contactCards = [
  {
    title: "Call",
    num: "019094388",
    btnText: "Call Now",
    icon: <PhoneCallIcon />,
  },
  {
    title: "Chat",
    num: "015094388",
    btnText: "Chat Now",
    icon: <MessagesSquare />,
  },
  {
    title: "Video Call",
    num: "010943885",
    btnText: "Video Call Now",
    icon: <VideoIcon />,
  },
  {
    title: "Message",
    num: "012094388",
    btnText: "Message Now",
    icon: <MessageSquare />,
  },
];
