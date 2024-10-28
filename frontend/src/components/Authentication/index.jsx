import "./style.scss";
import { useState } from 'react';
import Login from "./Login.jsx"; // Ensure this path is correct
import Registration from "./registration.jsx";

function Authentication() {
    const [isRegistered, setIsRegistered] = useState(true); // Default to showing login

    // Function to toggle between login and registration
    function toggleAuth() {
        setIsRegistered(prevState => !prevState); 
    }

    return (
        <div className="auth-wrapper-container">
            <div className="form-wrapper">
                {isRegistered ? <Login /> : <Registration />}
                <p className="auth-toggler-container">
                    {isRegistered ? (
                        <span>
                            <a href="/forgot-password">Don't have an account?</a> 
                            <button onClick={toggleAuth} aria-label="Create Account">Create Account</button>
                        </span>
                    ) : (
                        <span>
                            Already have an account? 
                            <button onClick={toggleAuth} aria-label="Login">Login</button>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Authentication;
