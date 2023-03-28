import React from "react";
import { useDispatch } from "react-redux";
export default function CheckBox({ name, text }) {
  const dispatch = useDispatch();
  return (
    <div className="InpBox">
      <p>{text}</p>
      <input
        type={"checkbox"}
        name={name}
        onChange={(e) => {
          if (e.target.checked) {
            dispatch({ type: "ADD_PROPERTIES", payload: e.target.name });
          } else {
            dispatch({ type: "DELETE_PROPERTIES", payload: e.target.name });
          }
        }}
      ></input>
    </div>
  );
}
