import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import GridContainer from './gridContainer';
import GridContainerFirst from './gridContainerFirst';

const Container = styled.article`
  display: flex;
  align-items: center;
  padding: .1rem 0 .1rem .5rem;
  background-color: #eee;
  border-left: 2px solid ${props => props.theme.one};

  &:first-of-type {
    margin-top: 1rem;
  }
`;

const Code = styled.code`
  display: inline-block;
  line-height: 1rem;
`;

const Declaration = ({ children, code, isDefault, styleItem, styleOverride }) => (
  <Container>
    {styleItem ?
      <GridContainerFirst code={code} styleOverride={styleOverride} />
      : <GridContainer code={code} styleOverride={styleOverride} />}
    <div>
      <p>{code.map((line, i) => <Code key={i}>{line}</Code>)}</p>
      {children}
    </div>
  </Container>
)

Declaration.propTypes = {
  children: PropTypes.node,
  code: PropTypes.array.isRequired,
  styleItem: PropTypes.bool,
};

Declaration.defaultProps = {
  children: null,
  styleItem: false,
};

export default Declaration;
