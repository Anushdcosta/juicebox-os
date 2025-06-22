// src/components/Calculator.tsx
// @ts-ignore
import loadWasm from "../wasm/juicebox.mjs";
import { useEffect, useState } from "react";
import "../styles/calculator.css";

export default function Calculator() {
  const [Module, setModule] = useState<any>(null);
  const [input, setInput] = useState("");
  const [operand, setOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    loadWasm().then(setModule);
  }, []);

  const handleNumber = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleOperator = (op: string) => {
    if (!input) return;
    setOperand(parseInt(input));
    setOperator(op);
    setInput("");
  };

  const calculate = () => {
    if (!Module || operand === null || !operator || !input) return;

    const a = operand;
    const b = parseInt(input);
    let opFunc;

    switch (operator) {
      case "+": opFunc = Module.cwrap("add", "number", ["number", "number"]); break;
      case "-": opFunc = Module.cwrap("subtract", "number", ["number", "number"]); break;
      case "x": opFunc = Module.cwrap("multiply", "number", ["number", "number"]); break;
      case "÷": opFunc = Module.cwrap("divide", "number", ["number", "number"]); break;
    }

    const res = opFunc(a, b);
    setResult(res.toString());
    setInput("");
    setOperator(null);
    setOperand(null);
  };

  const clear = () => {
    setInput("");
    setOperator(null);
    setOperand(null);
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || result || "0"}
      </div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("÷")}>÷</button>
        <button onClick={() => handleOperator("x")}>x</button>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button className="equal" onClick={calculate}>=</button>
        <button className="zero" onClick={() => handleNumber("0")}>0</button>
      </div>
    </div>
  );
}
