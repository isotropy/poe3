import React from "react";
import * as menuActions from "../../actions/menu";
import { connect } from "redux-jetpack";
import { Link } from "react-router-dom";

function handleClick(item) {
  menuActions.select(item);
}

const Menu = ({ ...state }) => {
  return (
    state.auth.loggedIn &&
    <ul className="menu ">
      {state.menu.items.map(
        i =>
          i.selected
            ? <li className="selected" onClick={() => handleClick(i.key)}>
                <Link to={`/${i.key}`}>{i.text || i.key}</Link>
              </li>
            : <li onClick={() => handleClick(i.key)}>
                <Link to={`/${i.key}`}>{i.text || i.key}</Link>
              </li>
      )}
    </ul>
  );
  return <div></div>;
};

export default connect(Menu, state => state);
