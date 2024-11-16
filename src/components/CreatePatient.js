import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function CreatePatientApp(){

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [social_number, setNumber] = useState('');

    function createPatient(newUser) {
        console.log('Creating new user:', newUser);
        axios.post('http://localhost:8080/patients', newUser)
            .then(response => onSuccess(response))
            .catch(error => onError(error))
            .finally(() => console.log('Finished creating patient'));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { name, social_number, role };
        createPatient(newUser);


        setName('');
        setRole('');
        setNumber('');
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
                    <label>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required>
                        <option value="">Select Role</option>
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Personnel">Personnel</option>
                    </select>
                </div>
                <div>
                    <label>Social number:</label>
                    <input
                        type="number"
                        value={social_number}
                        onChange={(e) => setNumber(e.target.value)}
                        required/>
                </div>
                <button className="green-button" type="submit">Create User</button>
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