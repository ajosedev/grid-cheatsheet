import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  p {
    line-height: 1.2rem;
  }
  b {
    font-weight: 600;
  }
  code {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: ${props => props.theme.one};
  }
`;

const Description = props => (
  <Div>
    {props.children}
    {props.signature && <code>{props.signature}</code>}
  </Div>
);

Description.propTypes = {
  default: PropTypes.string,
  signature: PropTypes.string,
};

export default Description;
