import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'lodash';

const Aside = styled.aside`
  background-color: rgb(199, 255, 237);
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;

  & h3 {
    font-size: 1.44rem;
    margin: 0;
  }

  & ul {
    columns: 2;
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;

    & li {
      display: flex;
      &::before {
        content: '🗸';
        color: #015958;
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 567px) {
    & ul {
      columns: 1;
    }
  }
`;

const Facts = ({ data }) =>
  size(data) ? (
    <Aside>
      <h3>Highlights:</h3>
      <ul>
        {data.map((item, idx) => (
          <li key={`fact ${idx + 1}`}>{item}</li>
        ))}
      </ul>
    </Aside>
  ) : null;

Facts.defaultProps = {
  data: [],
};

Facts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default Facts;
