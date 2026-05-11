import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({ type: "logout" }); // Clears state via reducer
		navigate("/login"); // Redirects to login path
	};

	return (
		<nav className="navbar navbar-light bg-light p-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!store.token ? (
						<>
							<Link to="/signup">
								<button className="btn btn-primary me-2">Signup</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-danger">Login</button>
							</Link>
						</>
					) : (
						<button onClick={handleLogout} className="btn btn-warning">
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};
