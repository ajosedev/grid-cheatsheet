import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  grid-gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 25rem) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Section = ({ children, header }) => (
  <section>
    <Header>{header}</Header>
    <SectionGrid>
      {children}
    </SectionGrid>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default Section;
