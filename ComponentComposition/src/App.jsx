import { useState } from 'react'
import './App.css'
import Button from './Button'
//3)Higher-Order Component(HOC)

function App() {
  
  return (
   <>
     -----------------
    <Button text="Submit" color="blue" onClick={()=>alert("submit button clicked..")}/>
    <Button text="Ok" color="green" onClick={()=>alert("ok button clicked..")}/>
    <Button text="Cancle" color="red" onClick={()=>alert("cancle button clicked..")}/>
    </>
  )
}

export default App
