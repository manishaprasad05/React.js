
import { createContext, useState, useContext } from 'react'
import './App.css'

const mycontext =createContext();

function Comp1()
{
      const {setData} = useContext(mycontext);
    return (
      <button onClick={()=>setData("hello! context API")}> Set Data </button>
    );
}

function Comp2()
{
  const {data} = useContext(mycontext);
    return (
      <div>
      <p> {data} </p>
      </div>
    );
}
function App() 
{
 
  const [data,setData] =useState("MCA");
  return (
    <>
    <h2><u>Context API</u></h2>
      <mycontext.Provider value ={{data,setData}}>
      <Comp1> </Comp1>
      <Comp2></Comp2>
      </mycontext.Provider>
    </>
  )
}
export default App
