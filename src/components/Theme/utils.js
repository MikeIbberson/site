import { get } from 'lodash';

const getThemeProp = (prop) => () => (props) =>
  get(props, `theme.${prop}`, undefined);

export const {
  getThemePropContrast,
  getThemePropPrimary,
  getThemePropSecondary,
  getThemePropShade,
} = {
  getThemePropContrast: getThemeProp('contrast'),
  getThemePropPrimary: getThemeProp('primary'),
  getThemePropSecondary: getThemeProp('secondary'),
  getThemePropShade: getThemeProp('shade'),
};
