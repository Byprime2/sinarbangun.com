// app/layout.js

import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./component/ClientLayout"; // 👈 kita import komponen client
import "remixicon/fonts/remixicon.css";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PT. Sinar Bangun Tata Semesta",
  description: "Situs resmi SBTS",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontPoppins.className} antialiased`} id="home">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
