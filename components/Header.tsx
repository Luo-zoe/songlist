import React from "react";
import NextHead from "next/head";

const Head = ({ component }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{component.title || "灵缇互娱掼蛋赛事平台"}</title>
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta
      name="keywords"
      content="掼蛋,灵缇互娱,掼蛋比赛,苏州掼蛋,灵缇,掼蛋赛事,掼蛋编排,掼蛋平台,掼蛋赛事平台,掼弹,掼蛋世界,江苏掼蛋,淮安掼蛋,斗地主,跑得快,淮安跑得快"
    />
    <meta
      name="description"
      content={
        component.description ||
        "灵缇互娱是国内领先的掼蛋赛事平台，以专业的赛事支持，细致的赛事服务，逐渐成为行业的领头羊。"
      }
    />
    <link rel="icon" href="/lingti-gd.ico" />
    <link rel="apple-touch-icon" href="/lingti-gd.ico" />
  </NextHead>
);

export default Head;
