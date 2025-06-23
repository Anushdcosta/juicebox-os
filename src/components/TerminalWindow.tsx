import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import createJuiceboxModule from "../wasm/juicebox.mjs";
import WindowControls from "./WindowControls";

export default function TerminalWindow() {
  const inputRef = useRef<HTMLInputElement>(null);
  const juiceboxModuleRef = useRef<any>(null);
  const [log, setLog] = useState<string[]>(["Welcome to JuiceboxOS terminal"]);
  const [command, setCommand] = useState("");

  useEffect(() => {
    inputRef.current?.focus();

    const initWasm = async () => {
      const module = await createJuiceboxModule();
      juiceboxModuleRef.current = module;
    };

    initWasm();
  }, []);

  const executeCommand = (input: string) => {
    const module = juiceboxModuleRef.current;
    if (!module) return;

    const output = module.ccall("handle_command", "string", ["string"], [input]);

    if (output === "") {
      setLog([]);
    } else {
      setLog((prev) => [...prev, output]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && command.trim()) {
      const enteredCommand = command.trim();
      setLog((prev) => [...prev, `> ${enteredCommand}`]);
      setCommand("");
      executeCommand(enteredCommand);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -80, top: -80, right: 1200, bottom: 600 }}
      dragElastic={false}
      dragMomentum={false}
      className="absolute top-20 left-20 w-[500px] bg-black border border-gray-700 rounded shadow-lg"
    >
      <div className="flex bg-gray-800 px-3 py-2 text-white font-mono">
        <WindowControls />
        <p>Terminal</p>
      </div>
      <div className="p-3 h-60 overflow-auto font-mono text-green-400 text-sm">
        {log.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <div className="flex">
          <span className="mr-1">&gt;</span>
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-black outline-none border-none w-full text-green-400 font-mono"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
