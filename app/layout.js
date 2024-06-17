import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitanan",
  description: "Best USDT seller in Taiwan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
