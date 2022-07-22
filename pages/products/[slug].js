import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import products from "./../../data/products";

import Layout from "./../../components/Layout";
import TransitionPage from "../../components/TransitionPage";

export default function Products({ product }) {
  const { id, url, name, plant } = product;
  const refPage = useRef(null);
  const [scrollRef, setScrollRef] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [backHome, setBackHome] = useState(false);

  useEffect(() => {
    if (refPage) {
      setScrollRef(true);
    }
  }, [refPage]);

  useEffect(() => {
    const getPosition = () => {
      const currentScroll = refPage.current.scrollTop;
      console.log(currentScroll);

      if (currentScroll !== 0) {
        setScrollPos(currentScroll);
      }
    };

    refPage.current.addEventListener("scroll", getPosition);

    // return () => {
    //   refPage.current.removeEventListener("scroll", getPosition);
    // };
  }, [scrollRef]);

  return (
    <Layout>
      <TransitionPage
        {...product}
        scrollPos={scrollPos}
        setBackHome={setBackHome}
      />
      <section className='page-container-outer' ref={refPage}>
        <section className='page-container-inner'>
          <div
            className='page-main-image-container'
            // style={{
            //   transform: backHome && `translateY(${scrollPos}px)`,
            //   transition: "transform 0.5s ease-in-out",
            // }}
          >
            <div className='page-main-image'>
              <img src={url} alt={name} />
              {/* <Image
              src={url}
              alt={name}
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              priority
            /> */}
            </div>
          </div>

          <article className='page-text-container'>
            <div className='page-title'>
              <h3>{plant}</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati magnam delectus dignissimos esse, voluptates nam
              corporis beatae libero, cumque laboriosam ea asperiores nulla unde
              repellat est quam aliquid! At aliquam iure quo sunt, asperiores
              porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              explicabo soluta unde neque dolorum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi, numquam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              dicta suscipit delectus in cupiditate labore iusto doloremque,
              odio rem cumque? Minus, deleniti voluptatum quas ex magni dolor
              consectetur voluptas, optio quidem, quod obcaecati modi.
            </p>
          </article>
        </section>
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
