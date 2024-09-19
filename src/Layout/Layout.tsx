import React from "react";
import Header from "../components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header children={undefined} />
      {children}
    </div>
  );
};

export default Layout;
