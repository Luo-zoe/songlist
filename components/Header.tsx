import React from "react";
import NextHead from "next/head";

const Head = ({ component }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>胖哒的歌单</title>
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    {/* <link rel="icon" href="/lingti-gd.ico" /> */}
    {/* <link rel="apple-touch-icon" href="/lingti-gd.ico" /> */}
  </NextHead>
);

export default Head;
