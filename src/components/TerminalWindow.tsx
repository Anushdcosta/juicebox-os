import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import createJuiceboxModule from "../wasm/juicebox.mjs";
import WindowControls from "./WindowControls";

type TerminalWindowProps = {
  onClose: () => void;
};

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const juiceboxModuleRef = useRef<any>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [log, setLog] = useState<string[]>(["Welcome to JuiceboxOS terminal"]);
  const [command, setCommand] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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
    setLog((prev) => [...prev, output || "(no output)"]);
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
      ref={windowRef}
      drag={!isMaximized}
      dragConstraints={{ left: -80, top: -80, right: 1200, bottom: 600 }}
      dragElastic={false}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2 }}
      className="mainwin absolute top-20 left-20 w-[500px] h-96 bg-black border border-gray-700 rounded shadow-lg"
    >
      <div className="flex bg-gray-800 px-3 py-2 text-white font-mono cursor-move" style={{ userSelect: "none" }}>
        <WindowControls onClose={onClose} onMinimize={() => setIsMinimized(true)} windowRef={windowRef}/>

        <p className="ml-2">Terminal</p>
      </div>
      <div className="p-3 h-full overflow-auto font-mono text-green-400 text-sm">
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
