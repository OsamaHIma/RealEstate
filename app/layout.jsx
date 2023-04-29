import "./globals.scss";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Homeyz",
  // description: '',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={`${poppins.className} transition-all ease-in`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
