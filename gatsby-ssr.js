import React from 'react';
import AppBar from './src/components/AppBar';
import Footer from './src/components/Footer';
import FooterOffset from './src/components/FooterOffset';

export const wrapPageElement = ({ element }) => (
  // eslint-disable-next-line
  <>
    <FooterOffset>
      <AppBar />
      {element}
    </FooterOffset>
    <Footer />
  </>
);
