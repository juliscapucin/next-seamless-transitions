import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useGlobalContext } from "../data/context";

export default function Header() {
  const router = useRouter();
  const { setShowHome } = useGlobalContext();

  return (
    <header>
      {/* <Link href='/' scroll={false}> */}
      <a
        className='photo-gallery-btn'
        onClick={() => {
          setShowHome(true);
          setTimeout(() => {
            router.push("/", undefined, {
              shallow: true,
            });
          }, 1000);
        }}
      >
        <div className='photo-gallery-user-name'>
          <h1>Unsplash Prime</h1>
        </div>
      </a>
    </header>
  );
}
