import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  min-width: 2.6rem;
  justify-content: space-between;
`;

const Caret = styled.span`
  display: inline-block;
  margin-left: .2rem;
  vertical-align: middle;
  transition: transform 50ms;
  color: ${props => props.theme.four};
  font-weight: bold;
  ${props => !props.expanded && "transform: rotate(180deg)"};
`;

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpanded = this.toggleExpanded.bind(this);

    this.state = {
      expanded: false,
    }
  }

  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleExpanded}>
          {this.state.expanded ? (
            'Less'
          ) : (
            'More'
          )}
          <Caret expanded={this.state.expanded}>&#94;</Caret>
        </Button>
        {this.state.expanded && <p>{this.props.children}</p>}
      </div>
    );
  }
}

export default Description;
