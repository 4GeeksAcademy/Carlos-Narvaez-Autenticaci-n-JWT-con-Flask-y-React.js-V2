import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // VALIDATION: Redirect if token is missing
        if (!store.token) navigate("/login");
    }, [store.token]);

    return (
        <div className="container mt-5 text-center">
            <h1 className="text-success border border-success p-3">Private Dashboard</h1>
            <p>Welcome, {store.user?.email}!</p>
        </div>
    );
};
