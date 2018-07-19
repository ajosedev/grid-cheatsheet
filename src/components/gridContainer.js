import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import GridItem from './gridItem';
import { adjustHue, lighten } from 'polished';

const style = (colour) => {
  const styles = [];

  for (let i = 1; i < 9; i++) {
    const pos = i + 1;

    styles.push(`
      .grid__item:nth-of-type(${pos}) {
        background-color: ${lighten(pos / 25, colour)}
        // background-color: ${adjustHue(40 * pos, '#BF3F3F')}
      }
    `);
  }

  return styles;
}

export const DefaultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: .2rem;
  padding: .2rem;
  border: 1px solid #aaa;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;
  margin-right: .6rem;
  flex-shrink: 0;

  ${props => style(props.theme.one)}
`;

const StyledGrid = styled(DefaultGrid)`
  .grid__item:nth-of-type(1) {
    background-color: ${props => lighten(1 / 45, props.theme.one)}
  }

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
