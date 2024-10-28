import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from "../store";

function Registration() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const submit = async (e) => {
        e.preventDefault();

        if (await validated()) {
            try {
                await axios.post(`${BASE_URL}users`, {
                    username: form.username,
                    email: form.email,
                    password: form.password,
                });
                toast.success("Account successfully created!", { theme: "dark" });
                resetForm();
            } catch (error) {
                toast.error("Error creating account. Please try again.", { theme: "dark" });
            }
        }
    };

    const validated = async () => {
        try {
            const existing_users = await axios.get(`${BASE_URL}users`);
            const all_emails = existing_users.data.map(user => user.email);

            const name_pattern = /^[a-zA-Z]{1,20}$/;
            const password_pattern = /^[a-zA-Z0-9]{6,30}$/;

            let result = true;
            if (!form.username || !form.email || !form.password || !form.password2) {
                result = false;
                toast.error("All fields are required.", { theme: "dark" });
            } else if (!name_pattern.test(form.username)) {
                result = false;
                toast.error("Invalid username. Please use letters only.", { theme: "dark" });
            } else if (all_emails.includes(form.email)) {
                result = false;
                toast.error("Email already exists.", { theme: "dark" });
            } else if (!password_pattern.test(form.password)) {
                result = false;
                toast.error("Password must be 6-30 characters long and contain letters and numbers.", { theme: "dark" });
            } else if (form.password !== form.password2) {
                result = false;
                toast.error("Passwords do not match.", { theme: "dark" });
            }
            return result;
        } catch (error) {
            toast.error("Error validating users. Please try again.", { theme: "dark" });
            return false;
        }
    };

    const resetForm = () => {
        setForm({
            username: "",
            email: "",
            password: "",
            password2: "",
        });
    };

    const handleFormInformation = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={submit}>
            <header>
                <h2>Create Account</h2>
            </header>

            <div className="form-control">
                <input
                    type="text"
                    placeholder="Username"
                    name='username'
                    value={form.username}
                    onChange={handleFormInformation}
                    required
                />
            </div>
            <div className="form-control">
                <input
                    type="email"
                    placeholder="Email Address"
                    name='email'
                    value={form.email}
                    onChange={handleFormInformation}
                    required
                />
            </div>
            <div className="form-control">
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={form.password}
                    onChange={handleFormInformation}
                    required
                />
            </div>
            <div className="form-control">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name='password2'
                    value={form.password2}
                    onChange={handleFormInformation}
                    required
                />
            </div>
            <div className="form-control">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default Registration;
