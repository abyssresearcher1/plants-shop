import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import shopBanner from "../../assets/ShopBanner.png";
import "./PlantsPage.css";
import axios from "axios";

const PlantsPage = () => {
  interface Plants {
    id: number;
    image: string;
    name: string;
    price: number;
  }

  const [isOpen, setIsOpen] = useState<Boolean>(true);

  const openMenu = () => {
    return setIsOpen(!isOpen);
  };

  const [plants, setPlants] = useState<Plants[]>([]);

  const getPlants = async () => {
    try {
      let { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_API}/Plants`
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
      <div className="plantspage">
        <div className="shop-banner">
          <img src={shopBanner} alt="shop-banner" className="shopPage-banner" />
        </div>
        <div className="plants-page_general">
          <div className="sidebar">
            <div className="plants-categories">
              <button className="opencategoriesBtn" onClick={openMenu}>
                Categories
              </button>
              <div
                className="show-plants"
                style={{ display: isOpen ? "none" : "block" }}
              >
                <p>asdasdasdad</p>
                <p>asdasdasdad</p>
                <p>asdasdasdad</p>
              </div>
            </div>
            <div className="price"></div>
          </div>
          <section className="plants-section">
            {plants &&
              plants.splice(9) &&
              plants.map((plant) => {
                return (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt="plant-image" />
                    <p>{plant.name}</p>
                    <p>{plant.price}</p>
                    <button className="plant-cardBtn">Buy</button>
                  </div>
                );
              })}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PlantsPage;
