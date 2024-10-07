import Layout from "../../Layout/Layout";
import banner from "../../assets/mainbanner.png";
import arrow from "../../assets/arrowright.svg";
import bonsai from "../../assets/bonsai.png";
import cactus from "../../assets/cactus.png";
import creepers from "../../assets/creepers.png";
import succulents from "../../assets/succulents.png";
import seeds from "../../assets/seeds.png";
import gifting from "../../assets/gifting.png";
import AirPlants from "../../assets/AirPlants.png";
import Indoor from "../../assets/Indoor.png";
import Flowering from "../../assets/Flowering.png";

import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MainPage.css";

const MainPage = () => {
  interface Category {
    name: string;
    image: string;
  }

  interface Plant {
    id: number;
    name: string;
    category: string;
    origin: string;
    watering_frequency: string;
    light_needs: string;
    price: number;
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

  const bestSellers: Array<{ image: string }> = [
    { image: Indoor },
    { image: AirPlants },
    { image: Flowering },
  ];

  const [plants, setPlants] = useState<Plant[]>([]);

  const getPlants = async () => {
    try {
      const { data } = await axios.get<Plant[]>(
        `${process.env.REACT_APP_MAIN_API}/trendingPlants`
      );

      setPlants(data);
    } catch (error) {
      console.error("Error fetching plants data:", error);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <Layout>
      <div className="mainpage">
        <div className="banner">
          <img src={banner} alt="banner" className="mainpage_banner" />
        </div>
        <div className="all">
          <a href="#">
            See all <img src={arrow} alt="arrow right" />
          </a>
        </div>
        <div className="categories">
          {categories.map((item, index) => (
            <div className="categories_icons" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
        <section className="best">
          <h2>Best Selling</h2>
          <div className="bestsellers">
            {bestSellers.map((item, index) => (
              <div className="bestsellers_cards" key={index}>
                <img src={item.image} alt="cards_image" />
                <button className="bestsellers_cardsBtn">Shop now</button>
              </div>
            ))}
          </div>
        </section>
        <section className="trending">
          <h2>Trending Plants</h2>
          <div className="trending-plants">
            {plants &&
              plants.map((item) => {
                return (
                  <div className="trending-general" key={item.id}>
                    <div className="trending-images_block">
                      <img
                        src={item.image}
                        alt="trending-images"
                        className="trending-images"
                      />
                    </div>
                    <div className="trending-name">
                      <p>{item.name}</p>
                    </div>
                    <div className="trendingBtn-block">
                      <button className="trendingBtn">Buy</button>
                    </div>
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
