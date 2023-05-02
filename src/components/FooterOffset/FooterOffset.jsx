import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  background: #fff;
  position: relative;
  z-index: 1;
`;

// eslint-disable-next-line
const FooterOffset = ({ children }) => {
  const ref = React.useRef();

  const setMarginBottom = () => {
    try {
      ref.current.style.marginBottom = String(
        ref.current.nextElementSibling.clientHeight,
      ).concat('px');
    } catch (e) {
      // noop
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setMarginBottom();

      window.addEventListener('resize', setMarginBottom, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener('resize', setMarginBottom);
    };
  }, []);

  return <Element ref={ref}>{children}</Element>;
};

export default FooterOffset;
