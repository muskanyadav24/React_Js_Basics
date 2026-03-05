import { useState } from "react";
import "./Controlle.css";

const Controll = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
    
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleGenderChange = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
    }

    const handleAddressChange = (e) => {
        console.log(e.target.value);
        setAddress(e.target.value);
    }

    const handleCountryChange = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
    }

    const handleMessageChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name : ", name);
        console.log("Email : ", email);
        console.log("Password : ", password);
        console.log("Gender : ", gender);
        console.log("Country : ", country);
        console.log("Address : ", address);
        console.log("Message : ", message);

        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setCountry("");
        setAddress("");
        setMessage("");

        alert("Form Submitted Successfully");
    }

    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <div className="card">
                <h2 style={{color:"red"}}>Controll Component </h2>

            <form onSubmit={handleSubmit}>
                <div className="col-6">
                    <label >Name : </label>
                    <input type="text" value={name} onChange={handleNameChange} required/>
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Email : </label>
                    <input type="email" value={email} onChange={handleEmailChange} required/>
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Password : </label>
                    <input type="password" value={password} onChange={handlePasswordChange} required/>
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Gender : </label>
                    <input type="radio" name="gender" value="male" onChange={handleGenderChange} />Male
                    <input type="radio" name="gender" value="female" onChange={handleGenderChange} />Female
                    <input type="radio" name="gender" value="other" onChange={handleGenderChange} />Other
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Country : </label>
                    <select name="country" value={country} onChange={handleCountryChange}>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                    </select>
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Address : </label>
                    <textarea name="address" value={address} onChange={handleAddressChange}></textarea>
                </div>
                <br /><br />

                <div className="col-6">
                    <label >Message : </label>
                    <textarea name="message" value={message} onChange={handleMessageChange}></textarea>
                </div>
                <br /><br />

                <div className="col-6">
                    <button type="submit">Submit</button>
                </div>
                <br /><br />
            </form>
            </div>
        </div>
    );
}

export default Controll;
