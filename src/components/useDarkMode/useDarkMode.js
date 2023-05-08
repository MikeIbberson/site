import React from 'react';

export const DARK = 'dark';
export const LIGHT = 'light';
const MODE = 'mode';

const getUserContrastPreference = () => {
  // SSR
  if (typeof window === 'undefined') return LIGHT;

  // has been here before
  const saved = localStorage.getItem(MODE);
  if (saved) return saved;

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches
    ? DARK
    : LIGHT;
};

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
