import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";

export default function Home() {
  return (
    <Layout>
      <section>
        <ProductsList />
      </section>
    </Layout>
  );
}
