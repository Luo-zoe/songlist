import React from "react";
import NextHead from "next/head";

const Head = ({ component }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>阿胖哒Apanda</title>
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link rel="icon" href="/avatar.png" />
    <link rel="apple-touch-icon" href="/avatar.png" />
  </NextHead>
);

export default Head;
