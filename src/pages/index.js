import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Main from './main';
import IE from './IE';

import '../index.css';

const theme = {
  one: '#5D001E',
  two: '#E3E2DF',
  three: '#E3AFBC',
  four: '#9A1750',
  five: '#EE4C7C',
};

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: .8rem;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: ${props => props.theme.four};
    line-height: 2rem;
    margin-right: .5rem;
    font-weight: 600;
    border-bottom: 1px solid ${props => props.theme.four};;

    transition: color 250ms, border-color 250ms;

    &:hover {
      color: ${props => props.theme.five};
      border-color: ${props => props.theme.five};
    }
  }
`;

// TODO - use React.Fragment
const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>CSS Grid</title>
        <meta name="description" content="A visual guide for helping you remember CSS Grid" />
      </Helmet>
      <Header />
      <Main />
      <IE />
      <FooterLinks>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid @ MDN</a>
        <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid @ W3</a>
        <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment @ W3</a>
        <a href="https://caniuse.com/#feat=css-grid">Can I Use</a>
      </FooterLinks>
    </div>
  </ThemeProvider>
)

export default App;
