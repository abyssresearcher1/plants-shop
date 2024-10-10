import React from "react";
import Layout from "../../Layout/Layout";
import shopBanner from "../../assets/ShopBanner.png";
import "./PlantsPage.css";

const PlantsPage = () => {
  return (
    <Layout>
      <div className="shop-banner">
        <img src={shopBanner} alt="shop-banner" className="shopPage-banner" />
      </div>
    </Layout>
  );
};

export default PlantsPage;
