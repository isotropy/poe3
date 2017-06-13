import { updateState } from "redux-jetpack";

export async function login(isAuthenticated) {
  updateState("auth", state => ({
    loggedIn: isAuthenticated
  }));
}
