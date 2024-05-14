import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Features.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Feature from "./Feature";

const Features = () => {
  const [showArrows, setShowArrows] = useState(true);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 640); // Adjust this value according to your desired breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="text-center max-w-screen-sm mx-auto px-2 lg:px-0 mb-6 lg:mb-10">
        <h2
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-lg font-medium lg:text-3xl lg:font-bold mt-6 lg:mt-20"
        >
          Features
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-sm lg:text-lg font-normal mt-6 mb-6"
        >
          StudyLab provides interactive learning modules that engage students
          through multimedia content, quizzes, and interactive exercises,
          enhancing their understanding of various subjects.
        </p>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={showArrows}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="mySwiper lg:max-w-full  md:max-w-screen-md sm:max-w-screen-sm  
                rounded-xl"
        >
          {datas &&
            datas.map((data) => (
              <SwiperSlide>
                <Feature data={data} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
