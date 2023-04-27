import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  max-width: 25%;
  padding: 2rem;
  width: 25%;

  @media (max-width: 1200px) {
    max-width: 33%;
    width: 33%;
  }

  @media (max-width: 567px) {
    max-width: 100%;
    width: 100%;
  }
`;
