import React, { useState } from 'react';

interface BrowserProps {
  onClose: () => void;
}

const Browser: React.FC<BrowserProps> = ({ onClose }) => {
  const [url, setUrl] = useState<string>('https://www.google.com');

  const handleGo = () => {
    // Basic URL validation
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // Do nothing, URL is valid
    } else {
      // Prepend https:// if no protocol is specified
      setUrl('https://' + url);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#eee', padding: '5px', display: 'flex' }}>
        <input
          type="text"
          style={{ flexGrow: 1, marginRight: '5px' }}
          value={url}
          onChange={handleInputChange}
        />
        <button onClick={handleGo}>Go</button>
        <button onClick={onClose}>Close</button>
      </div>
      <iframe src={url} style={{ flexGrow: 1, border: 'none' }} />
    </div>
  );
};

export default Browser;
