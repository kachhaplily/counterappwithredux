import incdecr from "./incdecr";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    counter:incdecr
})
export default rootreducer