import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./MainPage";
import CreatePatientApp from "./CreatePatient";
import ListPatientsApp from "./ListPatients";
import UpdatePatientApp from "./UpdatePatient";
import DeletePatientApp from "./DeletePatient";

import FooterApp from "./FooterApp";
import ListStaffApp from "./ListStaff";
import DeleteSuccessfulApp from "./DeleteSuccessful";
import ViewPatientApp from "./ViewPatientApp";

export default function PatientApp(){
    return (
        <div className="PatientApp container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/listStaff" element={<ListStaffApp />}></Route>

                    <Route path="/createPatient" element={<CreatePatientApp />}></Route>
                    <Route path="/listPatients" element={<ListPatientsApp />}></Route>
                    <Route path="/viewPatient/:id" element={<ViewPatientApp />}></Route>
                    <Route path="/updatePatient/:id" element={<UpdatePatientApp />}></Route>
                    <Route path="/deletePatient" element={<DeletePatientApp />}></Route>
                    <Route path="/deleteSuccessful" element={<DeleteSuccessfulApp />}></Route>


                </Routes>
            </BrowserRouter>
            <FooterApp/>
        </div>
    )
}