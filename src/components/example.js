import React from "react";
import styled from "styled-components";
import Grid from './grid';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 2px;
  padding: .5rem;
`;

const Code = styled.code`
  margin-left: 1rem;
`;

const Example = () => (
  <Container>
    <Grid />
    <Code>justify-content: center;</Code>
  </Container>
)

export default Example;
