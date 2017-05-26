import React from "react";
import * as exploreActions from "../../actions/explore";

export default () => {
  const items = exploreActions.getLatest();
  return (
    <ul>
      {items.map(item => <li><ul>{item.lines.map(i => <li>{i}</li>)}</ul></li>)}
    </ul>
  );
};
