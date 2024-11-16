import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavApp from "./HeaderNavApp";

export default function MainPage() {
    return (
        <div className="MainPage content-box">
            <HeaderNavApp/>
            <nav>
                <Link to="/listStaff">
                    <button className="green-button">List Staff</button>
                </Link>
                <Link to="/listPatients">
                    <button className="blue-button">List Patients</button>
                </Link>
                <Link to="/createPatient">
                    <button className="blue-button">Create User</button>
                </Link>
                <Link to="/Register">
                    <button className="blue-button">Register</button>
                </Link>
                <Link to="/Login">
                    <button className="blue-button">Login</button>
                </Link>
            </nav>
        </div>
    );
}