import React from "react";
import Register from "./components/Register/Register";
import Main from "./components/website/Dashboard";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/website/Banner/Banner";
// import Dashboard from "./components/website/Dashboard";


const App = () => {
  return (

     <>
       <Router>
        <Banner/>
      
         <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/Ecommerce" element={<Ecommerce />} />
           <Route path="/Register" element={<Register />} />
         
           


           {/* <Dashboard/> */}
           {/* <Register/> */}
         </Routes>
       </Router>
     </>

  );
};

export default App;
