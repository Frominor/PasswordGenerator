import React from "react";
import "./PasswordGeneratorBox.scss";
import tablet from "./tablet.png";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../CheckBox/CheckBox";
export default function PaswordGeneratorBox({}) {
  const State = useSelector((state) => state.PasswordReducer);
  console.log(State);
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
    let num = 0;
    let password = [];
    while (num < State.Num) {
      let randomnum = Math.trunc(Math.random() * 100);
      if (randomnum <= 5) {
        num++;
        password.push(nums[randomnum]);
      } else if (randomnum <= 12) {
        if (!State?.Arr?.includes("symbols")) {
          num++;
          password.push(Symbols[randomnum]);
        }
      } else if (randomnum <= 24) {
        if (State?.Arr?.includes("uppercase")) {
          password.push(arr_en[randomnum]);
          num++;
        } else if (State?.Arr?.includes("lowercase")) {
          num++;
          password.push(arr_en[randomnum].toUpperCase());
        } else if (true) {
          let RandomCase = Math.floor(Math.random() * 100);
          if (RandomCase >= 50) {
            num++;
            password.push(arr_en[randomnum].toUpperCase());
          } else {
            num++;
            password.push(arr_en[randomnum]);
          }
        }
      }
    }

    dispatch({ type: "GET_PASSWORD", payload: password.join("") });
    return password;
  }

  return (
    <div className="PasswordGeneratorBox">
      <div className="Title">
        <h1>Password Genetator</h1>
      </div>
      <div className="PasswordInp">
        <input
          value={State.Password}
          onChange={(e) => {
            dispatch({ type: "GET_PASSWORD", payload: e.target.value });
          }}
        ></input>
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
        <CheckBox
          name={"lowercase"}
          text={"include lowercase"}
          State={State}
        ></CheckBox>
        <CheckBox
          name={"uppercase"}
          text={"include uppercase"}
          State={State}
        ></CheckBox>
        <CheckBox name={"symbols"} text={"include symbols"}></CheckBox>
      </div>
      <div className="GetPassword">
        <button onClick={GetRandomPassword}>Generate password</button>
      </div>
    </div>
  );
}
