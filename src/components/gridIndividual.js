import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { StyledGrid } from './grid';
import GridItem from './gridItem';

const StyledGridIndividual = styled(StyledGrid)`
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
`;

const renderAdditionalGridItems = () => {
  const additionalGridItems = [];
  for (let i = 0; i < 8; i++) {
    additionalGridItems.push(<GridItem key={i} />);
  }

  return additionalGridItems;
}

const GridIndividual = ({ code }) => (
  <StyledGridIndividual>
    <GridItem code={code} colour="orange" />
    {renderAdditionalGridItems()}
  </StyledGridIndividual>
)

GridIndividual.propTypes = {
  code: PropTypes.string.isRequired,
};

export default GridIndividual;
