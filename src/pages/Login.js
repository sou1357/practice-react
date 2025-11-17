import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const [msg,setMsg]=useState("Hello,Hi...")
    
    // useEffect(()=>   // 1) never run for any state variable(dependency) but only run when component render 1st time
    // {
    //     console.log("useEffect run...")
    // },[])

//     useEffect(()=>   // 2) run for mentioned state variable(dependency) any run when component render 1st time
//     {
//  console.log("useEffect run...")
//     },[email,password])

//     useEffect(()=>   // 3) run for all state variable(dependency) any run when component render 1st time
//     {
// console.log("useEffect run...")
//     },)

    function handleSubmit(event)
    {
        event.preventDefault()

        if(email==="abc@gmail.com" && password==="Abc@123")
        {
            navigate("/dashboard",{state:{email}})
        }
        else{
            alert("Invalid email/password...")
        }
    }

    return(<div className="alert alert-primary w-25 mx-auto">
        <h1>{msg}</h1>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="mb-3">
                <label className="form-label">Email ID</label>
                <input type="email" value={email} onChange={
                function(event)
                {
                    setEmail(event.target.value)
                }
            } 
                className="form-control"  aria-describedby="emailHelp" required/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"
                value={password} onChange={(event)=>setPassword(event.target.value)} 
                pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$_+ ]).{6,}" 
                required />
            </div>

            <input onChange={e=>setMsg(e.target.value)}/>
  
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>)
}