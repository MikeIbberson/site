import styled from 'styled-components';

export default styled.div.attrs({
  className: 'column',
})`
  box-sizing: border-box;
  max-width: 25%;
  padding: 2rem;
  width: 25%;

  max-width: 33%;
  width: 33%;

  @media (max-width: 767px) {
    max-width: 50%;
    width: 50%;
  }

  @media (max-width: 567px) {
    max-width: 100%;
    width: 100%;
  }
`;
