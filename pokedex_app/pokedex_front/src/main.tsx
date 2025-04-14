import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ContextGlobal } from './Context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextGlobal>
        <App />
      </ContextGlobal>
    </BrowserRouter>
  </StrictMode>,
);
