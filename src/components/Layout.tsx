import Header from "@/components/main/Header";
import Footer from "./main/Footer";
import React, { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-poppins ">
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1250,
          style: {
            background: "#ffff",
            color: "#4171ED",
          },
        }}
      />
    </div>
  );
}

export default Layout;
