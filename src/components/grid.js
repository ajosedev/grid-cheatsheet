import React from "react";
import styled from "styled-components";
import GridItem from './gridItem';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: .2rem;
  border: 1px solid black;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;
`;

const renderGridItems = () => {
  const gridItems = [];
  for (let i = 0; i < 9; i++) {
    gridItems.push(<GridItem key={i} />);
  }

  return gridItems;
}

const Grid = () => (
  <StyledGrid>
    {renderGridItems()}
  </StyledGrid>
)

export default Grid;
