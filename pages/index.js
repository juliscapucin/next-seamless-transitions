import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";

import ProductsList from "../components/ProductsList";

import scroll from "../data/scroll";

export default function Home() {
  const refHome = useRef(null);
  const [scrollRef, setScrollRef] = useState(false);

  useEffect(() => {
    if (refHome) {
      setScrollRef(true);
    }
  }, [refHome]);

  useEffect(() => {
    const getPosition = () => {
      const currentScroll = refHome.current.scrollTop;

      if (currentScroll !== 0) {
        scroll = currentScroll;
      }
    };

    refHome.current.addEventListener("scroll", getPosition);

    // return () => {
    //   refHome.current.removeEventListener("scroll", getPosition);
    // };
  }, [scrollRef]);

  useEffect(() => {
    refHome.current.scrollTo(0, scroll);
  }, []);

  return (
    <Layout>
      <div className='home-container' ref={refHome}>
        <ProductsList />
      </div>
    </Layout>
  );
}
