//UseState Hook

import {useState} from 'react';
function Counter()
{
    const[count,setCount]=useState(0);
    const CounterClick=()=>
    {
        setCount(count+1);
    }
    return(
        <div><p>You clicked {count} times.</p>
        <button onClick={CounterClick}>
            Click Here</button>
            </div>
        );
}
export default Counter;