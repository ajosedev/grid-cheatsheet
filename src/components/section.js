import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 3rem 0 2rem;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.2rem;

  @media (max-width: 25rem) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  display: inline-block;
  color: ${props => props.theme.four};

  &:hover {
    a { opacity: 1; }
  }
  a {
    color: ${props => props.theme.five};
    font-size: 1.4rem;
    margin-left: 10px;
    vertical-align: top;
    cursor: pointer;
    text-decoration: none;
    opacity: 0;
    transition: opacity 250ms;
  }
`;

const Section = ({ children, header, id }) => (
  <StyledSection>
    {header && <Header>{header}<a id={id} href={`#${id}`}>#</a></Header>}
    <SectionGrid>
      {children}
    </SectionGrid>
  </StyledSection>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  id: PropTypes.string,
};

Section.defaultProps = {
  header: '',
  id: '',
}

export default Section;
