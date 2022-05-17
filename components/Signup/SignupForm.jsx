import Router from "next/router";
import { useState,useEffect } from "react";

function SignUpForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");
    const [loading,setLoading] = useState(false);


    async function postUser(){
        setLoading(true);
        const response = await fetch("/api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,password,confirmPassword})
        });
        const data = await response.json();
        if(data.error){
            setError(data.error);
            setLoading(false);
        }else{
            setSuccess(data.message);
            setLoading(false);
            alert("Successfully registered");
            Router.push("/");
        }
    }

    useEffect(()=>{
        if(success){
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }
    ,[success]);

    function handleSubmit(e){
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords do not match");
        }else{
            postUser();
            }

        }



    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    {loading && <div className="alert alert-info">Loading...</div>}
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;

   