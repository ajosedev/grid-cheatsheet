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
`;

const StyledGrid = styled(DefaultGrid)`
  ${props => props.code};
`;

const renderGridItems = () => {
  const gridItems = [];
  for (let i = 0; i < 9; i++) {
    gridItems.push(<GridItem key={i} />);
  }

  return gridItems;
}

const GridContainer = ({ code }) => (
  <StyledGrid code={code}>
    {renderGridItems()}
  </StyledGrid>
)

GridContainer.propTypes = {
  code: PropTypes.string.isRequired,
};

export default GridContainer;
