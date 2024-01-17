import React from "react";
import infocus_banner_1 from "../assets/infocus-1.png";
import infocus_banner_2 from "../assets/infocus-2.png";

const Infocus_Banner = () => {
  return (
    <div className="border p-2 mb-3 rounded"> 
        <h4 className="p-2 m-2 pb-4 border border-top-0 border-start-0 border-end-0">Infocus</h4>
      <div>
        <img src={infocus_banner_1} />
      </div>
      <div>
        <img src={infocus_banner_2} />
      </div>
    </div>
  );
};

export default Infocus_Banner;
