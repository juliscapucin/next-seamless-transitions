import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppProvider } from "./../data/context";

import scroll from "./../data/scroll";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  const refLayout = useRef(null);
  const [scrollRef, setScrollRef] = useState(false);

  useEffect(() => {
    if (refLayout) {
      setScrollRef(true);
    }
  }, [refLayout]);

  useEffect(() => {
    const getPosition = () => {
      const currentScroll = refLayout.current.scrollTop;
      console.log(currentScroll);

      if (currentScroll !== 0) {
        scroll = currentScroll;
      }
    };

    refLayout.current.addEventListener("scroll", getPosition);

    // return () => {
    //   refLayout.current.removeEventListener("scroll", getPosition);
    // };
  }, [scrollRef]);

  useEffect(() => {
    // console.log(router.pathname);
    if (router.pathname === "/") {
      refLayout.current.scrollTo(0, scroll);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <React.StrictMode>
        <AppProvider>
          <Header />
          <main className='main-container' ref={refLayout}>
            {children}
          </main>
          {/* <Footer /> */}
        </AppProvider>
      </React.StrictMode>
    </>
  );
}

Layout.defaultProps = {
  title: "Seamless transitions",
  description: "Here goes description for meta tag.",
  keywords: "photography, gallery, unsplash",
  link: "rel='icon' href='/favicon.ico'",
};
