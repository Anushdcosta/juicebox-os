import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css';


// ✅ Import from local source (not public/)
import createJuiceboxModule from '../wasm/juicebox.mjs';

(async () => {
  const Module = await createJuiceboxModule();
  const hello = Module.cwrap('hello', 'string', []);
  const result = hello();
  document.getElementById('wasm-output')!.textContent = result;
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);