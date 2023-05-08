import React from 'react';
import PropTypes from 'prop-types';
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

ContainerHeader.propTypes = {
  id: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default ContainerHeader;
