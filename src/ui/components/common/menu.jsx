import React from "react";
import * as menuActions from "../../actions/menu";
import { connect } from "redux-jetpack";
import { Link } from "react-router-dom";

function handleClick(item) {
  menuActions.select(item);
}

const Menu = ({ items }) => {
  return (
    <ul className="menu ">
      {items.map(
        i =>
          i.selected
            ? <li className="selected" onClick={() => handleClick(i.key)}>
                <Link to={i.key}>{i.text || i.key}</Link>
              </li>
            : <li onClick={() => handleClick(i.key)}>
                <Link to={i.key}>{i.text || i.key}</Link>
              </li>
      )}
    </ul>
  );
};

export default connect(Menu, state => state.menu);
