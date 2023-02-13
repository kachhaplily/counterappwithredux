import { createStore } from "redux";
import rootreducer from "../Reducer/rootreducer";

const store=createStore(rootreducer);
export default store;