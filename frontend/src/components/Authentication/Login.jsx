import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from "../store";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const response = await axios.post(`${BASE_URL}login`, { email, password });
            // Assuming a successful login returns user data
            toast.success("Login successful!", { theme: "dark" });
            // Handle post-login actions here (like redirecting)
        } catch (error) {
            toast.error("Invalid email or password. Please try again.", { theme: "dark" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <header>
                <h2>Login</h2>
            </header>

            <div className="form-control">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email Address"
                />
            </div>
            <div className="form-control">
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                />
            </div>
            <div className="form-control">
                <p className="forgot-password">
                    <a href="/forgot-password">Forgot your password?</a>
                </p>
            </div>
            <div className="form-control">
                <button type="submit">Sign In</button>
            </div>
        </form>
    );
}

export default Login;
