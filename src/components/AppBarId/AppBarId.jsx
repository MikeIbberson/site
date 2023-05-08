import styled from 'styled-components';
import { getThemePropPrimary } from '../Theme/utils';

const AppBarId = styled.span`
  color: ${getThemePropPrimary()};
  font-family: 'Karla', sans-serif;
  font-size: 1.44rem;
  letter-spacing: -2px;
  line-height: 0.75;
  margin: 0;
  text-decoration: none;
`;

export default AppBarId;
