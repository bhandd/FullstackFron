import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./MainPage";
import ListPatientsApp from "./ListPatients";
import UpdatePatientApp from "./UpdatePatient";

export default function PatientApp(){
    return (
        <div className="PatientApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/patients" element={<ListPatientsApp />}></Route>
                    <Route path="/update" element={<UpdatePatientApp />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}