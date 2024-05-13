import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Slider.css";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  // const [showArrows, setShowArrows] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowArrows(window.innerWidth >= 640); // Adjust this value according to your desired breakpoint
  //   };

  //   handleResize(); // Initial check

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex justify-center items-center"
    >
      <div className="relative ">
        <img className="" src="https://i.ibb.co/vdQXsSK/banner1.jpg" alt="" />
        <div className="absolute  h-full flex left-0 top-0 items-center justify-center bg-gradient-to-r from-black to-[rgba(21,21,21,0)] max-[450px]:hidden">
          <div className="space-y-7 w-1/2 text-white text-center ">
            <h2 className="font-bold lg:text-5xl md:text-2xl ">
              Your Child is Our Asset
            </h2>
            <p>
              We have 20 years Experience on this profession.it is pleasure but
              because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremley painfull{" "}
            </p>
            <div className="">
              <button className="btn btn-primary mr-5">CONTACT US TODAY</button>
              <button className="btn btn-outline btn-secondary">
                ENROL NOW
              </button>
            </div>
          </div>
        </div>
      </div>
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
