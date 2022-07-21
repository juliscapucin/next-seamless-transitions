import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import TransitionHome from "../components/TransitionHome";
import ProductsList from "../components/ProductsList";

export default function Home() {
  const [productPage, setProductPage] = useState(null);
  const [showProductPage, setShowProductPage] = useState(false);
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
