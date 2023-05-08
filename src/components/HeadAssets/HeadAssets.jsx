import React from 'react';
import useDeferredCss from '../useDeferredCss';

const HeadAssets = () => [
  <html key="html" lang="en" />,
  <title key="title">Mike Ibberson | MI WebDev</title>,
  <meta
    key="description"
    name="description"
    content="Portfolio website"
  />,
  <link
    href="https://fonts.googleapis.com"
    key="googleapis"
    rel="preconnect"
  />,
  <link
    crossOrigin="true"
    href="https://fonts.gstatic.com"
    key="gstatic"
    rel="preconnect"
  />,
  <link
    //   {...useDeferredCss()}
    href="https://fonts.googleapis.com/css2?family=Karla:wght@700&family=Lato:wght@300&display=swap"
    key="lato"
    rel="stylesheet"
  />,
  <link
    {...useDeferredCss()}
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    key="devicon"
  />,
];
export default HeadAssets;
