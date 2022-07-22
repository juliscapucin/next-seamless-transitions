import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";

import ProductsList from "../components/ProductsList";

import scroll from "./../data/scroll";

export default function Home() {
  // useEffect(() => {
  //   const getPosition = () => {
  //     const currentScroll = window.pageYOffset;

  //     if (currentScroll !== 0) {
  //       scroll = currentScroll;
  //     }
  //   };

  //   window.addEventListener("scroll", getPosition);

  //   return () => {
  //     window.removeEventListener("scroll", getPosition);
  //   };
  // });

  // useEffect(() => {
  //   window.scrollTo(0, scroll);
  // }, []);

  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
}
