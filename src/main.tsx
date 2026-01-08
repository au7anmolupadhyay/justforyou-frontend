import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

import App from './app/App.tsx'

console.log("Gateway URL:", import.meta.env.VITE_API_GATEWAY_URL);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
