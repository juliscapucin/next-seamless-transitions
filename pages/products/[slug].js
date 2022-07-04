import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import products from "./../../data/products";

import Layout from "../../components/Layout";

export default function Products({ product }) {
  return (
    <Layout>
      <section className='page-container'>
        <motion.div
          className='page-main-image-container'
          layout
          layoutId={`${product.id}`}
          transition={{
            type: "crossfade",
            layout: {
              duration: 0.5,
            },
          }}
        >
          <div className='page-main-image'>
            <img src={product.url} alt={product.name} />
            {/* <Image
              src={product.url}
              alt={product.name}
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              priority
            /> */}
          </div>
        </motion.div>

        <article className='page-text-container'>
          <div className='page-title'>
            <h3>Joe Geek</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            obcaecati magnam delectus dignissimos esse, voluptates nam corporis
            beatae libero, cumque laboriosam ea asperiores nulla unde repellat
            est quam aliquid! At aliquam iure quo sunt, asperiores porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            explicabo soluta unde neque dolorum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi, numquam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            dicta suscipit delectus in cupiditate labore iusto doloremque, odio
            rem cumque? Minus, deleniti voluptatum quas ex magni dolor
            consectetur voluptas, optio quidem, quod obcaecati modi.
          </p>
        </article>
      </section>
    </Layout>
  );
}

// GET STATIC PATHS
// ----------------
export async function getStaticPaths() {
  // const { data } = products;

  const paths = products.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

// GET STATIC PROPS
// ----------------
export async function getStaticProps({ params: { slug } }) {
  // const { data } = products;

  const productsData = products.filter((item) => item.slug === slug);

  return { props: { product: productsData[0] }, revalidate: 1 };
}
