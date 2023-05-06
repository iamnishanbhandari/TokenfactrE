import React from "react";
// import Register from "./components/Register/Register";
// import Main from "./components/website/Dashboard";
// import Ecommerce from "./components/Ecommerce/Ecommerce";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/website/Dashboard";
// import EcomNavbar from "./components/Ecommerce/EcomNavbar";
// import AdminNavBar from "./components/AdminDashboard/AdminNavBar";
// import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
// import AdminSidebar from "./components/AdminDashboard/Sidebar/AdminSidebar";
import Sidebar from "./components/AdminComponent/Sidebar";
import MainDash from "./components/AdminComponent/MainDash/MainDash";
import RightSide from "./components/AdminComponent/RigtSide/RightSide";
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

    <Box className="AppGlass" >
      {/* <Container>  */}

        <Sidebar/>
        <MainDash/>
        <RightSide/>
      {/* </Container> */}
      </Box>
{/* <Adminmain/> */}
    </>
    

  );
};

export default App;
