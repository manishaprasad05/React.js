import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import LoginApp from './LoginApp.jsx'
import CheckboxDemo from './CheckboxDemo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginApp/>
    --------------------------------
    <CheckboxDemo/>
  </StrictMode>,
)
