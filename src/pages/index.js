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

// const Description = styled.p`
//   margin-bottom: 1rem;
// `;

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
          <Description>Info about grid-template</Description>
          <Declaration code={["grid-template-columns: 1fr 20px 1fr;", "grid-template-rows: auto auto auto;"]} />
          <Declaration code={["grid-template-columns: repeat(3, auto)", "grid-template-rows: 1fr 20px 1fr;"]} />
          <Declaration code={["grid-template-columns: 1fr 2fr 2fr;", "grid-template-rows: repeat(3, 30%);"]} />
        </Property>
        <Property header="grid gap">
          <Description>Info about grid-gap. AKA gap</Description>
          <Declaration code={["grid-gap: 10%;"]} />
          <Declaration code={["grid-gap: 10px;"]} />
          <Declaration code={["grid-gap: 2px 10px;"]} />
          <Declaration code={["grid-gap: normal;"]} isDefault />
        </Property>
      </Section>
      <Section header="Container alignment" id="container-align">
        <Property header="align content">
          <Description>Info about align-content</Description>
          <Declaration code={["align-content: start;"]} />
          <Declaration code={["align-content: center;"]} />
          <Declaration code={["align-content: end;"]} />
          <Declaration code={["align-content: normal;"]} isDefault />
        </Property>
        <Property header="align items">
          <Description>Info about align-items</Description>
          <Declaration code={["align-items: start;"]} />
          <Declaration code={["align-items: center;"]} />
          <Declaration code={["align-items: end;"]} />
          <Declaration code={["align-items: normal;"]} isDefault />
        </Property>
        <Property header="justify content">
          <Description>Info about justify-content</Description>
          <Declaration code={["justify-content: start;"]} />
          <Declaration code={["justify-content: center;"]} />
          <Declaration code={["justify-content: end;"]} />
          <Declaration code={["justify-content: normal;"]} isDefault />
        </Property>
        <Property header="justify items">
          <Description>Info about justify-items</Description>
          <Declaration code={["justify-items: start;"]} />
          <Declaration code={["justify-items: center;"]} />
          <Declaration code={["justify-items: end;"]} />
          <Declaration code={["justify-items: normal;"]} isDefault />
        </Property>
      </Section>
      <Section header="Item alignment" id="item-align">
        <Property header="align self">
          <Description>Info about align-self</Description>
          <Declaration code={["align-self: start;"]} styleItem />
          <Declaration code={["align-self: center;"]} styleItem />
          <Declaration code={["align-self: end;"]} styleItem />
          <Declaration code={["align-self: auto;"]} styleItem isDefault />
        </Property>
        <Property header="justify self">
          <Description>Info about justify-self</Description>
          <Declaration code={["justify-self: start;"]} styleItem />
          <Declaration code={["justify-self: center;"]} styleItem />
          <Declaration code={["justify-self: end;"]} styleItem />
          <Declaration code={["justify-self: auto;"]} styleItem isDefault/>
        </Property>
      </Section>
      <Section header="Item placement" id="item-place">
        <Property header="grid row">
          <Description>Info about grid-row</Description>
          <Declaration code={["grid-row-start: 2;"]} styleItem />
          <Declaration code={["grid-row-end: 2;"]} styleItem />
          <Declaration code={["grid-row: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-row: 1 / 3;"]} styleItem />
          <Declaration code={["grid-row: 3"]} styleItem />
        </Property>
        <Property header="grid column">
          <Description>Info about grid-column</Description>
          <Declaration code={["grid-column-start: 2;"]} styleItem />
          <Declaration code={["grid-column-end: 2;"]} styleItem />
          <Declaration code={["grid-column: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
          <Declaration code={["grid-column: 1 / 3;"]} styleItem />
          <Declaration code={["grid-column: 3"]} styleItem />
        </Property>
        <Property header="grid area">
          <Description>grid-row-start / grid-column-start / grid-row-end / grid-column-end</Description>
          <Declaration code={["grid-area: 1 / 1 / 3 / 3;"]} styleItem />
          <Declaration code={["grid-area: 1 / 1 / span 2 / span 2;"]} styleItem />
          <Declaration code={["grid-area: 1 / 1 / 3 / 4;"]} styleItem />
          <Declaration code={["grid-area: 2 / 2 / 4 / 4;"]} styleItem />
        </Property>
      </Section>
      <Section header="Auto alignment/placement" id="auto-align">
        <Property header="grid auto flow">
          <Description>Info about grid-auto-flow</Description>
          <Declaration code={["grid-auto-flow: column;"]} />
          <Declaration code={["grid-auto-flow: dense;"]} />
          <Declaration code={["grid-auto-flow: row;"]} isDefault />
        </Property>
        <Property header="grid auto rows">
          <Description>Info about grid-auto-rows</Description>
          {/* <Code>{twoRows}</Code> */}
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 20px;"]} />
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: min-content;"]} />
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: 3fr;"]} />
          <Declaration styleOverride={twoRows} code={["grid-auto-rows: auto;"]} isDefault />
        </Property>
        <Property header="grid auto columns">
          <Description>Info about grid-auto-columns</Description>
          {/* <Code>{twoColumns}</Code>
          <Code>{columnFlow}</Code> */}
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 20px;"]} />
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: min-content;"]} />
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 3fr;"]} />
          <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: auto;"]} isDefault />
        </Property>
      </Section>
    </main>
  </ThemeProvider>
)

export default App;
