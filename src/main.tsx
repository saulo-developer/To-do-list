import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx'; // Adjust path if necessary
import './global.css'; // Or './index.css' if that's your global style file

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);