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

const Code = styled.code`
  display: inline-block;
`;

const Declaration = ({ children, code, isDefault, styleItem, styleOverride }) => (
  <Container>
    {styleItem ?
      <GridContainerFirst code={code} styleOverride={styleOverride} />
      : <GridContainer code={code} styleOverride={styleOverride} />}
    <div>
      <p>{code.map((line, i) => <Code key={i}>{line}</Code>)} {isDefault && '(default)'}</p>
      {children}
    </div>
  </Container>
)

Declaration.propTypes = {
  children: PropTypes.node,
  code: PropTypes.array.isRequired,
  isDefault: PropTypes.bool,
  styleItem: PropTypes.bool,
};

Declaration.defaultProps = {
  children: null,
  isDefault: false,
  styleItem: false,
};

export default Declaration;
