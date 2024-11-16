import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function LoginApp(){
    return (
        <div className="RegisterApp container">
            <h2>Just Login</h2>
            <Link to="/">
                <button className="blue-button">Main menu</button>
            </Link>
        </div>
    )
}