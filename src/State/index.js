import { createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import { PasswordReducer } from "./PasswordReducer";
export const rootReducer = combineReducers({
  PasswordReducer,
});
export const store = createStore(rootReducer, applyMiddleware());
