import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef= useRef(null);

  return (
    <div>
      <h2>Use Ref() Hook</h2><br/>
  <input type="text" ref={inputRef} defaultValue="MCA"/>
  <button onClick={()=>inputRef.current.focus()}>Focus</button>
      </div>
  )
}

export default App
