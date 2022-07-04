import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useGlobalContext } from "./../data/context";

import GhostProductItem from "./GhostProductItem";

export default function GhostProductsList() {
  const { allProducts } = useGlobalContext();

  return (
    <section className='productList-container'>
      {allProducts.map((item) => {
        return <GhostProductItem key={item.id} {...item} product={item} />;
      })}
    </section>
  );
}
