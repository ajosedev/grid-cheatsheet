import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { adjustHue, lighten } from 'polished';

const style = (startAtOne = false) => {
  const styles = [];
  const start = startAtOne ? 1 : 0;

  for (let i = start; i < 9; i++) {
    const pos = i + 1;

    styles.push(`
      &:nth-of-type(${pos}) {
        background-color: ${lighten(pos / 45, '#006fff')}
        // background-color: ${adjustHue(40 * pos, '#BF3F3F')}
      }
    `);
  }

  return styles;
}

const Item = styled.div`
  border-radius: 2px;
  min-width: .4rem;
  min-height: .4rem;
  background-color: ${props => props.colour};
  ${props => style(!!props.code)}
  ${props => props.code};
`;

const GridItem = ({ code, colour }) => (
  <Item className="grid__item" code={code} colour={colour} />
)

GridItem.propTypes = {
  code: PropTypes.array,
  colour: PropTypes.string,
};

GridItem.defaultProps = {
  code: null,
  colour: null,
};

export default GridItem;
