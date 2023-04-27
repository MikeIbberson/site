import React from 'react';

const HeadAssets = () => (
  <>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Karla:wght@700&family=Lato:wght@300&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />{' '}
    <style>
      {`body,html { 
          margin: 0; 
          padding: 0; 
          font-family: 'Lato', sans-serif;
          font-size: 18px;
        } 

        @media (max-width: 992px) {
   body,html {
    font-size: 16px;
   }
  }
        
        img, svg {
          max-width:100%;
        } 
        
   
        [class^=devicon-], [class*=" devicon-"] {
          display: inline-block;
          font-size: 3rem;
          margin-bottom: 0.75rem;
          margin-right: 0.75rem;
        } 

        #interests svg {
          width: 275px;
        }

        p {
          font-size: 1rem;
        }

        h1,h2,h3,h4,h5,h6 {
          color: #023535;
          font-family: 'Karla', sans-serif;
          letter-spacing: -2px;
          line-height: 0.85;
          margin: 0;
        }

        h1 {
          font-size: 2.986rem;
        }

        h2 {
          display: inline-block;
          font-size: 2.488rem;
          margin-bottom: 2rem;
          position: relative;
        }

        h2::before,h2::after {
          background-color: #c7ffed;
          content: "";
          display: block;
          height: 4px;
          position: absolute;
          width: 0.694rem;
        }

        h2::before {
          left: -0.694rem;
          bottom: -12px;
        }

        h2::after {
          top: -12px;
          right: -0.694rem;
        }

        h3 {
          font-size: 1.728rem;
        }

        h4 {
          font-size: 1.44rem;
        }

        h5 {
          font-size: 1.2rem;
        }

        h6 {
          font-size: 1rem;
        }

        .leadin {
          font-size: 1.44rem;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a span {
            text-decoration: underline;
          }
        `}
    </style>
  </>
);

export default HeadAssets;
