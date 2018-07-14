import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import kebabCase from 'lodash.kebabcase';

const Container = styled.section`
  /* border: 1px solid black; */
`;

const Header = styled.h3`
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const Link = styled.a`
  margin-left: .6rem;
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  vertical-align: top;
`;

const Property = ({ children, header, link }) => (
  <Container>
    <Header>
      {header}
      <Link href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${link || kebabCase(header)}`}>
        (MDN)
      </Link>
    </Header>
    {children}
  </Container>
)

Property.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Property.defaultProps = {
  link: null,
}

export default Property;
