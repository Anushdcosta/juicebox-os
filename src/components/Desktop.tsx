import { useState } from "react";
import TerminalWindow from "./TerminalWindow";
import Calculator from '../components/Calculator';
import Notepad from '../components/Notepad';
import Browser from './browser';

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
        <a onClick={() => handleAppOpen('notepad')} className="cursor-[default] hover:scale-110 transition-transform background-[none]">
          <img
            src="https://img.icons8.com/fluency/48/notepad.png"
            alt="Notepad"
            style={{ width: '48px', height: '48px' }}
          />
        </a>
        <a onClick={() => handleAppOpen('calculator')} className="cursor-[default] hover:scale-110 transition-transform background-[none]">
          <img
            src="https://img.icons8.com/fluency/48/calculator.png"
            alt="Calculator"
            style={{ width: '48px', height: '48px' }}
          />
        </a>
        <a onClick={() => handleAppOpen('browser')} className="cursor-[default] hover:scale-110 transition-transform background-[none]">
          <img
            src="https://img.icons8.com/fluency/48/chrome.png"
            alt="Browser"
            style={{ width: '48px', height: '48px' }}
          />
        </a>
      </div>
        {openApp === 'terminal' && <TerminalWindow />}
        {openApp === 'notepad' && <Notepad />}
        {openApp === 'calculator' && <Calculator />}
        {openApp === 'browser' && <Browser onClose={() => setOpenApp(null)} />}
    </div>
  );
}
