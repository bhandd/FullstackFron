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
import CreateEntryApp from "./CreateEntry";
import CreateMessageApp from "./CreateMessage";
import ViewMessagesApp from "./ViewMessages";

import useToken from "../login/useToken";
import Login from "../login/Login";

export default function PatientApp(){
    const { token, setToken } = useToken();

    if(token == null) {
        console.log("Token is unfortunately: ", token)
        return <Login setToken={setToken} />
    }

    return (
        <div className="PatientApp container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/listStaff" element={<ListStaffApp />}></Route>

                    <Route path="/createPatient" element={<CreatePatientApp />}></Route>
                    <Route path="/createEntry/:id" element={<CreateEntryApp />}></Route>
                    <Route path="/createMessage/:id" element={<CreateMessageApp />}></Route>
                    <Route path="/listPatients" element={<ListPatientsApp />}></Route>
                    <Route path="/viewMessages/:id" element={<ViewMessagesApp />}></Route>
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