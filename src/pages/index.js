import React from "react";
import styled from 'styled-components';
import Property from '../components/property';
import Declaration from '../components/declaration';
import Section from '../components/section';

const Header = styled.h1`
  font-size: 3rem;
`;

const Code = styled.code`
  display: inline-block;
`;

const AlternateCode = styled(Code)`
  font-style: italic;
`;

const twoColumns = 'grid-template-columns: repeat(2, auto);';
const twoRows = 'grid-template-rows: repeat(2, auto);';
const columnFlow = 'grid-auto-flow: column;';

const App = () => (
  <div>
    <Header><code>display: grid;</code></Header>
    <Section header="???">
      <Property header="grid-template">
        <p>Info about grid-template</p>
        <Declaration code={["grid-template-columns: 1fr 20px 1fr;", "grid-template-rows: auto auto auto;"]} />
        <Declaration code={["grid-template-rows: 1fr 20px 1fr;"]} />
        <Declaration code={["grid-template-columns: 1fr 2fr 2fr;"]} />
      </Property>
      <Property header="grid-gap">
        <p>Info about grid-gap. AKA gap</p>
        <Declaration code={["grid-gap: 10%;"]} />
        <Declaration code={["grid-gap: 10px;"]} />
        <Declaration code={["grid-gap: 2px 10px;"]} />
        <Declaration code={["grid-gap: normal;"]} isDefault />
      </Property>
    </Section>
    <Section header="Auto alignment/placement">
      <Property header="grid-auto-flow">
        <p>Info about grid-auto-flow</p>
        <Code>{twoRows}</Code>
        <Declaration code={["grid-auto-flow: column;"]} />
        <Declaration code={["grid-auto-flow: dense;"]} />
        <Declaration code={["grid-auto-flow: row;"]} isDefault />
      </Property>
      <Property header="grid-auto-rows">
        <p>Info about grid-auto-rows</p>
        <Code>{twoRows}</Code>
        <Declaration styleOverride={twoRows} code={["grid-auto-rows: 20px;"]} />
        <Declaration styleOverride={twoRows} code={["grid-auto-rows: min-content;"]} />
        <Declaration styleOverride={twoRows} code={["grid-auto-rows: 3fr;"]} />
        <Declaration styleOverride={twoRows} code={["grid-auto-rows: auto;"]} isDefault />
      </Property>
      <Property header="grid-auto-columns">
        <p>Info about grid-auto-columns</p>
        <Code>{twoColumns}</Code>
        <Code>{columnFlow}</Code>
        <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 20px;"]} />
        <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: min-content;"]} />
        <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: 3fr;"]} />
        <Declaration styleOverride={`${twoColumns + columnFlow}`} code={["grid-auto-columns: auto;"]} isDefault />
      </Property>
    </Section>
    <Section header="Container alignment">
      <Property header="align-content">
        <p>Info about align-content</p>
        <Declaration code={["align-content: start;"]} />
        <Declaration code={["align-content: center;"]} />
        <Declaration code={["align-content: end;"]} />
        <Declaration code={["align-content: normal;"]} isDefault />
      </Property>
      <Property header="align-items">
        <p>Info about align-items</p>
        <Declaration code={["align-items: start;"]} />
        <Declaration code={["align-items: center;"]} />
        <Declaration code={["align-items: end;"]} />
        <Declaration code={["align-items: normal;"]} isDefault />
      </Property>
      <Property header="justify-content">
        <p>Info about justify-content</p>
        <Declaration code={["justify-content: start;"]} />
        <Declaration code={["justify-content: center;"]} />
        <Declaration code={["justify-content: end;"]} />
        <Declaration code={["justify-content: normal;"]} isDefault />
      </Property>
      <Property header="justify-items">
        <p>Info about justify-items</p>
        <Declaration code={["justify-items: start;"]} />
        <Declaration code={["justify-items: center;"]} />
        <Declaration code={["justify-items: end;"]} />
        <Declaration code={["justify-items: normal;"]} isDefault />
      </Property>
    </Section>
    <Section header="Item alignment">
      <Property header="align-self">
        <p>Info about align-self</p>
        <Declaration code={["align-self: start;"]} styleItem />
        <Declaration code={["align-self: center;"]} styleItem />
        <Declaration code={["align-self: end;"]} styleItem />
        <Declaration code={["align-self: auto;"]} styleItem isDefault />
      </Property>
      <Property header="justify-self">
        <p>Info about justify-self</p>
        <Declaration code={["justify-self: start;"]} styleItem />
        <Declaration code={["justify-self: center;"]} styleItem />
        <Declaration code={["justify-self: end;"]} styleItem />
        <Declaration code={["justify-self: auto;"]} styleItem isDefault/>
      </Property>
    </Section>
    <Section header="Item placement">
      <Property header="grid-row">
        <p>Info about grid-row</p>
        <Declaration code={["grid-row-start: 2;"]} styleItem />
        <Declaration code={["grid-row-end: 2;"]} styleItem />
        <Declaration code={["grid-row: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
        <Declaration code={["grid-row: 1 / 3;"]} styleItem />
        <Declaration code={["grid-row: 3"]} styleItem />
      </Property>
      <Property header="grid-column">
        <p>Info about grid-column</p>
        <Declaration code={["grid-column-start: 2;"]} styleItem />
        <Declaration code={["grid-column-end: 2;"]} styleItem />
        <Declaration code={["grid-column: 1 / span 3;"]} styleItem><AlternateCode>grid-row: span 3;</AlternateCode></Declaration>
        <Declaration code={["grid-column: 1 / 3;"]} styleItem />
        <Declaration code={["grid-column: 3"]} styleItem />
      </Property>
      <Property header="grid-area">
        <p>grid-row-start, grid-column-start, grid-row-end, grid-column-end</p>
        <Declaration code={["grid-area: 1 / 1 / 3 / 3;"]} styleItem />
        <Declaration code={["grid-area: 1 / 1 / span 2 / span 2;"]} styleItem />
        <Declaration code={["grid-area: 1 / 1 / 3 / 4;"]} styleItem />
        <Declaration code={["grid-area: 2 / 2 / 4 / 4;"]} styleItem />
      </Property>
    </Section>
  </div>
)

export default App;
