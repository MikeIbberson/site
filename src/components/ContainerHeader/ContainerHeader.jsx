import React from 'react';
import styled from 'styled-components';
import useScroller from '../useScroller';

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  > div {
    margin: auto;
    max-width: 450px;
  }
`;

const ContainerHeader = ({ id, html }) => {
  const { className, ref } = useScroller();

  return (
    <Header className={className} id={id} ref={ref}>
      <div
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Header>
  );
};

export default ContainerHeader;
