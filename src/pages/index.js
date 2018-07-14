import React from "react";
import styled from 'styled-components';
import Property from '../components/property';
import Declaration from '../components/declaration';

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
      <Property header="align-content">
        <p>Info about align-content</p>
        <Declaration code="align-content: start;" />
        <Declaration code="align-content: center;" />
        <Declaration code="align-content: end;" />
        <Declaration code="align-content: normal;" isDefault />
      </Property>
      <Property header="align-items">
        <p>Info about align-items</p>
        <Declaration code="align-items: start;" />
        <Declaration code="align-items: center;" />
        <Declaration code="align-items: end;" />
        <Declaration code="align-items: normal;" isDefault />
      </Property>
      <Property header="justify-content">
        <p>Info about justify-content</p>
        <Declaration code="justify-content: start;" />
        <Declaration code="justify-content: center;" />
        <Declaration code="justify-content: end;" />
        <Declaration code="justify-content: normal;" isDefault />
      </Property>
      <Property header="justify-items">
        <p>Info about justify-items</p>
        <Declaration code="justify-items: start;" />
        <Declaration code="justify-items: center;" />
        <Declaration code="justify-items: end;" />
        <Declaration code="justify-items: normal;" isDefault />
      </Property>
    </SectionGrid>
    <SectionGrid>
      <Property header="align-self">
        <p>Info about align-self</p>
        <Declaration code="align-self: start;" styleItem />
        <Declaration code="align-self: center;" styleItem />
        <Declaration code="align-self: end;" styleItem />
        <Declaration code="align-self: auto;" styleItem isDefault />
      </Property>
      <Property header="justify-self">
        <p>Info about justify-self</p>
        <Declaration code="justify-self: start;" styleItem />
        <Declaration code="justify-self: center;" styleItem />
        <Declaration code="justify-self: end;" styleItem />
        <Declaration code="justify-self: auto;" styleItem isDefault/>
      </Property>
    </SectionGrid>
  </div>
)

export default App;
