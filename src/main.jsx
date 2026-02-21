import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/next"
import * as Three from 'three'
import "./index.css";
import App from './App.jsx'
import { Meteors } from './components/ui/shadcn-io/meteors/Meteors.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
