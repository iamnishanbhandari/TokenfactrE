import React from 'react'
import Box from '@mui/material/Box/Box'
import Sidebar from "./components/AdminComponent/Sidebar";
import MainDash from "./components/AdminComponent/MainDash/MainDash";
import RightSide from "./components/AdminComponent/RigtSide/RightSide";

const Admin = () => {
  return (
    <>
    <Box className="AppGlass" >

    <Sidebar/>
    <MainDash/>
    <RightSide/>
  </Box>
  </>  )
}

export default Admin