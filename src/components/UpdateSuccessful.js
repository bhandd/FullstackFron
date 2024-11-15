import {Link} from "react-router-dom";
import React from "react";

export default function UpdateSuccessfulApp(){
    return (
        <div className="UpdateSuccessfulApp container">
            <h2>Update was successful</h2>
            <Link to="/">
                <button className="blue-button">Main menu</button>
            </Link>
        </div>
    )
}