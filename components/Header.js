import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <a className='photo-gallery-btn'>
          <div className='photo-gallery-user-name'>
            <h1>Unsplash Prime</h1>
          </div>
        </a>
      </Link>
    </header>
  );
}
