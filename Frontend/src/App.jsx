import RegistrationForm from "./components/registration";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SetRawMaterial from "./components/Owner/SetRawMaterial";
import DashboardOwner from "./components/Owner/DashboardOwner";
import { ManageStaff } from "./components/Owner/ManageStaff";
import RegistrationFormStaff from "./components/Owner/RegistrationFormStaff";
import LoginStaff from "./components/Staff/LoginStaff";
import StaffDashboard from "./components/Staff/StaffDashboard";
import SetMenu from "./components/Staff/SetMenu";
import ProductForm from "./components/Staff/SetNMenu";
import {ProductPage} from "./components/Staff/Card";
import CartDisplay from "./components/Customer/Cart";
import OrderSummary from "./components/Customer/Ordrelist";
import ProductList from "./components/Staff/Card2";
// import { CartView } from "./components/Customer/CartView";
// import RegistrationFormStaffsample from "./components/Dummy/Registrationformstaff";

export default function App() {
  //test
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/loginstaff" element={<LoginStaff />} />
        <Route path="/setraw" element={<SetRawMaterial />} />
        <Route path="/dashboardown" element={<DashboardOwner />} />
        <Route path="/dashboardstaff" element={<StaffDashboard />} />
        {/* <Route path="/setmenu" element={<SetMenu />} /> */}
        <Route path="/setmenu" element={<ProductForm />} />
        {/* <Route path="/" element={< RegistrationFormStaffsample/>} /> */}
        <Route path="/staffform" element={<RegistrationFormStaff />} />
        <Route path="/dish" element={<ProductPage />} />
        <Route path="/cart" element={<CartDisplay />} />
        {/* <Route path="cartview" element={<CartView />} /> */}
        <Route path="/orderlist" element={<OrderSummary />} />
        <Route path="/staffview" element={<ManageStaff />} />
        <Route path="/dish2" element={<ProductList/>}/>
      </Routes>
    </>
  );
}
