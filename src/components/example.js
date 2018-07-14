import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Grid from './gridContainer';
import GridIndividual from './gridIndividual';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  padding: .5rem;
`;

const Caption = styled.p`
  margin-left: 1rem;
`;

const Example = ({ code, isDefault, styleItem }) => (
  <Container>
    {styleItem ? <GridIndividual code={code} /> : <Grid code={code} />}
    <Caption><code>{code}</code> {isDefault && '(default)'}</Caption>
  </Container>
)

Example.propTypes = {
  code: PropTypes.string.isRequired,
  isDefault: PropTypes.bool,
  styleItem: PropTypes.bool,
};

Example.defaultProps = {
  isDefault: false,
  styleItem: false,
};

export default Example;
