// single component using useState hendler multiple input

import { useState } from "react";

const Register = () => {

    const [formInput, setFormInput] = useState({name: "",email: "",password: "",cPassword: ""});

    const handleRegister = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setFormInput({...formInput, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
        setFormInput({name: "",email: "",password: "",cPassword: ""});
        alert("Form Submitted Successfully");
    }
    
    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Name : </label>
                <input type="text" name="name" value={formInput.name} onChange={handleRegister} required/>
                <br />
                <br />
                <label htmlFor="">Email : </label>
                <input type="email" name="email" value={formInput.email} onChange={handleRegister} required/>
                <br />
                <br />
                <label htmlFor="">Password : </label>
                <input type="password" name="password" value={formInput.password} onChange={handleRegister} required/>
                <br />
                <br />
                <label htmlFor="">Confirm Password : </label>
                <input type="password" name="cPassword" value={formInput.cPassword} onChange={handleRegister} required/>
                <br />
                <br />
                <button type="submit">Register</button>
            </form>

        </>
    )
}

export default Register;