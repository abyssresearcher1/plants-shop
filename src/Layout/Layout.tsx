import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header children={undefined} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
