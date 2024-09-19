/* eslint-disable no-sequences */
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
import { log } from "console";

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
    image: string;
  }

  interface Plant {
    id: number;
    name: string;
  }

  const bestSellers: Array<Bests> = [
    {
      image: Indoor,
    },
    {
      image: AirPlants,
    },
    {
      image: Flowering,
    },
  ];

  const [plants, setPlants] = useState<Plant[] | null>(null); // Устанавливаем начальное состояние как null

  const getPlants = async () => {
    try {
      const { data } = await axios.get<Plant[]>(
        "https://perenual.com/api/species-list?key=sk-wPyd66ec52fcd7db46911"
      );
      setPlants(data);
    } catch (error) {
      console.log(error);
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
                  <img src={item.image} alt="cards_image" />
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
