import React from "react";
import useToken from "./useToken";
import {Link} from "react-router-dom";

export default function Logout() {
    const { clearToken } = useToken(); // Access the clearToken function from the hook

    const handleLogout = () => {
        clearToken(); // Clear the token
        console.log("Logged out successfully.");
    };

    return (
        <div>
            <button type="button" className="blue-button" onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
}