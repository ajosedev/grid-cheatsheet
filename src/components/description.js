import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Description = props => (
  <div>
    {props.children}
    {props.signature && <code>{props.signature}</code>}
    {props.default && <p>Default: {props.default}</p>}
  </div>
);

Description.propTypes = {
  default: PropTypes.string,
  signature: PropTypes.string,
};

export default Description;
