import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterRedu from './CounterRedu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterRedu>
      </CounterRedu>
  </StrictMode>,
)
