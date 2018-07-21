import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.one};
  font-family: monospace;
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: .8rem;
  align-items: center;

  a {
    display: inline-flex;
    justify-content: center;
    padding: 0 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.four};
    line-height: 2rem;
    border: 1px solid ${props => props.theme.four};
    margin-right: .4rem;
    border-radius: 4px;
    font-weight: 600;

    transition: color 250ms, border-color 250ms;

    &:hover {
      color: ${props => props.theme.five};
      border-color: ${props => props.theme.five};
    }
  }
`;

const Header = () => (
  <header>
    <HeaderText>display: grid;</HeaderText>
    <HeaderLinks>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid @ MDN</a>
      <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid @ W3</a>
      <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment @ W3</a>
      <a href="https://caniuse.com/#feat=css-grid">Can I Use</a>
    </HeaderLinks>
  </header>
);

export default Header;
