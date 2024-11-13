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

                    <Route path="/listPatients" element={<ListPatientsApp />}></Route>
                    <Route path="/updatePatient" element={<UpdatePatientApp />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}