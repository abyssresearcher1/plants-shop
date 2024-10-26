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
import gardening from "../../assets/gardening.png";
import jenya from "../../assets/Jenya.png";

import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  interface CelebsRoot {
    id: number;
    name: string;
    image: string;
  }

  interface Category {
    name: string;
    image: string;
  }

  interface Planters {
    id: number;
    name: string;
    price: number;
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

  interface HotSalesPlants {
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
  const [hotSales, setHotSales] = useState<HotSalesPlants[]>([]);
  const [planters, setPlanters] = useState<Planters[]>([]);
  const [celebs, setCelebs] = useState<CelebsRoot[]>([]);

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

  const getHotSales = async () => {
    try {
      const { data } = await axios.get<HotSalesPlants[]>(`
          ${process.env.REACT_APP_MAIN_API}/HotSales
        `);
      setHotSales(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlanters = async () => {
    try {
      const { data } = await axios.get<Planters[]>(
        `${process.env.REACT_APP_MAIN_API}/planters`
      );
      setPlanters(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCelebs = async () => {
    try {
      const { data } = await axios.get<CelebsRoot[]>(
        `${process.env.REACT_APP_MAIN_API}/Celebs`
      );
      setCelebs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlants();
    getHotSales();
    getPlanters();
    getCelebs();
  }, []);

  return (
    <Layout>
      <div className="mainpage">
        <div className="banner">
          <img src={banner} alt="banner" className="mainpage_banner" />
        </div>
        <div className="all">
          <Link to={"/plants"}>
            See all <img src={arrow} alt="arrow right" />
          </Link>
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
                      <span>${item.price}</span>
                    </div>
                    <div className="trendingBtn-block">
                      <button className="trendingBtn">Buy</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="Blogs">
          <h2>Blogs</h2>
          <div className="Blogs-general">
            <div className="Blogs-left Blogs-box">
              <div className="Blogs-text">
                <p>
                  8 Best <br /> Low Maintenance Plants <br /> For a Busy Home
                </p>
              </div>
              <div>
                <button className="BlogsBtn">Read</button>
              </div>
            </div>
            <div className="Blogs-right Blogs-box">
              <div className="Blogs-text">
                <p>
                  Air Purifying <br /> Plants You Should Take Home <br /> Today
                </p>
              </div>
              <div>
                <button className="BlogsBtn">Read</button>
              </div>
            </div>
          </div>
        </section>
        <section className="HotSales">
          <h2>Hot Sale</h2>
          <div className="HotSales-general">
            {hotSales &&
              hotSales.map((plants) => {
                return (
                  <div className="Cards" key={plants.id}>
                    <div className="Card">
                      <img src={plants.image} alt="" />
                      <p>{plants.name}</p>
                      <span>${plants.price}</span>
                      <button className="hotBtn">Buy</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="planters">
          <h2>Planters</h2>
          <div className="planters-general">
            {planters &&
              planters.map((planter) => {
                return (
                  <div className="planters-cards" key={planter.id}>
                    <div className="planters-card">
                      <img
                        src={planter.image}
                        alt="planter-image"
                        className="planters-image"
                      />
                      <div>
                        <p>{planter.name}</p>
                        <span>${planter.price}</span>
                      </div>
                      <button className="plantersBtn">Buy</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <section className="Gardening">
          <div className="gardening-general">
            <div className="gardening-text gardening-block">
              <h2>Landscape Gardening</h2>
              <p>
                Whether it is growing your own food or setting up your roof-top
                garden, we provide the highest quality landscaping services,
                contributing to a greener world and substantial living! Schedule
                your service appointment today!
                <br />
                *Service only available in Telangana and AndhraPradesh.
              </p>
              <button className="gardeningBtn">Book Now!</button>
            </div>
            <div className="gardening-image gardening-block">
              <img src={gardening} alt="" />
            </div>
          </div>
        </section>
        <section className="Celebs">
          <h2>Celebs you love, love us</h2>
          <div className="Celebs-general">
            {celebs &&
              celebs.splice(4) &&
              celebs.map((celeb) => {
                return (
                  <div className="Celebs-cards">
                    <div className="Cel-Card">
                      <img src={jenya} alt="" />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="low-celebs-general">
            {celebs &&
              celebs.splice(3) &&
              celebs.map((celeb) => {
                return (
                  <div className="low_celebs">
                    <div className="low-celebs-card">
                      <img src={jenya} alt="" />
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
