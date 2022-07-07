import Head from "next/head";
import Home from "../pages/home/index";
import { Fragment } from "react";

export default function HomeIndex() {
  return (
    <Fragment>
      <Head>
        <title>___🏁_____🚗__</title>
        <meta name="description" content="javascript bahasa indonesia" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
    </Fragment>
  );
}
