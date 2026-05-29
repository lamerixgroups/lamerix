"use client";

import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import BrandSection from "./components/BrandSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* PAGE 1 */}
          <Hero />

          {/* PAGE 2 */}
          <AboutSection />

          {/* PAGE 3 */}
          <BrandSection />
        </>
      )}
    </>
  );
}