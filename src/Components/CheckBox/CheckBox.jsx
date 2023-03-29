import React from "react";
import { useDispatch } from "react-redux";
import "./CheckBox.scss";
export default function CheckBox({ name, text, State }) {
  const dispatch = useDispatch();
  return (
    <div className="InpBox">
      <p>{text}</p>
      <input
        type={"checkbox"}
        name={name}
        checked={State?.Arr?.includes(name)}
        onChange={(e) => {
          if (e.target.checked) {
            if (e.target.name == "uppercase") {
              dispatch({ type: "ADD_PROPERTIES", payload: e.target.name });
              dispatch({ type: "DELETE_PROPERTIES", payload: "lowercase" });
            } else if (e.target.name == "lowercase") {
              dispatch({ type: "ADD_PROPERTIES", payload: e.target.name });
              dispatch({ type: "DELETE_PROPERTIES", payload: "uppercase" });
            } else {
              dispatch({ type: "ADD_PROPERTIES", payload: e.target.name });
            }
          } else {
            dispatch({ type: "DELETE_PROPERTIES", payload: e.target.name });
          }
        }}
      ></input>
    </div>
  );
}
