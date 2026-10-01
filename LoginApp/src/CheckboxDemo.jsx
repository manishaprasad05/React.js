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
                setMsg(msg.filter((hobbie)=>hobbie!==value));
            }
        }
        return(
            <div>
            <h3>Select your hobbies:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" value="Cricket" onChange={handlehobbie}/>Cricket
                </label> <br/>
                <label>
                    <input type="checkbox" value="Football" onChange={handlehobbie}/>Football
                </label> <br/>
                <label>
                    <input type="checkbox" value="Hockey" onChange={handlehobbie}/>hockey
                </label> <br/>
                <button type="submit" >Ok</button>
            </form>
            <h3>
                Selected:
                {msg.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </h3>
            </div>
        );
}
export default CheckboxDemo;

