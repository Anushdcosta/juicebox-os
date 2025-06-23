import { useState } from "react";
import TerminalWindow from "./TerminalWindow";

export default function Desktop() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  const handleAppOpen = (appName: string) => {
    setOpenApp(appName);
  };

  return (
    <div className="desktopScreen w-screen h-screen bg-gradient-to-br from-slate-800 to-gray-900 relative text-white overflow-hidden ">
      <div className="ml-auto mr-auto mb-[20px] absolute inset-x-0 bottom-0 backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 text-white text-4xl w-[600px] h-[100px] flex items-center justify-around">
        <a onClick={() => handleAppOpen('terminal')} className="cursor-[default] hover:scale-110 transition-transform background-[none]">
          🖥️
        </a>
      </div>
      {openApp === 'terminal' && <TerminalWindow />}
    </div>
  );
}