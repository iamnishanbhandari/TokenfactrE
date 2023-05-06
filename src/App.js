import React from "react";



// import Register from "./components/Register/Register";
// import Main from "./components/website/Dashboard";

// import Ecommerce from "./components/Ecommerce/Ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/website/Dashboard";
// import EcomNavbar from "./components/Ecommerce/EcomNavbar";
// import AdminNavBar from "./components/AdminDashboard/AdminNavBar";
// import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
// import AdminSidebar from "./components/AdminDashboard/Sidebar/AdminSidebar";

import { Box, Container } from "@mui/material";
import './App.css'
// import Adminnavbar from "./components/Admin/AdminNavbar/Adminnavbar";
// import Adminmain from "./components/Admin/AdminMain/Adminmain";



const App = () => {
  return (


    //  <>
    //    <Router>
    //      <Routes>
    //        <Route path="/" element={<Main />} />
    //        <Route path="/Ecommerce" element={<Ecommerce />} />
    //        <Route path="/Register" element={<Register />} />

           


    //        {/* <Dashboard/> */}
    //        {/* <Register/> */}
    //      </Routes>
    //    </Router>
    //  </>
    <>
    {/* <Ecommerce/> */}
    {/* <AdminNavBar/> */}
    {/* <AdminDashboard/> */}

    <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
{/* <Adminmain/> */}
    </>

    

  );
};

export default App;
