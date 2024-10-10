import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <nav className="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/Plants"}>Plants</Link>
          <Link to={"#"}>Planters</Link>
          <Link to={"#"}>Essentials</Link>
          <Link to={"#"}>Services</Link>
        </nav>
      </div>
      <div className="search">
        <input type="text" placeholder="Поиск" className="searchicon" />
      </div>
    </div>
  );
};

export default Header;
