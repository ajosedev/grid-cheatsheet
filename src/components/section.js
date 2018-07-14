import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-bottom: 4rem;
`;

const Header = styled.h3`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Section = ({ children, header }) => (
  <div>
    <Header>{header}</Header>
    <SectionGrid>
      {children}
    </SectionGrid>
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default Section;
