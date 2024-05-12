import React, { useState, useEffect } from "react";
import MeetAgents from "./MeetAgents";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Slider from "./Slider/Slider";
import FAQ from "./FAQ";
import Features from "./Features";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-side-puce-alpha.vercel.app/items"
        );
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
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-xs"></span>
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
      <div>
        <Features />
      </div>

      <div className="mt-5 mb-10 lg:mt-10 lg:mx-20">
        <MeetAgents />
      </div>
      <div className="mt-5 mb-10 lg:mt-10  lg:mx-20">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
