// single component using useState hendler multiple input

import { useState } from "react";

const Register = () => {

    const [formInput, setFormInput] = useState({name: "",email: "",password: "",cPassword: ""});
    const [error, setError] = useState({});

    const handleRegister = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setFormInput({...formInput, [e.target.name]: e.target.value});
    }

    const validation = () => {
        let error = {};
        if(!formInput.name){
            error.name = "Name is required";
        }
        if(!formInput.email){
            error.email = "Email is required";
        }
        if(!formInput.password){
            error.password = "Password is required";
        }
        if(!formInput.cPassword){
            error.cPassword = "Confirm Password is required";
        }
        if(formInput.password !== formInput.cPassword){
            error.cPassword = "Confirm Password does not match";
        }
        return error;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validation();
        setError(error);
        if(Object.keys(error).length === 0){
            console.log(formInput);
            setFormInput({name: "",email: "",password: "",cPassword: ""});
            alert("Form Submitted Successfully");
        }
    }
    
    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} >
                <label>Name : </label>
                <input type="text" name="name" value={formInput.name} onChange={handleRegister}/>
                {error.name && <p style={{color: "red"}}>{error.name}</p>}
                <br />
                <br />
                <label>Email : </label>
                <input type="email" name="email" value={formInput.email} onChange={handleRegister}/>
                {error.email && <p style={{color: "red"}}>{error.email}</p>}
                <br />
                <br />
                <label>Password : </label>
                <input type="password" name="password" value={formInput.password} onChange={handleRegister}/>
                {error.password ? <p style={{color: "red"}}>{error.password}</p> : ""}
                <br />
                <br />
                <label>Confirm Password : </label>
                <input type="password" name="cPassword" value={formInput.cPassword} onChange={handleRegister}/>
                {error.cPassword ? <p style={{color: "red"}}>{error.cPassword}</p> : ""}
                <br />
                <br />
                <button type="submit">Register</button>
            </form>

        </>
    )
}

export default Register;