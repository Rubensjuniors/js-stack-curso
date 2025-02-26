import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import './assets/styles/index.css'
import './lib/sentryInit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
