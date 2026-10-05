import { useState } from 'react'
import './App.css'
import Button from './Button'
//3)Higher-Order Component(HOC)
function withBorder(Wrappedcomponent)
{
  return function newComponent(props)
  {
    return(
      <div style={{border:'10px solid yellow'}}>
        <Wrappedcomponent{...props}/>
          </div>
    );
  };
}
function Greeting(props)
{
  return(
    <h1>Welcome..{props.name}</h1>
  );
}
function App() {
  const GreetingWithBorder=withBorder(Greeting);
  return (
   <div>
   <Greeting name="MCA"/>
   <GreetingWithBorder name="Manisha"/>
     -----------------
   
    </div>
  )
}

export default App
