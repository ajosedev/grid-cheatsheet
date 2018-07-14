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
      <Example />
      <Example />
      <Example />
    </AppGrid>
  </div>
)

export default App;
