import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import TransitionHome from "../components/TransitionHome";
import ProductsList from "../components/ProductsList";

import scroll from "./../data/scroll";

export default function Home() {
  const [productPage, setProductPage] = useState(null);
  const [showProductPage, setShowProductPage] = useState(false);

  // const scrollRef = useRef({ scroll: 0 });

  useEffect(() => {
    const getPosition = () => {
      const currentScroll = window.pageYOffset;

      // scrollRef.current.scroll = currentScroll;
      scroll = currentScroll;
    };

    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  });

  useEffect(() => {
    window.scrollTo(0, scroll);
  }, []);

  return (
    <Layout>
      <main>
        {showProductPage && <TransitionHome {...productPage} />}
        <ProductsList
          setProductPage={setProductPage}
          setShowProductPage={setShowProductPage}
        />
      </main>
    </Layout>
  );
}
