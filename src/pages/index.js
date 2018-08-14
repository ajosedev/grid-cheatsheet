import React from "react";
import styled, { ThemeProvider } from 'styled-components';
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
  blue: '#006fff',
  darkBlue: '#004aaa',
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
      <Header />
      <Section header="">
        <Property header="grid template">
          <Description
            info="Defines the track size"
          >
            <p>Defines the track size</p>
          </Description>
          <Declaration code={["grid-template-columns: 1fr 20px 1fr;"]} />
          <Declaration code={["grid-template-rows: 1fr repeat(2, 2fr);"]} />
        </Property>
        <Property header="gap">
          <Description
            signature="gap: <row-gap> <column-gap>?"
          >
            <p>Defines gutter size between grid items</p>
            <p>Previously known as 'grid-gap'</p>
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
          {/* TODO - grid this up */}
            <p>Controls alignment of the box's content within its content box</p>
          </Description>
          <Declaration code={["place-content: start end;"]} />
          <Declaration code={["place-content: center;"]} />
          <Declaration code={["place-content: end start;"]} />
        </Property>
        <Property header="Place items">
          <Description
            signature="place-items: <align-items> <justify-items>?"
          >
                    {/* TODO - grid this up */}
            <p>Sets the default 'align-self' and 'justify-self' of the element's child boxes</p>
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
          {/* TODO - grid this up */}
          <p>Controls the alignment of the box within its containing block</p>
        </Description>
          <Declaration code={["place-self: start end;"]} styleItem />
          <Declaration code={["place-self: center;"]} styleItem />
          <Declaration code={["place-self: end start;"]} styleItem />
        </Property>
      </Section>
      <Section header="Item placement" id="item-place">
        <Property header="grid row">
          <Description>Info about grid-row</Description>
          <Declaration code={["grid-row: 1 / 3;"]} styleItem />
          <Declaration code={["grid-row: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-row-start: 2; grid-row-end: 3;"]} styleItem />
        </Property>
        <Property header="grid column">
          <Description>Info about grid-column</Description>
          <Declaration code={["grid-column: 1 / 3;"]} styleItem />
          <Declaration code={["grid-column: 1 / span 3;"]} styleItem><AlternateCode>grid-column: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-column-start: 2; grid-column-end: 3;"]} styleItem />
        </Property>
        <Property header="grid area">
          <Description
            signature="grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end"
          >
            <p>Shorthand for setting grid-row and grid-column</p>
          </Description>
          <Declaration code={["grid-area: 1 / 1 / 3 / 3;"]} styleItem />
          <Declaration code={["grid-area: 2 / 2 / span 2 / span 2;"]} styleItem />
        </Property>
      </Section>
      <Section header="Auto alignment/placement" id="auto-align">
        <Property header="grid auto flow">
          <Description>Info about grid-auto-flow</Description>
          <Declaration code={["grid-auto-flow: row;"]} />
          <Declaration code={["grid-auto-flow: dense;"]} />
        </Property>
        <Property header="grid auto rows">
          <Description>Info about grid-auto-rows</Description>
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 20px;"]} />
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 3fr;"]} />
        </Property>
        <Property header="grid auto columns">
          <Description>Info about grid-auto-columns</Description>
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
