import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import GridContainer from './gridContainer';
import GridContainerFirst from './gridContainerFirst';

const Container = styled.article`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  padding: .5rem;
`;

const Caption = styled.p`
  margin-left: 1rem;
`;

const Declaration = ({ code, isDefault, styleItem, styleOverride }) => (
  <Container>
    {styleItem ?
      <GridContainerFirst code={code} styleOverride={styleOverride} />
      : <GridContainer code={code} styleOverride={styleOverride} />}
    <Caption><code>{code}</code> {isDefault && '(default)'}</Caption>
  </Container>
)

Declaration.propTypes = {
  code: PropTypes.string.isRequired,
  isDefault: PropTypes.bool,
  styleItem: PropTypes.bool,
};

Declaration.defaultProps = {
  isDefault: false,
  styleItem: false,
};

export default Declaration;
