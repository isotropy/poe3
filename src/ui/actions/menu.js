import { updateState } from "redux-jetpack";

export async function select(item) {
  updateState("menu", state => ({
    ...state,
    items: state.items.map(i => ({ ...i, selected: i.key === item }))
  }));
}
