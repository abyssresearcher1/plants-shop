import React from "react";
import Layout from "../../Layout/Layout";
import banner from "../../assets/mainbanner.png";
import arrow from "../../assets/arrowright.svg";
import bonsai from "../../assets/bonsai.png";
import cactus from "../../assets/cactus.png";
import creepers from "../../assets/creepers.png";
import succulents from "../../assets/succulents.png";
import seeds from "../../assets/seeds.png";
import gifting from "../../assets/gifting.png";

import "./MainPage.css";

const MainPage = () => {
  interface Category {
    name: string;
    image: string;
  }

  const categories: Array<Category> = [
    { name: "bonsai", image: bonsai },
    { name: "cactus", image: cactus },
    { name: "creepers", image: creepers },
    { name: "succulents", image: succulents },
    { name: "seeds", image: seeds },
    { name: "gifting", image: gifting },
  ];

  interface Bests {
    name: string;
  }

  const bestSellers: Array<Bests> = [
    {
      name: "Indoor Plants",
    },
    {
      name: "Air Purifying Plants",
    },
    {
      name: "Flowering Plants",
    },
  ];

  return (
    <Layout>
      <div className="mainpage">
        <div className="banner">
          <img src={banner} alt="banner" className="mainpage_banner" />
        </div>
        <div className="all">
          <a href="#">
            See all <img src={arrow} alt="" />
          </a>
        </div>
        <div className="categories">
          {categories.map((item) => {
            return (
              <div className="categories_icons">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
        <section className="best">
          <h2>Best Selling</h2>
          <div className="bestsellers">
            {bestSellers.map((item) => {
              return (
                <div className="bestsellers_cards">
                  <h2>{item.name}</h2>
                  <button className="bestsellers_cardsBtn">Shop now</button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MainPage;
