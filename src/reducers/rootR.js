import {combineReducers} from "redux";
import user from "./UserReducer";
import position from "./PositionReducer";

export default combineReducers({user, position});