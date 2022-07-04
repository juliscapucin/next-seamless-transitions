import React, { useState, useEffect, useRef } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import ids from "./../data/ids";

import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ id, slug, name, url }) {
  const refProductItem = useRef(null);

  return (
    <AnimatePresence>
      <motion.article
        key={id}
        className='productItem-container'
        initial={id === ids[0] && { zIndex: 0 }}
        animate={id === ids[0] && { zIndex: 1000 }}
        exit={id === ids[0] && { zIndex: 0 }}
      >
        <motion.div
          ref={refProductItem}
          className='productItem-img-container'
          layout
          layoutId={`${id}`}
          transition={{
            // type: "crossfade",
            layout: {
              duration: 0.5,
            },
          }}
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.5 },
          }}
        >
          <Link href={`products/${slug}`}>
            <div
              className='productItem-img'
              onClick={() => {
                ids.pop();
                ids.push(id);
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
          </Link>
        </motion.div>
        <LayoutGroup>
          <div className='productItem-text'>
            <Link href={`products/${slug}`}>
              <a>
                <div className='productItem-title-container'>
                  <h4>{name}</h4>
                </div>
              </a>
            </Link>
          </div>
        </LayoutGroup>
      </motion.article>
    </AnimatePresence>
  );
}
