import { RefObject, useState } from "react";

type WindowControlsProps = {
  onClose: () => void;
  windowRef: RefObject<HTMLDivElement | null>;
  onMinimize: () => void;
};


const WindowControls = ({ onClose, windowRef, onMinimize }: WindowControlsProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximise = () => {
    const el = windowRef.current;
    if (!el) return;

    setIsMaximized((prev) => {
      const next = !prev;

      el.classList.toggle("w-[500px]", !next);
      el.classList.toggle("w-screen", next);
      el.classList.toggle("h-96", !next);
      el.classList.toggle("h-screen", next);
      el.classList.toggle("top-20", !next);
      el.classList.toggle("top-0", next);
      el.classList.toggle("left-20", !next);
      el.classList.toggle("left-0", next);
      el.classList.toggle("fixed", next);
      el.classList.toggle("absolute", !next);

      if (next) {
        requestAnimationFrame(() => {
          el.style.top = "0px";
          el.style.left = "0px";
          el.style.transform = "none";
        });
      }

      return next;
    });
  };

  return (
    <div className="flex items-center space-x-2 px-3 py-2">
      {/* Close */}
      <div onClick={onClose} className="w-5 h-5 rounded-full bg-[#FF5F56] shadow-inner relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-0.5 bg-[#710000] rotate-45"></div>
          <div className="w-2 h-0.5 bg-[#710000] -rotate-45 absolute"></div>
        </div>
      </div>

      {/* Minimize */}
      <div onClick={onMinimize} className="w-5 h-5 rounded-full bg-[#FFBD2E] shadow-inner relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-0.5 bg-[#9A5518]"></div>
        </div>
      </div>

      {/* Maximize */}
      <div onClick={handleMaximise} className="w-5 h-5 rounded-full bg-[#27C93F] shadow-inner relative cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#006100] clip-tr"></div>
        </div>
      </div>
    </div>
  );
};

export default WindowControls;
