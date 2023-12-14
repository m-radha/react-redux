import reducerFunc from "./reducer";
import { createStore } from "redux";

const store = createStore(reducerFunc);
export default store;