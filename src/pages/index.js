import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Declaration from '../components/declaration';
import Description from '../components/description';
import Header from '../components/header';
import Property from '../components/property';
import Section from '../components/section';

import '../index.css';

const Code = styled.code`
  display: block;
`;

const AlternateCode = styled(Code)`
  font-style: italic;
`;

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

const theme = {
  one: '#5D001E',
  two: '#E3E2DF',
  three: '#E3AFBC',
  four: '#9A1750',
  five: '#EE4C7C',
};

const twoColumns = 'grid-template-columns: repeat(2, auto);';
const twoRows = 'grid-template-rows: repeat(2, auto);';
const columnFlow = 'grid-auto-flow: column;';

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>CSS Grid</title>
        <meta name="description" content="A visual guide for helping you remember CSS Grid" />
      </Helmet>
      <Header />
      <Section header="">
        <Property header="grid template">
          <Description>
            <p>Defines the explicit track sizes of the grid</p>
          </Description>
          <Declaration code={["grid-template-columns: 1fr 20px 1fr;"]} />
          <Declaration code={["grid-template-rows: 1fr repeat(2, 2fr);"]} />
        </Property>
        <Property header="grid gap">
          <Description
            signature="grid-gap: <row-gap> <column-gap>?"
          >
            <p>Defines gutter size between grid items</p>
          </Description>
          <Declaration code={["grid-gap: 20%;"]} />
          <Declaration code={["grid-gap: 1px 5px;"]} />
        </Property>
      </Section>
      <Section header="Container alignment" id="container-align">
        <Property header="Place content">
          <Description
            signature="place-content: <align-content> <justify-content>?"
          >
            <p>Aligns/justifies the grid itself (when the grid is smaller than its container)</p>
          </Description>
          <Declaration code={["place-content: start end;"]} />
          <Declaration code={["place-content: center;"]} />
          <Declaration code={["place-content: end start;"]} />
        </Property>
        <Property header="Place items">
          <Description
            signature="place-items: <align-items> <justify-items>?"
          >
            <p>Defines the default <b>align-self</b> and <b>justify-self</b> of grid items within their grid tracks</p>
          </Description>
          <Declaration code={["place-items: start end;"]} />
          <Declaration code={["place-items: center;"]} />
          <Declaration code={["place-items: end start;"]} />
        </Property>
      </Section>
      <Section header="Item alignment" id="item-align">
        <Property header="Place self">
        <Description
          signature="place-self: <align-self> <justify-self>?"
        >
          <p>Aligns/justifies the grid item within its grid track</p>
        </Description>
          <Declaration code={["place-self: start end;"]} styleItem />
          <Declaration code={["place-self: center;"]} styleItem />
          <Declaration code={["place-self: end start;"]} styleItem />
        </Property>
      </Section>
      <Section header="Item placement" id="item-place">
        <Property header="grid row">
          <Description
            signature="grid-row: <grid-row-start> [/ <grid-row-end>]?"
          />
          <Declaration code={["grid-row: 1 / 3;"]} styleItem />
          <Declaration code={["grid-row: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-row-start: 2; grid-row-end: 3;"]} styleItem />
        </Property>
        <Property header="grid column">
          <Description
            signature="grid-column: <grid-column-start> [/ <grid-column-end>]?"
          />
          <Declaration code={["grid-column: 1 / 3;"]} styleItem />
          <Declaration code={["grid-column: 1 / span 3;"]} styleItem><AlternateCode>grid-column: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-column-start: 2; grid-column-end: 3;"]} styleItem />
        </Property>
        <Property header="grid area">
          <Description
            signature="grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end"
          >
          </Description>
          <Declaration code={["grid-area: 1 / 1 / 3 / 3;"]} styleItem />
          <Declaration code={["grid-area: 2 / 2 / span 2 / span 2;"]} styleItem />
        </Property>
      </Section>
      <Section header="Auto alignment/placement" id="auto-align">
        <Property header="grid auto flow">
          <Description
            signature="grid-auto-flow: [ row | column ] || dense"
          >
            <p>Defines auto placement for grid items that aren&apos;t explicitly placed</p>
          </Description>
          <Declaration code={["grid-auto-flow: row;"]} />
          <Declaration code={["grid-auto-flow: dense;"]} />
        </Property>
        <Property header="grid auto rows">
          <Description
            signature="grid-auto-rows: <track-size>+"
          >
            <p>Defines size of implicit grid tracks</p>
          </Description>
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 20px;"]} />
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 3fr;"]} />
        </Property>
        <Property header="grid auto columns">
          <Description
            signature="grid-auto-rows: <track-size>+"
          >
            <p>Defines size of implicit grid tracks</p>
          </Description>
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 20px;"]} />
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 3fr;"]} />
        </Property>
      </Section>
      <FooterLinks>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid @ MDN</a>
        <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid @ W3</a>
        <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment @ W3</a>
        <a href="https://caniuse.com/#feat=css-grid">Can I Use</a>
      </FooterLinks>
    </main>
  </ThemeProvider>
)

export default App;
