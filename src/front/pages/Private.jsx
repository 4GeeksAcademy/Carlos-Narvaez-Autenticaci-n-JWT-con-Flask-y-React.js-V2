import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Private = () => {
    const { store } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        // If no token exists in state or sessionStorage, redirect to login
        const token = sessionStorage.getItem("token");
        if (!store.token && !token) {
            navigate("/login");
        }
    }, [store.token, navigate]);

    if (!store.token && !sessionStorage.getItem("token")) return null;

    return (
        <div className="container mt-5 text-center">
            <h1 className="text-success border border-success p-3">Private Dashboard</h1>
            <div className="card mt-4 p-4 shadow">
                <h3>Welcome back!</h3>
                <p className="lead">Logged in as: <strong>{store.user?.email || "User"}</strong></p>
                <div className="alert alert-info mt-3">
                    This content is only visible to authenticated users.
                </div>
            </div>
        </div>
    );
};
