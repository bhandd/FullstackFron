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
        return response.data;
    } catch (error) {
        onError(error);
    }
}
async function loginUser2(credentials) {
    console.log('Login in as:', credentials);
    return axios.post('http://localhost:8080/login', credentials)
        .then(response => onSuccess(response))
        .catch(error => onError(error))
        .finally(() => console.log('Finished creating patient'));
}
async function loginUser3(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        console.log("The token is: ", token)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit" className="blue-button">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

function onSuccess(response) {
    console.log('Logged in successfully:', response.data);
    alert('Logged in successfully!');
}

function onError(error) {
    console.log('Logged in failed:', error);
    alert('Logged in failed!');
}