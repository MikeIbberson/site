import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  > div {
    margin: auto;
    max-width: 450px;
  }
`;

const ContainerHeader = ({ id, html }) => (
  <Header
    id={id}
    style={{
      textAlign: 'center',
      width: '100%',
    }}
  >
    <div
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  </Header>
);

export default ContainerHeader;
