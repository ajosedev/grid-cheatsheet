import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


const Item = styled.div`
  border-radius: 2px;
  min-width: .4rem;
  min-height: .4rem;
  background-color: ${props => props.colour};
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
