import {Link} from "react-router-dom";
import React from "react";

export default function DeleteSuccessfulApp(){
    return (
        <div className="DeleteSuccessfulApp container">
            <h2>Delete was successful</h2>
            <Link to="/">
                <button className="blue-button">Main menu</button>
            </Link>
        </div>
    )
}