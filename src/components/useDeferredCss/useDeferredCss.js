import React from 'react';

const useDeferredCss = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.rel = 'stylesheet';
    }
  }, []);

  return {
    as: 'style',
    rel: 'preload',
    ref,
  };
};

export default useDeferredCss;
