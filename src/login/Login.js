import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

async function loginUser(credentials) {
    try {
        const response = await axios.post('http://localhost:8080/login', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        onSuccess(response)
        return response.data;
    } catch (error) {
        onError(error);
    }
}

async function registerUser(credentials) {
    try {
        const response = await axios.post('http://localhost:8080/register', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        onError(error);
    }
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const [registerUserName, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerSocialNumber, setRegisterSocialNumber] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerRole, setRegisterRole] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (token != null && token != undefined) setToken(token);
        console.log("The token is: ", token)
    }

    const handleRegisterSubmit = async e => {
        e.preventDefault();
        await registerUser({
            username: registerUserName,
            password: registerPassword,
            email: registerEmail,
            social_number: registerSocialNumber,
            role: registerRole,
        });
        // Add registration logic here (e.g., API call)
    };

    return (
        <div className="login-wrapper">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {/* Login Form */}
                <div className="login-container">
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Username</p>
                            <input
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Password</p>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <div>
                            <button type="submit" className="blue-button">Submit</button>
                        </div>
                    </form>
                </div>

                {/* Registration Form */}
                <div className="registration-container">
                    <h1>Register</h1>
                    <form onSubmit={handleRegisterSubmit}>
                        <label>
                            <p>Username</p>
                            <input
                                type="text"
                                onChange={(e) => setRegisterUserName(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Password</p>
                            <input
                                type="password"
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Social security number</p>
                            <input
                                type="number"
                                onChange={(e) => setRegisterSocialNumber(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Email</p>
                            <input
                                type="text"
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <p>Role</p>
                            <select
                                onChange={(e) => setRegisterRole(e.target.value)}
                                required>
                                <option value="">Select Role</option>
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Personnel">Personnel</option>
                            </select>
                        </label>
                        <div>
                            <button type="submit" className="green-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

function onSuccess(response) {
    console.log('Registered successfully:', response.data);
    alert('Registered successfully!');
}

function onError(error) {
    console.log('Logged in failed:', error);
    alert('Logged in failed!');
}