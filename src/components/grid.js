import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  border: 1px solid black;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;
`;

const Grid = () => (
  <StyledGrid>
    Grid
  </StyledGrid>
)

export default Grid;
