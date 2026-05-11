import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
// Import Demo if you want to use it, otherwise remove the route below
import { Demo } from "./pages/Demo"; 
import { Signup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";
import { Private } from "./pages/Private.jsx"; // Ensure this file exists in your pages folder

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* MANDATORY PRIVATE ROUTE */}
        <Route path="/private" element={<Private />} />
        
        <Route path="/single/:theId" element={<Single />} />
        
        {/* If you don't have a Demo.jsx, delete the line below */}
        <Route path="/demo" element={<Demo />} />
      </Route>
    )
);
