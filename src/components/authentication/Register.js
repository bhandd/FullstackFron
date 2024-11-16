import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function RegisterApp(){



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [social_number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function Register(newUser) {
        console.log('Creating new patient:', newUser);
        axios.post('http://localhost:8080/register', newUser)
            .then(response => onSuccess(response))
            .catch(error => onError(error))
            .finally(() => console.log('Finished creating patient'));
    }

const handleSubmit = (event) => {
    event.preventDefault();
    // const newUser = { name, social_number, role };
    // createPatient(newUser);


    setName('');
    setEmail('');
    setRole('Patient');
    setNumber('');
    setPassword('');
};


    return (
    <div className="CreatePatientApp content-box">
        <h1>Create New User</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
            </div>

            <div>
                <label>Social number:</label>
                <input
                    type="number"
                    value={social_number}
                    onChange={(e) => setNumber(e.target.value)}
                    required/>
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required/>
            </div>
            <button className="blue-button" type="submit">Submit</button>
            <Link to="/">
                <button className="blue-button">Main menu</button>
            </Link>
        </form>
    </div>
);
}


function onSuccess(response) {
    console.log('Patient created successfully:', response.data);
    alert('Patient created successfully!');
}

function onError(error) {
    console.error('Error creating patient:', error);
    alert('Failed to create patient. Please try again.');
}