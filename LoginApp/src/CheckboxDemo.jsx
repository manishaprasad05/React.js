//checkbox Example
import {useState} from 'react';
function CheckboxDemo()
{
    const [msg,setMsg]=useState([]);
    const handleSubmit=()=>
    {

    }
        const handlehobbie=(e)=>
        {
            const {value,checked}=e.target;
            if(checked)
            {
                setMsg([...msg,value]);
            }
            else
            {
                setMsg(msg.filter((item)=>item!==value));
            }
        }
        return(
            <>
            <h3>Select your hobbies:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" value="Cricket" onchange={handlehobbie}/>Cricket
                </label> <br/>
                <label>
                    <input type="checkbox" value="Football" onchange={handlehobbie}/>Football
                </label> <br/>
                <label>
                    <input type="checkbox" value="Hockey" onchange={handlehobbie}/>hockey
                </label> <br/>
                <button type="submit">Ok</button>
            </form>
            <h3>
                Selected:
                {msg.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </h3>
            </>
        );
}
export default CheckboxDemo;

