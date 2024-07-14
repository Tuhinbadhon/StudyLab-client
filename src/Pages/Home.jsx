import React, { useState, useEffect } from "react";
import MeetAgents from "./MeetAgents";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Slider from "./Slider/Slider";
import FAQ from "./FAQ";
import Features from "./Features";
import { DNA, Radio } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://studylab-ass11.vercel.app/items");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <DNA
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="radio-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>STUDYLAB | Home</title>
        </Helmet>
      </HelmetProvider>

      <div className="mt-5  mb-10 ">
        <Slider />
      </div>
      <div className="lg:mx-10 mx-4">
        <Features />
      </div>

      <div className="mt-5 mb-10 lg:mt-10 ">
        <MeetAgents />
      </div>
      <div className="mt-5 mb-10 lg:mt-10  lg:mx-20">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
