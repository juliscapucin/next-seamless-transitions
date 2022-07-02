import React from "react";
import { useGlobalContext } from "./../data/context";

import ProductItem from "./ProductItem";

export default function ProductsList() {
  const { allProducts } = useGlobalContext();

  return (
    <section className='productList-container'>
      {allProducts.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </section>
  );
}
