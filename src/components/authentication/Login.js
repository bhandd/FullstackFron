import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Hantera inloggning
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { username, password };

        console.log('Logging in', loginData);

        try {
            const response = await axios.post('http://localhost:8080/login', loginData, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' }
            });
            onSuccess(response);
        } catch (error) {
            onError(error);
        } finally {
            console.log('Finished log in');
        }
    };

    // Om inloggningen lyckas
    function onSuccess(response) {
        console.log('Login successfully:', response.data);

        // Spara JWT-token i localStorage
        localStorage.setItem('token', response.data);

        alert('Login successful!');
    }

    // Om inloggningen misslyckas
    function onError(error) {
        console.error('Error during login:', error);
        alert('Failed to Login. Please try again.');
    }

    // Skicka en förfrågan med JWT-token
    const fetchProtectedData = async () => {
        try {
            const token = localStorage.getItem('token'); // Hämta JWT från localStorage
            const response = await axios.get('http://localhost:8080/protected-endpoint', {
                headers: {
                    Authorization: `Bearer ${token}` // Lägg till JWT i Authorization-huvudet
                }
            });

            console.log('Protected data:', response.data);
        } catch (error) {
            console.error('Failed to fetch protected data:', error);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={fetchProtectedData} style={{ marginTop: "20px" }}>
                Fetch Protected Data
            </button>
        </div>
    );
}

export default LoginForm;