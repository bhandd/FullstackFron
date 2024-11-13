import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div>
            <h1>Welcome to the Patient Management App</h1>
            <nav>
                <Link to="/listPatients">
                    <button>List Patients</button>
                </Link>
                <Link to="/updatePatient">
                    <button>Update Patient</button>
                </Link>
                <Link to="/createPatient">
                    <button>Create Patient</button>
                </Link>
                <Link to="/deletePatient">
                    <button>Delete Patient</button>
                </Link>
            </nav>
        </div>
    );
}