// src/components/Calculator.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import WindowControls from "./WindowControls"; // Make sure this file exists

export default function Calculator() {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    if (/\d/.test(key) || ["+", "-", "*", "/"].includes(key)) {
      setInput((prev) => prev + key);
    } else if (key === "Enter") {
      try {
        const result = eval(input); // 🧠 only for demo use — in real projects use a parser
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, top: -100, right: 1200, bottom: 700 }}
      dragElastic={false}
      dragMomentum={false}
      className="absolute top-24 left-24 w-[300px] bg-black border border-gray-700 rounded shadow-lg"
    >
      {/* Header */}
      <div className="flex bg-gray-800 px-3 py-2 text-white font-mono justify-between items-center">
        <WindowControls />
        <p>Calculator</p>
      </div>

      {/* Display */}
      <div className="p-3 font-mono text-green-400 text-right text-lg">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-black outline-none border-none text-green-400 font-mono text-right"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2 p-3">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(btn)}
            className="bg-gray-700 hover:bg-gray-600 text-black p-2 rounded"
          >
            {btn}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
