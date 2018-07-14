import React from "react";
import styled from 'styled-components';
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
      <Example code="align-content: start;" />
      <Example code="align-content: center;" />
      <Example code="align-content: end;" />
      <Example code="align-items: start;" />
      <Example code="align-items: center;" />
      <Example code="align-items: end;" />
      <Example code="justify-content: start;" />
      <Example code="justify-content: center;" />
      <Example code="justify-content: end;" />
      <Example code="justify-items: start;" />
      <Example code="justify-items: center;" />
      <Example code="justify-items: end;" />
    </AppGrid>
  </div>
)

export default App;
