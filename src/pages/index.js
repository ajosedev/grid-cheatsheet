import React from "react";
import styled from 'styled-components';
import ExampleContainer from '../components/exampleContainer';
import Example from '../components/example';

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-bottom: 4rem;
`;

const Header = styled.h1`
  font-size: 3rem;
`;

const App = () => (
  <div>
    <Header>CSS Grid</Header>
    <SectionGrid>
      <ExampleContainer header="align-content">
        <p>Info about align-content</p>
        <Example code="align-content: start;" />
        <Example code="align-content: center;" />
        <Example code="align-content: end;" />
        <Example code="align-content: normal;" isDefault />
      </ExampleContainer>
      <ExampleContainer header="align-items">
        <p>Info about align-items</p>
        <Example code="align-items: start;" />
        <Example code="align-items: center;" />
        <Example code="align-items: end;" />
        <Example code="align-items: normal;" isDefault />
      </ExampleContainer>
      <ExampleContainer header="justify-content">
        <p>Info about justify-content</p>
        <Example code="justify-content: start;" />
        <Example code="justify-content: center;" />
        <Example code="justify-content: end;" />
        <Example code="justify-content: normal;" isDefault />
      </ExampleContainer>
      <ExampleContainer header="justify-items">
        <p>Info about justify-items</p>
        <Example code="justify-items: start;" />
        <Example code="justify-items: center;" />
        <Example code="justify-items: end;" />
        <Example code="justify-items: normal;" isDefault />
      </ExampleContainer>
    </SectionGrid>
    <SectionGrid>
      <ExampleContainer header="align-self">
        <p>Info about align-self</p>
        <Example code="align-self: start;" styleItem />
        <Example code="align-self: center;" styleItem />
        <Example code="align-self: end;" styleItem />
        <Example code="align-self: auto;" styleItem isDefault />
      </ExampleContainer>
      <ExampleContainer header="justify-self">
        <p>Info about justify-self</p>
        <Example code="justify-self: start;" styleItem />
        <Example code="justify-self: center;" styleItem />
        <Example code="justify-self: end;" styleItem />
        <Example code="justify-self: auto;" styleItem isDefault/>
      </ExampleContainer>
    </SectionGrid>
  </div>
)

export default App;
