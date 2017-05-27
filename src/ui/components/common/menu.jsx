import React from "react";
import * as menuActions from "../../actions/menu";
import { connect } from "redux-jetpack";

function handleClick(item) {
  menuActions.select(item);
}

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map(
        i =>
          i.selected
            ? <li className="selected" click={() => handleClick(i.key)}>{i.text || i.key}</li>
            : <li click={() => handleClick(i.key)}>{i.text || i.key}</li>
      )}
    </ul>
  );
};

export default connect(Menu, state => state.menu);
