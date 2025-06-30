import { useState } from "react";
import TerminalWindow from "./TerminalWindow";
import Calculator from "../components/Calculator";
import Notepad from "../components/Notepad";
import Browser from "./Browser";
import { AnimatePresence, motion } from "framer-motion";

export default function Desktop() {
  type WindowData = { id: number; app: string; x: number; y: number };
  const [windows, setWindows] = useState<WindowData[]>([]);
  const clampOffset = (value: number, max: number) => {
    return Math.min(value, max);
  };

  const openApps = new Set(windows.map((w) => w.app));

  const openApp = (app: string) => {
    const id = Date.now();
    const offset = windows.length * 30;

    const maxX = window.innerWidth - 520; // 500px window + margin
    const maxY = window.innerHeight - 340; // 300px height + margin

    const x = clampOffset(100 + offset, maxX);
    const y = clampOffset(100 + offset, maxY);

    const jitter = Math.random() * 10;

    setWindows((prev) => [...prev, { id, app, x: x + jitter, y: y + jitter }]);
  };



  const closeApp = (id: number) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div className="desktopScreen w-screen h-screen bg-gradient-to-br from-slate-800 to-gray-900 relative text-white overflow-hidden">
      {/* App windows */}
      <AnimatePresence>
        {windows.map(({ id, app, x, y }) => {
          const animationProps = {
            key: id,
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.85 },
            transition: { duration: 0.2 },
            style: { top: y, left: x, position: "absolute" as const },
          };

          switch (app) {
            case "terminal":
              return (
                <motion.div {...animationProps}>
                  <TerminalWindow onClose={() => closeApp(id)}/>
                </motion.div>
              );
            case "notepad":
              return (
                <motion.div {...animationProps}>
                  <Notepad />
                </motion.div>
              );
            case "calculator":
              return (
                <motion.div {...animationProps}>
                  <Calculator />
                </motion.div>
              );
            case "browser":
              return (
                <motion.div {...animationProps}>
                  <Browser onClose={() => closeApp(id)} />
                </motion.div>
              );
            default:
              return null;
          }
        })}

      </AnimatePresence>

      {/* Dock */}
      <div className="ml-auto mr-auto mb-[20px] absolute inset-x-0 bottom-0 backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 text-white text-4xl w-[600px] h-[100px] flex items-center justify-around z-50">
        {[
          { app: "terminal", icon: "🖥️" },
          { app: "notepad", icon: "https://img.icons8.com/fluency/48/notepad.png" },
          { app: "calculator", icon: "https://img.icons8.com/fluency/48/calculator.png" },
          { app: "browser", icon: "https://img.icons8.com/fluency/48/chrome.png" },
        ].map(({ app, icon }) => (
          <div key={app} className="relative flex flex-col items-center">
            <a
              onClick={() => openApp(app)}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              {icon.startsWith("http") ? (
                <img src={icon} alt={app} className="w-8 h-8" />
              ) : (
                <span>{icon}</span>
              )}
            </a>
            {openApps.has(app) && (
              <div className="w-full flex justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-white/90 shadow-md" />
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
