const WindowControls = () => {
  return (
    <div className="flex items-center space-x-2 px-3 py-2">
      {/* Close */}
      <div className="w-5 h-5 rounded-full bg-[#FF5F56] shadow-inner relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-0.5 bg-[#710000] rotate-45"></div>
          <div className="w-2 h-0.5 bg-[#710000] -rotate-45 absolute"></div>
        </div>
      </div>

      {/* Minimize */}
      <div className="w-5 h-5 rounded-full bg-[#FFBD2E] shadow-inner relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-0.5 bg-[#9A5518]"></div>
        </div>
      </div>

      {/* Maximize */}
      <div className="w-5 h-5 rounded-full bg-[#27C93F] shadow-inner relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#006100] clip-tr"></div>
        </div>
      </div>
    </div>
  );
};


export default WindowControls;
