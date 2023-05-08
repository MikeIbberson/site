import React from 'react';

export const DARK = 'dark';
export const LIGHT = 'light';
const MODE = 'mode';

const getUserContrastPreference = () =>
  // SSR
  typeof window === 'undefined'
    ? LIGHT
    : // not going to look at CSS pref
      // light mode is admittedly better
      localStorage.getItem(MODE) || LIGHT;

const useDarkMode = () => {
  const [type, setType] = React.useState(
    getUserContrastPreference(),
  );

  return {
    toggle() {
      const inverse = type === DARK ? LIGHT : DARK;
      localStorage.setItem(MODE, inverse);
      setType(inverse);
    },
    type,
  };
};

export default useDarkMode;
