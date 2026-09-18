import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from './Car.jsx'
import Carinfo from './Carinfo.jsx'
//array year
let x=[2021,2022,2023];
//array object
let carinfo={name:"Thar",color:"Black"};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Carinfo carinfo={carinfo}>
    This Is My Car 
    </Carinfo>

    <Car color="White" name="BMW" brand="Tata" year={x}/>

  </StrictMode>,
)
