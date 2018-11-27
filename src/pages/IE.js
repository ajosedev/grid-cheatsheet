import React from "react";
import styled from 'styled-components';
import { lighten } from 'polished';
import { Header } from '../components/section';

const Table = styled.table`
  margin-top: 1rem;

  th {
    padding-bottom: 0.5rem;
    font-weight: bold;
  }
  tr:nth-of-type(even) {
    background-color: ${props => lighten(0.6, props.theme.four)};
  }
  td {
    padding: 0.25rem 0.5rem;
  }
`;

const IE = () => (
  <main>
    <Header>IE10/IE11</Header>
    <p>The specs have more changes than are listed here, e.g. changes to values and syntax.</p>
    <p>IE10/IE11 requires explicit placement of all items, there is no auto placement (and also no <code>auto</code>-related declarations)</p>
    <Table>
      <thead>
        <tr>
          <th>CSS Grid Level 1</th>
          <th>IE10/IE11</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>grid-template-columns</td>
          <td>-ms-grid-columns</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-template-rows</td>
          <td>-ms-grid-rows</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-template-areas</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-row</td>
          <td>-</td>
          <td>See <code>-ms-grid-row</code> and <code>-ms-grid-row-span</code></td>
        </tr>
        <tr>
          <td>grid-column</td>
          <td>-</td>
          <td>See <code>-ms-grid-column</code> and <code>-ms-grid-column-span</code></td>
        </tr>
        <tr>
          <td>grid-row-start</td>
          <td>-ms-grid-row</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-column-start</td>
          <td>-ms-grid-column</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-row-end</td>
          <td>-</td>
          <td>Defined by the -ms-grid-row-span property</td>
        </tr>
        <tr>
          <td>grid-column-end</td>
          <td>-</td>
          <td>Defined by the -ms-grid-column-span property</td>
        </tr>
        <tr>
          <td>-</td>
          <td>-ms-grid-column-span</td>
          <td>Used as cannot span with <code>grid-column</code> or <code></code></td>
        </tr>
        <tr>
          <td>-</td>
          <td>-ms-grid-row-span</td>
          <td>Used as cannot span with <code>grid-column</code> or <code></code></td>
        </tr>
        <tr>
          <td>grid-area</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-gap</td>
          <td>-</td>
          <td>
            No gap properties exist
            <br />
            Can be emulated by using a different grid track and placing items around the gaps
          </td>
        </tr>
        <tr>
          <td>grid-auto-columns</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-auto-rows</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-auto-flow</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>align-self</td>
          <td>-ms-grid-column-align</td>
          <td></td>
        </tr>
        <tr>
          <td>justify-self</td>
          <td>-ms-grid-row-align</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  </main>
)

export default IE;
