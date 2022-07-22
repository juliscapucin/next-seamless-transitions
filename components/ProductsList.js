import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useGlobalContext } from "./../data/context";

import ProductItem from "./ProductItem";
import TransitionHome from "./TransitionHome";

export default function ProductsList() {
  const { allProducts, productPage } = useGlobalContext();

  return (
    <>
      <TransitionHome {...productPage} />
      <section className='productList-container'>
        {allProducts.map((item) => {
          return <ProductItem key={item.id} {...item} product={item} />;
        })}
      </section>
    </>
  );
}
