import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import GridItem from './gridItem';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: .2rem;
  padding: .2rem;
  border: 1px solid black;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;

  ${props => props.code};
`;

const renderGridItems = () => {
  const gridItems = [];
  for (let i = 0; i < 9; i++) {
    gridItems.push(<GridItem key={i} />);
  }

  return gridItems;
}

const Grid = ({ code }) => (
  <StyledGrid code={code}>
    {renderGridItems()}
  </StyledGrid>
)

Grid.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Grid;
