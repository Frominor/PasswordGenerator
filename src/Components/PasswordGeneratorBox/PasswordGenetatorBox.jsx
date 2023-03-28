import React from "react";
import "./PasswordGeneratorBox.scss";
import tablet from "./article.png";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../CheckBox/CheckBox";
export default function PaswordGeneratorBox({}) {
  const State = useSelector((state) => state.PasswordReducer);
  const dispatch = useDispatch();
  const Symbols = ["-", "_", "!", "@", "#", "$", "%", "&", "*", "№", "?", ":"];
  const arr_en = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function GetRandomPassword() {
    let ValuesForPassword = {
      nums,
      Symbols,
      arr_en,
    };
    dispatch({ type: "GET_PASSWORD", payload: ValuesForPassword });
  }
  return (
    <div className="PasswordGeneratorBox">
      <div className="Title">
        <h1>Password Genetator</h1>
      </div>
      <div className="PasswordInp">
        <input></input>
        <img src={tablet}></img>
      </div>
      <div className="Options">
        <div className="PSLength InpBox">
          <p>Password length</p>
          <input
            type={"number"}
            value={State.Num}
            onChange={(e) => {
              if (e.target.value < 0) {
                dispatch({ type: "CHANGE_NUM", payload: 0 });
              } else {
                dispatch({ type: "CHANGE_NUM", payload: e.target.value });
              }
            }}
          ></input>
        </div>
        <CheckBox name={"lowercase"} text={"include lowercase"}></CheckBox>

        <CheckBox name={"uppercase"} text={"include uppercase"}></CheckBox>
        <CheckBox name={"symbols"} text={"include symbols"}></CheckBox>
      </div>
      <div className="GetPassword">
        <button onClick={GetRandomPassword}>Generate password</button>
      </div>
    </div>
  );
}
