import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (resp.ok) {
            alert("Signup successful!");
            navigate("/login");
        } else alert("Error creating user");
    };

    return (
        <form className="container mt-5 w-50" onSubmit={handleSignup}>
            <h1>Signup</h1>
            <input className="form-control mb-2" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
            <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            <button className="btn btn-primary w-100">Register</button>
        </form>
    );
};
