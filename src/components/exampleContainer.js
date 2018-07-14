import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
`;

const Header = styled.h3`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ExampleContainer = ({ children, header }) => (
  <Container>
    <Header>{header}</Header>
    {children}
  </Container>
)

ExampleContainer.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default ExampleContainer;
