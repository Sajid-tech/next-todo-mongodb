import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
import Login from "@/components/Login";
import { getAuthSession } from "@/utils/auth";
import React from "react";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager  App",
  description: "Create your daily TODOs and Shared with freinds",
};

export default function RootLayout({ children }) {




  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>

          <Header />
          <main className="lg:ml-[251px]">{children}</main>

        </body>
      </html>
    </Provider>
  );
}
