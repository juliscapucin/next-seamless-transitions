import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ids from "./../data/ids";

import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ id, slug, name, url }) {
  const [clickedProduct, setClickedProduct] = useState(0);
  const refProductItem = useRef(null);

  console.log(ids);

  return (
    <motion.article
      key={id}
      className='productItem-container'
      initial={(id === ids[0] && { zIndex: 0 }, { opacity: 1 })}
      animate={id === ids[0] && { zIndex: 0 }}
      exit={
        (id !== clickedProduct && { opacity: 0 },
        id === ids[0] && { zIndex: 0 })
      }
      transition={{ duration: 1 }}
    >
      <motion.div
        ref={refProductItem}
        style={ids[0] === id && { opacity: 0 }}
        className='productItem-img-container'
        transition={{
          layout: {
            duration: 0.5,
          },
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.5 },
        }}
      >
        {/* <Link href={`products/${slug}`}> */}
        <div
          className='productItem-img'
          onClick={() => {
            ids[0] = id;
            setClickedProduct(id);
          }}
        >
          <img
            // as={motion.div}
            src={url}
            alt={name}
          />
          {/* <Image
              // as={motion.div}
              src={url}
              alt={name}
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              priority
            /> */}
        </div>
        {/* </Link> */}
      </motion.div>

      <div className='productItem-text'>
        {/* <Link href={`products/${slug}`}> */}
        <a>
          <div className='productItem-title-container'>
            <h4>{name}</h4>
          </div>
        </a>
        {/* </Link> */}
      </div>
    </motion.article>
  );
}
