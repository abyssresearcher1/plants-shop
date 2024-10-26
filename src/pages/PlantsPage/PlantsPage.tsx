import React, { ChangeEvent, useEffect, useState } from "react";
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

  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(10);
  const [plants, setPlants] = useState<Plants[]>([]);

  const openMenu = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const openPriceMenu = () => {
    setIsPriceOpen((prev) => !prev);
  };

  const getPlants = async () => {
    try {
      const { data } = await axios.get<Plants[]>(
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

  const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <Layout>
      <div className="plantspage">
        <div className="shop-banner">
          <img src={shopBanner} alt="shop-banner" className="shopPage-banner" />
        </div>
        <div className="plants-page_general">
          <div className="sidebar">
            <div className="plants-categories">
              <button
                className="opencategoriesBtn plantsBtn"
                onClick={openMenu}
              >
                All categories
              </button>
              <div
                className="show-plants plantsBtn"
                style={{ display: isCategoriesOpen ? "none" : "flex" }}
              >
                <button>Indoor plants</button>
                <button>Outdoor plants</button>
                <button>Medicinal plants</button>
              </div>
            </div>
            <section className="price">
              <button className="priceBtn plantsBtn" onClick={openPriceMenu}>
                Price
              </button>
              <div
                className="show-price"
                style={{ display: isPriceOpen ? "none" : "block" }}
              >
                <input
                  type="range"
                  style={{ width: "200px" }}
                  min={10}
                  max={10000}
                  value={price}
                  onChange={changePrice}
                />
                <p>Selected Price: ${price}</p>{" "}
              </div>
            </section>
            <section className="include">
              <button className="openIncludeBtn plantsBtn">Include</button>
              <div className="include-wrapper">
                <p>
                  <input type="checkbox" />
                  Planter
                </p>
                <p>
                  <input type="checkbox" />
                  Combo
                </p>
                <p>
                  <input type="checkbox" />
                  Flowers
                </p>
                <p>
                  <input type="checkbox" />
                  Service
                </p>
              </div>
            </section>
          </div>
          <section className="plants-section">
            {plants.slice(0, 9).map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img src={plant.image} alt="plant-image" />
                <p>{plant.name}</p>
                <span>${plant.price}</span>
                <button className="plant-cardBtn">Buy</button>
              </div>
            ))}
            <a href="#">Load more</a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PlantsPage;
