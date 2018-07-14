import React from "react";
import styled from "styled-components";
import { darken } from 'polished';

const style = () => {
  const styles = [];
  for (let i = 0; i < 9; i++) {
    const pos = i + 1;

    styles.push(`
      &:nth-of-type(${10 - pos}) {
        background-color: ${darken(`${pos / 20}`, 'lightblue')}
      }
    `);
  }

  return styles;
}

const Item = styled.div`
  border-radius: 2px;
  min-width: .4rem;
  min-height: .4rem;
  ${style()}
`;

const GridItem = () => (
  <Item />
)

export default GridItem;
