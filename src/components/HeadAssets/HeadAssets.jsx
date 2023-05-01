import React from 'react';

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
    crossOrigin
    href="https://fonts.gstatic.com"
    key="gstatic"
    rel="preconnect"
  />,
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@700&family=Lato:wght@300&display=swap"
    key="lato"
    rel="stylesheet"
  />,
  <link
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    key="devicon"
    rel="stylesheet"
  />,
];

export default HeadAssets;
