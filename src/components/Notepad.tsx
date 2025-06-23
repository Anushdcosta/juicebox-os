import React, { useState, useEffect, type ChangeEvent } from 'react';

const Notepad: React.FC = () => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const savedText = localStorage.getItem('juicebox-notepad-text');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('juicebox-notepad-text', newText);
  };

  const handleClear = () => {
    setText('');
    localStorage.removeItem('juicebox-notepad-text');
  };

  const handleSaveFile = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'note.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',    
        width: '600px',     
        border: '1px solid #999',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.15)',
        backgroundColor: '#fff',
        color: '#000',
        userSelect: 'text',
      }}
    >
      {/* Menu Bar */}
      <div
        style={{
          backgroundColor: '#eee',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          width: '600px',
          gap: '20px',
          padding: '6px 12px',
          fontWeight: 'bold',
          fontSize: '14px',
          userSelect: 'none',
        }}
      >
        <div>File</div>
        <div>Edit</div>
        <div>Format</div>
        <div>View</div>
        <div>Help</div>
      </div>

      {/* Toolbar */}
      <div className='notepad'
        style={{
          backgroundColor: '#f5f5f5',
          width: '600px',
          borderBottom: '1px solid #ddd',
          padding: '6px 12px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <button
          onClick={handleClear}
          style={{
            padding: '4px 14px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '2px',
            backgroundColor: '#e1e1e1',
            fontSize: '13px',
            fontWeight: '600',
            color: '#000',
            boxShadow: 'inset 0 1px 0 #fff',
            userSelect: 'none',
          }}
          title="New (Clear Notepad)"
        >
          New
        </button>
        <button
          onClick={handleSaveFile}
          style={{
            padding: '4px 14px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '2px',
            backgroundColor: '#e1e1e1',
            fontSize: '13px',
            fontWeight: '600',
            color: '#000',
            boxShadow: 'inset 0 1px 0 #fff',
            userSelect: 'none',
          }}
          title="Save as text file"
        >
          Save
        </button>
      </div>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing here..."
        spellCheck={false}
        style={{
          flexGrow: 1,
          width: '100%',
          padding: '12px',
          border: 'none',
          resize: 'none',
          fontFamily: `'Consolas', 'Courier New', monospace`,
          fontSize: '14px',
          lineHeight: '1.4',
          outline: 'none',
          backgroundColor: '#fff',
          color: '#000',
          overflow: 'auto',
        }}
      />
    </div>
  );
  
};

export default Notepad;
