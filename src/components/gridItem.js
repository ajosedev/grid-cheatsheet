import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { lighten } from 'polished';

const style = (startAtOne = false) => {
  const styles = [];
  const start = startAtOne ? 1 : 0;

  for (let i = start; i < 9; i++) {
    const pos = i + 1;

    styles.push(`
      &:nth-of-type(${pos}) {
        background-color: ${lighten(pos / 50, '#006fff')}
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
  <Item className="test" code={code} colour={colour} />
)

GridItem.propTypes = {
  code: PropTypes.string,
  colour: PropTypes.string,
};

GridItem.defaultProps = {
  code: null,
  colour: null,
};

export default GridItem;
