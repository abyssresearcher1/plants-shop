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

  interface PlantImage {
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  }

  interface Plant {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name: string[];
    cycle: string;
    watering: string;
    sunlight: string[];
    default_image: PlantImage;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPlants = async () => {
    try {
      const { data } = await axios.get<Plant[]>(
        `${process.env.REACT_APP_MAIN_API}`
      );

      console.log("Plants data:", data);
      setPlants(data);
    } catch (error) {
      console.error("Error fetching plants data:", error);
      setError("Error fetching plants data");
    } finally {
      setLoading(false);
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

          {loading && <p>Loading plants...</p>}
          {error && <p>{error}</p>}

          {!loading && !error && plants.length > 0 && (
            <div className="plants-list">
              {plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img
                    src={plant.default_image?.thumbnail || ""}
                    alt={plant.common_name}
                    className="plant-image"
                  />
                  <h3>{plant.common_name}</h3>
                  <p>
                    <strong>Scientific Name:</strong>{" "}
                    {plant.scientific_name.join(", ")}
                  </p>
                  <p>
                    <strong>Other Names:</strong> {plant.other_name.join(", ")}
                  </p>
                  <p>
                    <strong>Cycle:</strong> {plant.cycle}
                  </p>
                  <p>
                    <strong>Watering:</strong> {plant.watering}
                  </p>
                  <p>
                    <strong>Sunlight:</strong> {plant.sunlight.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && plants.length === 0 && (
            <p>No plants available</p>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default MainPage;
