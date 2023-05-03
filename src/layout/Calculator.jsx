import { useState } from "react";
import Screen from "../components/Screen";

const Calculator = () => {
  const [math, setMath] = useState("");
  const [answer, setAnswer] = useState("");

  const calc = (value) => {
    let ques = math;
    let ans = "";

    switch (value) {
      case "=": {
        if (ques !== "") {
          try {
            ans = eval(math);
          } catch (err) {
            setAnswer("Err");
          }

          if (ans) {
            setMath("");
            setAnswer(ans);
          } else {
            setAnswer("Err");
          }
          break;
        }
      }

      case "ac": {
        setMath("");
        setAnswer("");
        break;
      }

      case "ce": {
        let str = math;
        str = str.substr(0, str.length - 1);
        setMath(str);
        break;
      }

      default: {
        setMath((ques += value));
        break;
      }
    }
  };

  return (
    <div className="frame">
      <div className="main">
        <Screen math={math} answer={answer} />
        <div>
          <div className="row">
            <input
              type="button"
              value={"ac"}
              onClick={() => {
                calc("ac");
              }}
            />
            <input
              type="button"
              value={"ce"}
              onClick={() => {
                calc("ce");
              }}
            />
            <input
              type="button"
              value={"/"}
              onClick={() => {
                calc("/");
              }}
            />
            <input
              type="button"
              value={"*"}
              onClick={() => {
                calc("*");
              }}
            />
          </div>
          <div className="row">
            <input
              type="button"
              value={"7"}
              onClick={() => {
                calc("7");
              }}
            />
            <input
              type="button"
              value={"8"}
              onClick={() => {
                calc("8");
              }}
            />
            <input
              type="button"
              value={"9"}
              onClick={() => {
                calc("9");
              }}
            />
            <input
              type="button"
              value={"-"}
              onClick={() => {
                calc("-");
              }}
            />
          </div>
          <div className="row">
            <input
              type="button"
              value={"4"}
              onClick={() => {
                calc("4");
              }}
            />
            <input
              type="button"
              value={"5"}
              onClick={() => {
                calc("5");
              }}
            />
            <input
              type="button"
              value={"6"}
              onClick={() => {
                calc("6");
              }}
            />
            <input
              type="button"
              value={"+"}
              onClick={() => {
                calc("+");
              }}
            />
          </div>
          <div className="row">
            <input
              type="button"
              value={"1"}
              onClick={() => {
                calc("1");
              }}
            />
            <input
              type="button"
              value={"2"}
              onClick={() => {
                calc("2");
              }}
            />
            <input
              type="button"
              value={"3"}
              onClick={() => {
                calc("3");
              }}
            />
          </div>
          <div className="row">
            <input
              type="button"
              value={"0"}
              onClick={() => {
                calc("0");
              }}
            />
            <input
              type="button"
              value={"."}
              onClick={() => {
                calc(".");
              }}
            />
            <input
              type="button"
              className="yellow"
              value={"="}
              onClick={() => {
                calc("=");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
