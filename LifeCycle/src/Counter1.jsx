//UseState and UseEffect 
//Output see in console
import {useState,useEffect} from 'react';
function Counter1()
{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Count Value: ${count}`);
    },[count] );

    return(
        <div><p>You clicked {count} times.</p>
        <button onClick={()=>setCount(count+1)}>
            Click Here...</button>
            </div>
        );
}
export default Counter1;
