import React from 'react';
import AppBar from './src/components/AppBar';
import Footer from './src/components/Footer';
import FooterOffset from './src/components/FooterOffset';
import Theme from './src/components/Theme';

export const wrapPageElement = ({ element }) => (
  // eslint-disable-next-line
  <Theme>
    <FooterOffset>
      <AppBar />
      {element}
    </FooterOffset>
    <Footer />
  </Theme>
);
