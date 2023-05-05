import React from "react";
import Register from "./components/Register/Register";
import Main from "./components/website/Dashboard";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/website/Dashboard";

const App = () => {
  return (

    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/Ecommerce" element={<Ecommerce />} />
    //       <Route path="/Register" element={<Register />} />


    //       {/* <Dashboard/> */}
    //       {/* <Register/> */}
    //     </Routes>
    //   </Router>
    // </>
    <>

    {/* <Register/> */}

    <Dashboard/>
    </>
  );
};

export default App;
