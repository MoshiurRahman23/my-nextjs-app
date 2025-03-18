import { Geist, Geist_Mono } from "next/font/google";
// import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Providers from "@/lib/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
// import Footer from "@/components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body
          //data-theme="light"
          // className={roboto.className}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar session={session} />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </Providers>
  );
}
