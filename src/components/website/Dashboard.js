import React from "react";
import { Box } from "@mui/material";
import Footer from "./Footer/Footer";
import MajorDescription from "./MajorDescription/MajorDescription";
import Timetojoin from "./Timetojoin/Timetojoin";
import CommunityStatus from "./Communitystatus/Communitystatus";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
const Dashboard = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#0F0F0F", p: "0px", m: "0px" }}>
        <NavBar />
        <Header />
        <CommunityStatus />
        <MajorDescription />
        <Timetojoin />
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
