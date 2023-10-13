import RegistrationForm from "./components/registration";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SetRawMaterial from "./components/Owner/SetRawMaterial";
import DashboardOwner from "./components/Owner/DashboardOwner";
import { ManageStaff } from "./components/Owner/ManageStaff";
import RegistrationFormStaff from "./components/Owner/RegistrationFormStaff";
import LoginStaff from "./components/Staff/LoginStaff";
// import RegistrationFormStaffsample from "./components/Dummy/Registrationformstaff";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginstaff" element={<LoginStaff />} />
        <Route path="/setraw" element={<SetRawMaterial />} />
        <Route path="/dashboard" element={<DashboardOwner />} />
        {/* <Route path="/" element={< RegistrationFormStaffsample/>} /> */}
        <Route path="/" element={< RegistrationFormStaff/>} />
      </Routes>
    </>
  );
}
