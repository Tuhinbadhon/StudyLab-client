import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 640); // Adjust this value according to your desired breakpoint
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="">
      <img
        className="z-[1]"
        src="https://i.ibb.co/vdQXsSK/banner1.jpg"
        alt=""
      />
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={showArrows} // Toggle navigation based on showArrows state
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper lg:max-w-full mr-0 md:max-w-screen-md sm:max-w-screen-sm rounded-xl"
      >
        <SwiperSlide>
          <img
            className="z-[1]"
            src="https://i.ibb.co/vdQXsSK/banner1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/wwzKLV7/banner3.jpg" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/sQqf5Gk/banner.jpg" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BftV33d/banner2.jpg" alt="" />{" "}
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Slider;
