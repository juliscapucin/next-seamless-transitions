import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ slug, name, url }) {
  return (
    <article className='productItem-container'>
      <Link href={`products/${slug}`}>
        <div className='productItem-img-container'>
          <Image
            src={url}
            alt={name}
            layout='fill'
            objectFit='cover'
            objectPosition='center center'
          />
        </div>
      </Link>

      <Link href={`products/${slug}`}>
        <a>
          <div className='productItem-title-container'>
            <h4>{name}</h4>
          </div>
        </a>
      </Link>
    </article>
  );
}
