import React from "react";
import shopCard_1 from "../assets/shopCard-1.avif";
import shopCard_2 from "../assets/shopCard-2.avif";
import shopCard_3 from "../assets/shopCard-3.avif";
import shopCard_4 from "../assets/shopCard-4.avif";
import Deal_Cards from "./Deal_Cards";
import Infocus_Banner from "./Infocus_Banner";

const Shop_Cards = () => {
  return (
    <div className="full-cards">
      <section className="shop-cards border p-2 mb-3 rounded">
        <h4 className="p-2 m-2 pb-4 border border-top-0 border-start-0 border-end-0">
          More reasons to shop
        </h4>
        <div className="row mb-2">
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_1} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_2} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_3} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_4} width={200} />
            </div>
          </div>
        </div>
      </section>

      <section className="shop-cards border p-2 mb-3 rounded">
        <h4 className="p-2 m-2 pb-4 border border-top-0 border-start-0 border-end-0">
          More reasons to shop
        </h4>
        <div className="row mb-2">
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_1} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_2} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_3} width={200} />
            </div>
          </div>
          <div className="col md-4">
            <div className="text-center">
              <img src={shopCard_4} width={200} />
            </div>
          </div>
        </div>
      </section>
      <Infocus_Banner />
    </div>
  );
};

export default Shop_Cards;
