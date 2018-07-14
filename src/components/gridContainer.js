import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import GridItem from './gridItem';

export const DefaultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: .2rem;
  padding: .2rem;
  border: 1px solid black;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

const StyledGrid = styled(DefaultGrid)`
  ${props => props.code};
  ${props => props.styleOverride};
`;

const renderGridItems = () => {
  const gridItems = [];
  for (let i = 0; i < 9; i++) {
    gridItems.push(<GridItem key={i} />);
  }

  return gridItems;
}

const GridContainer = ({ code, styleOverride }) => (
  <StyledGrid code={code} styleOverride={styleOverride}>
    {renderGridItems()}
  </StyledGrid>
)

GridContainer.propTypes = {
  code: PropTypes.array.isRequired,
  styleOverride: PropTypes.string,
};

GridContainer.defaultProps = {
  styleOverride: null,
};

export default GridContainer;
