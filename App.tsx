import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PersonalInformation from "./components/personal/PersonalInformation";
import BankDetails from "./components/personal/BankDetails";
import EmergencyContact from "./components/personal/EmergencyContact";
import Infogen from "./components/personal/Infogen";
// import Navbar from './components/Navbar';
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Infogen Labs Pvt.Ltd</h1>
      <h1>Employee Management System</h1>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home/personalinformation" element={<PersonalInformation />} />
        <Route path="/home/bankdetails" element={<BankDetails />} />
        <Route path="/home/emergencycontact" element={<EmergencyContact />} />
        <Route path="/home/infogen" element={<Infogen />} />
      </Routes>
    </div>
  );
}

export default App;
