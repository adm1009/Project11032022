import React, { useState } from "react";
import { Link,Routes,Route, BrowserRouter } from "react-router-dom";
import "./Navbar.css";
import BankDetails from "./personal/BankDetails";
import EmergencyContact from "./personal/EmergencyContact";
import Infogen from "./personal/Infogen";
import PersonalInformation from "./personal/PersonalInformation";
const Navbar = () => {
    const [personalData,setPersonalData] =useState(false);
    const personalHandler =() =>
    {
        setPersonalData(true)
    }
  return (
    <div>
      <Link to="/logout" style={{marginLeft:"1200px"}}>Logout</Link>
      <nav className="navback">
        <h3 className="heading" ><button className="buttons"onClick={personalHandler}>Personal Details:-</button></h3>
        <h3 className="heading"><button className="buttons">Leave Details:-</button></h3>
        <h3 className="heading"><button className="buttons">Employee Details:-</button></h3>
        <h3 className="heading"><button className="buttons">My Account:-</button></h3>
      </nav>
      <nav className="nestedall">
      <h3>{personalData && <Link to="/home/personalinformation"><button className="buttons">Personal Information</button></Link>}</h3>
      <h3>{personalData && <Link to="/home/bankdetails"><button className="buttons">Bank Details</button></Link>}</h3>
      <h3>{personalData && <Link to="/home/emergencycontact"><button className="buttons">Emergency Contact</button></Link>}</h3>
      <h3>{personalData && <Link to="/home/infogen"><button className="buttons">Infogen Details</button></Link>}</h3>
      </nav>
      
      {/* <Routes>
          <Route path="personalinformation" element={<PersonalInformation/>} />
          <Route path="bankdetails" element={<BankDetails/>} />
          <Route path="emergencycontact" element={<EmergencyContact/>} />
          <Route path="infogen" element={<Infogen/>} />
      </Routes>
       */}
    </div>
  );
};

export default Navbar;
