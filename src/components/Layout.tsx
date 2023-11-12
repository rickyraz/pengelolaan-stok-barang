import Header from "@/components/main/Header";
import Footer from "./main/Footer";
import { type ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
