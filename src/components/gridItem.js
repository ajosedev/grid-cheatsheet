import React from "react";
import styled from "styled-components";
import { darken } from 'polished';

const style = () => {
  const styles = [];
  for (let i = 0; i < 9; i++) {
    const pos = i + 1;

    styles.push(`
      &:nth-of-type(${pos}) {
        background-color: ${darken(`${pos / 50}`, 'red')}
      }
    `);
  }

  return styles;
}

const Item = styled.div`
  border-radius: 2px;
  ${style()}
`;

const GridItem = () => (
  <Item />
)

export default GridItem;
