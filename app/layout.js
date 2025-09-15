import Header from "@/components/organisms/Header";
import { Lato } from "next/font/google";
import "./global.css"; 
import Footer from "@/components/organisms/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "Lato"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body cz-shortcut-listen="true">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
