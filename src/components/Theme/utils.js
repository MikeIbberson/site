import { get } from 'lodash';

const getThemeProp = (prop) => () => (props) =>
  get(props, `theme.${prop}`, undefined);

export const {
  getThemePropContrast,
  getThemePropContrastText,
  getThemePropMuted,
  getThemePropPrimary,
  getThemePropSecondary,
  getThemePropShade,
} = {
  getThemePropContrast: getThemeProp('contrast'),
  getThemePropContrastText: getThemeProp('contrastText'),
  getThemePropMuted: getThemeProp('muted'),
  getThemePropPrimary: getThemeProp('primary'),
  getThemePropSecondary: getThemeProp('secondary'),
  getThemePropShade: getThemeProp('shade'),
};
