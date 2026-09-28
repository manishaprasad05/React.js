import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LifeCycleDemo from './LifeCycleDemo.jsx'
import Counter from './Counter.jsx'
import Counter1 from './Counter1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCycleDemo />
    -----------------------------------
    -----------------------------------
    <Counter/>
    -----------------------------------
    -----------------------------------
    <Counter1/>
  </StrictMode>
)
