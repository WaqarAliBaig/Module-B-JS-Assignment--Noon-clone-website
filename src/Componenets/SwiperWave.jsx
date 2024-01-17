import React, { useRef, useState } from "react";
import slide_21 from "../assets/slide-21.jpg";
import slide_22 from "../assets/slide-22.png";
import slide_23 from "../assets/slide-23.png";
import slide_24 from "../assets/slide-24.png";
import slide_25 from "../assets/slide-25.png";
import slide_26 from "../assets/slide-26.gif";
import slide_27 from "../assets/slide-27.png";
import slide_28 from "../assets/slide-28.png";
import square_banner from "../assets/square-banner.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
// import required modules
import { Pagination } from "swiper/modules";

function SwiperWave() {
  return (
    <>
      <div className="swiper-banner">
        <div className="swiper-wave">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slide_21} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_22} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_23} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_24} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_25} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_26} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_27} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_28} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="square-banner">
          <img src={square_banner} width={500} />
        </div>
      </div>
    </>
  );
}
export default SwiperWave;
