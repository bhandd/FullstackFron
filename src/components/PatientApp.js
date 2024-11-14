import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./MainPage";
import CreatePatientApp from "./CreatePatient";
import ListPatientsApp from "./ListPatients";
import UpdatePatientApp from "./UpdatePatient";
import DeletePatientApp from "./DeletePatient";

import FooterApp from "./FooterApp";
import ListStaffApp from "./ListStaff";

export default function PatientApp(){
    return (
        <div className="PatientApp container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/listStaff" element={<ListStaffApp />}></Route>

                    <Route path="/createPatient" element={<CreatePatientApp />}></Route>
                    <Route path="/listPatients" element={<ListPatientsApp />}></Route>
                    <Route path="/updatePatient" element={<UpdatePatientApp />}></Route>
                    <Route path="/deletePatient" element={<DeletePatientApp />}></Route>
                </Routes>
            </BrowserRouter>
            <FooterApp/>
        </div>
    )
}