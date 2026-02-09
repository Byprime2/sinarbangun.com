// app/layout.js

import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./component/ClientLayout";
import "remixicon/fonts/remixicon.css";
import Script from "next/script"; // Menggunakan komponen Script bawaan Next.js

const fontPoppins = Poppins({
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
      <head>
        {/* Google Tag Manager - Diletakkan di Head */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PB3KFCCT'); 
          `}
        </Script>
      </head>
      <body className={`${fontPoppins.className} antialiased`} id="home">
        {/* Google Tag Manager - Bagian Noscript (Backup jika JS mati) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB3KFCCT"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}