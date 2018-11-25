import React from 'react';
import styled from 'styled-components';
import GridContainer from './gridContainer';

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.one};
  font-family: monospace;
  display: inline-block;
`;

const InlineGridContainer = styled(GridContainer)`
  display: inline-grid;
  vertical-align: top;
  margin-left: 1rem;
`;

const Header = () => (
  <header>
    {/* TODO - style this */}
    <HeaderText>display: grid;</HeaderText>
    <InlineGridContainer />
    <p><strong>Align</strong> = block axis</p>
    <p><strong>Justify</strong> = inline/row axis</p>
    <p>Rows <sub>x</sub> columns for shorthand declarations</p>
  </header>
);

export default Header;
