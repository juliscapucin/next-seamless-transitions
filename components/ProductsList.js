import React from "react";
import { useGlobalContext } from "./../data/context";

export default function ProductsList() {
  const { allProducts } = useGlobalContext();

  return <div>ProductsList</div>;
}
