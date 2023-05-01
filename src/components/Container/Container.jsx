import React from 'react';
import styled from 'styled-components';
import useScroller from '../useScroller';

const ContainerElement = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  max-width: 100%;
  justify-content: center;
  width: 1420px;

  & .column {
    opacity: 0;
    transform: scale(0.94);
    transition: opacity, transform 550ms ease-in;

    ${Array.from({ length: 15 })
      .map(
        (_, idx) => `
          &:nth-of-type(${idx}) {
            transition-delay: ${idx * 75}ms;
          }
    `,
      )
      .join(' ')}
  }

  &.inview-columns .column {
    transform: none;
    opacity: 1;
  }
`;

const Container = ({ children }) => {
  const { className, ref } = useScroller({
    scrollerClassName: 'section-scroller',
    inViewClassName: 'inview-columns',
  });

  return (
    <ContainerElement className={className} ref={ref}>
      {children}
    </ContainerElement>
  );
};

export default Container;
