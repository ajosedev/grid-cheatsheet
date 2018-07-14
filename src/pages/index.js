import React from "react";
import styled from 'styled-components';
import ExampleContainer from '../components/exampleContainer';
import Example from '../components/example';

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Header = styled.h1`
  font-size: 3rem;
`;

const App = () => (
  <div>
    <Header>CSS Grid</Header>
    <AppGrid>
      <ExampleContainer header="align-content">
        <p>Info about align-content</p>
        <p>Default: <code>align-content: stretch;</code></p>
        <Example code="align-content: start;" />
        <Example code="align-content: center;" />
        <Example code="align-content: end;" />
      </ExampleContainer>
      <ExampleContainer header="align-items">
        <p>Info about align-items</p>
        <p>Default: <code>align-items: stretch;</code></p>
        <Example code="align-items: start;" />
        <Example code="align-items: center;" />
        <Example code="align-items: end;" />
      </ExampleContainer>
      <ExampleContainer header="justify-content">
        <p>Info about justify-content</p>
        <p>Default: <code>justify-content: stretch;</code></p>
        <Example code="justify-content: start;" />
        <Example code="justify-content: center;" />
        <Example code="justify-content: end;" />
      </ExampleContainer>
      <ExampleContainer header="justify-items">
        <p>Info about justify-items</p>
        <p>Default: <code>justify-items: stretch;</code></p>
        <Example code="justify-items: start;" />
        <Example code="justify-items: center;" />
        <Example code="justify-items: end;" />
      </ExampleContainer>
    </AppGrid>
  </div>
)

export default App;
