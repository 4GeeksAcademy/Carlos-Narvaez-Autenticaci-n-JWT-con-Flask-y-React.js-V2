import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { dispatch } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (resp.ok) {
            const data = await resp.json();
            dispatch({ type: "login", payload: data });
            navigate("/private");
        } else alert("Invalid credentials");
    };

    return (
        <form className="container mt-5 w-50" onSubmit={handleLogin}>
            <h1>Login</h1>
            <input className="form-control mb-2" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
            <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            <button className="btn btn-success w-100">Login</button>
        </form>
    );
};
