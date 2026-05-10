import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, dispatch } = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light px-3">
			<Link to="/"><span className="navbar-brand">Auth App</span></Link>
			<div className="ml-auto">
				{!store.token ? (
					<Link to="/login"><button className="btn btn-primary">Login</button></Link>
				) : (
					<button className="btn btn-danger" onClick={() => { 
						dispatch({ type: "logout" }); 
						navigate("/login"); 
					}}>Logout</button>
				)}
			</div>
		</nav>
	);
};
