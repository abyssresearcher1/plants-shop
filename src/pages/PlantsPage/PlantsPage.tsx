import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import shopBanner from "../../assets/ShopBanner.png";
import "./PlantsPage.css";

const PlantsPage = () => {
  // const [isOpen, setIsOpen] = useState(null);

  // const openMenu = () => {
  //   return setIsOpen(true);
  // };

  return (
    <Layout>
      <div className="plantspage">
        <div className="shop-banner">
          <img src={shopBanner} alt="shop-banner" className="shopPage-banner" />
        </div>
        <div className="plants-page_general">
          <div className="sidebar">
            <div className="plants-categories">
              {/* <button className="opencategoriesBtn" onClick={openMenu}> */}
                Categories
              {/* </button> */}
              {/* {isOpen && ()} */}
            </div>
          </div>
          <div className="show-plants"></div>
        </div>
      </div>
    </Layout>
  );
};

export default PlantsPage;
