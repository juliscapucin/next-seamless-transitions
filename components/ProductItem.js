import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { useGlobalContext } from "../data/context";

import Link from "next/link";
import Image from "next/image";

import gridArea from "../data/grid-areas";
import scroll from "../data/scroll";
import ids from "../data/ids";

export default function ProductItem({ id, slug, name, url, index }) {
  const [clickedProduct, setClickedProduct] = useState(0);
  const refProductItem = useRef(null);
  const router = useRouter();
  const { setShowPage, setProductPage, backHome } = useGlobalContext();

  const gridPosition = gridArea[index];
  const [row, column, spanRow, spanColumn] = gridPosition;

  return (
    <motion.article
      key={id}
      className='productItem-container'
      initial={id === ids[0] && { zIndex: 98, y: -scroll / 2 }}
      animate={id === ids[0] && { zIndex: 98, y: 0 }}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{
        gridArea: `${row} / ${column} / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <motion.div
        ref={refProductItem}
        className='productItem-img-container'
        layout
        layoutId={`${id}`}
        transition={{
          type: "crossfade",
          layout: {
            duration: 0.5,
          },
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.5 },
        }}
      >
        {/* <Link href={`/products/${slug}`}> */}
        <button
          className='productItem-img'
          onClick={() => {
            ids[0] = id;
            setClickedProduct(id);
            setProductPage({ name, id, url, slug });
            setShowPage(true);
            router.push(`/products/${slug}`, undefined, {
              shallow: true,
            });
          }}
        >

          <Image
              // as={motion.div}
              src={url}
              alt={name}
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              priority
            />
        </button>
        {/* </Link> */}
      </motion.div>

      {/* <div className='productItem-text'>
        <Link href={`products/${slug}`}>
          <a>
            <div className='productItem-title-container'>
              <h4>{name}</h4>
            </div>
          </a>
        </Link>
      </div> */}
    </motion.article>
  );
}
