// src/App.tsx
import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import Notepad from '../components/Notepad';

function App() {
  const [openApp, setOpenApp] = useState<'notepad' | 'calculator' | null>(null);

  return (
    <div className="desktop" style={{ 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#1e1e1e', 
      position: 'relative',
      padding: '20px',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* App Icons */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div
          onClick={() => setOpenApp('notepad')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src="https://img.icons8.com/fluency/48/notepad.png"
            alt="Notepad"
            style={{ width: '48px', height: '48px' }}
          />
          <span style={{ fontSize: '14px', marginTop: '6px' }}>Notepad</span>
        </div>

        <div
          onClick={() => setOpenApp('calculator')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src="https://img.icons8.com/fluency/48/calculator.png"
            alt="Calculator"
            style={{ width: '48px', height: '48px' }}
          />
          <span style={{ fontSize: '14px', marginTop: '6px' }}>Calculator</span>
        </div>
      </div>

      {/* Open App Window */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '50px',
        zIndex: 10,
      }}>
        {openApp === 'notepad' && (
          <div className="notepad">
            <Notepad />
          </div>
        )}
        {openApp === 'calculator' && (
          <div className="calculator">
            <Calculator />
          </div>
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="desktop">
  //     <Calculator/>
  //      <Notepad/>
  //   </div>
  // );
}


export default App;
