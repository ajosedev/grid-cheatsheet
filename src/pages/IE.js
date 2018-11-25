import React from "react";

const IE = () => (
  <main>
    <p>The specs have more changes than are listed here, e.g. changes to values and syntax.</p>
    <p>IE10/IE11 requires explicit placement of all items, there is no auto placement (and also no <code>auto</code>-related declarations)</p>
    <table>
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
          <td>grid-area</td>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td>grid-gap</td>
          <td>-</td>
          <td>
            No gap properties exist
            Gap properties can be faked by using a different grid track in IE while explicitly
            placing items around the gaps
          </td>
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
          <td>align-self</td>
          <td>-ms-grid-column-align</td>
          <td>Now part of Box Alignment</td>
        </tr>
        <tr>
          <td>justify-self</td>
          <td>-ms-grid-row-align</td>
          <td>Now part of Box Alignment</td>
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
      </tbody>
    </table>
  </main>
)

export default IE;
