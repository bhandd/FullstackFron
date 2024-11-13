
import UpdateEmployeeApp from "./UpdateEmployee";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListEmployeesApp from "./ListEmployees";

export default function EmployeeApp(){
    return (
        <div className="EmployeeApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/employees" element={<ListEmployeesApp />}></Route>
                    <Route path="/update" element={<UpdateEmployeeApp />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}