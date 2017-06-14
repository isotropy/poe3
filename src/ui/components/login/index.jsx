import React, { Component } from "react";
import * as loginActions from "../../actions/login";

export default () => {
  let service = "";
  let username = "";
  let login = false;
  const handleService = e => {
    service = e.target.innerText;
  };
  const handleUsername = e => {
    username = e.target.value;
  };
  const handleLogin = e => {
    if (e.target.innerText === "Success") login = true;
    else login = false;
    loginActions.login(login);
  };
  return (
    <div>
      <div>
        Choose login service provider:
        <div onClick={handleService}>Google</div>
        <div onClick={handleService}>Twitter</div>
        <div onClick={handleService}>Facebook</div>
      </div>
      <div>
        Username:
        <input type="text" onChange={handleUsername} />
      </div>
      <div>
        You also get to choose if your login was a success! How convenient!
        <div onClick={handleLogin}>Success</div>
        <div onClick={handleLogin}>Failure</div>
      </div>
    </div>
  );
};
