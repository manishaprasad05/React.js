import {useState} from 'react'
function LoginApp()
{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [massage,setMessage]=useState("");

    const handleLogin=(e)=>
    {
        //check
        e.preventDefault();
        if(username==="admin" && password==="123")
        {
            setMessage("Login Successful..");
        }
        else
        {
            setMessage("Invalid! Username or Password");
        }
    }
        return(
            <div>
                <h1>Login Application</h1>

                <form onSubmit={handleLogin}>
                    <label>Enter Username: </label>
                    <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} ></input>
                    
                    <label>Enter Password: </label>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    
                    <button type="submit">Login</button>
                </form>
                <h2>{massage}</h2>
            </div>
        ) 
    }

export default LoginApp;