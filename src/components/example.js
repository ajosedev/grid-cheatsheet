import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Grid from './grid';

const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  /* justify-content: space-around; */
  border: 1px solid black;
  border-radius: 2px;
  padding: .5rem;
`;

const Code = styled.code`
  margin-left: 1rem;
`;

const Example = ({ code }) => (
  <Container>
    <Grid code={code} />
    <Code>{code}</Code>
  </Container>
)

Example.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Example;
