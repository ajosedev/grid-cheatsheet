import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { DefaultGrid } from './gridContainer';
import GridItem from './gridItem';

const GridFirst = styled(DefaultGrid)`
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

const GridContainerFirst = ({ code }) => (
  <GridFirst>
    <GridItem code={code} colour="orange" />
    {renderAdditionalGridItems()}
  </GridFirst>
)

GridContainerFirst.propTypes = {
  code: PropTypes.string.isRequired,
};

export default GridContainerFirst;
