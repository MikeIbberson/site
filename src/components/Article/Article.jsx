import styled from 'styled-components';

export default styled.article`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  margin-bottom: 4rem;
  justify-content: space-between;

  h2::before,
  h2::after {
    display: none;
  }

  h2 {
    font-size: 1.728rem;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.44rem;
  }

  main {
    box-sizing: border-box;
    max-width: 100%;
    width: 650px;
  }

  nav ul {
    display: flex;
    margin-top: 0;
    list-style: none;
    padding: 0;

    & li {
      font-size: smaller;
      margin-right: 0.25rem;
    }
  }

  .html {
    & a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1187px) {
    display: block;

    main {
      padding: 2rem;
      width: 100%;
    }
  }
`;
