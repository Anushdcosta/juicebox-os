// src/components/TerminalWrapper.tsx
import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class TerminalWrapper extends Component {
  render() {
    return (
      <Draggable handle=".title-bar">
        <div className="absolute top-20 left-20 w-[500px] bg-black border border-gray-700 rounded shadow-lg text-sm">
          <div className="title-bar bg-gray-800 px-3 py-2 cursor-move text-white font-mono">
            Terminal
          </div>
          <div className="p-3 bg-black h-60 overflow-auto font-mono text-green-400">
            <p>Welcome to JuiceboxOS terminal.</p>
            <p className="opacity-50">[WASM kernel loaded]</p>
          </div>
        </div>
      </Draggable>
    );
  }
}
