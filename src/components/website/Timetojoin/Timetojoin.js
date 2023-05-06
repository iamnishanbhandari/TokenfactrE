import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import "./Timetojoin.css";
import { Link } from "react-router-dom";
const Timetojoin = () => {
  return (
    <Box className="timetojoin-box" mt={2}>
      <Box>
        <Typography className="join" fontSize={25}>
          It's time to join the thousands of cafe, Restaurant, large as
          well as   <br/>  <span> small business with TokenFactrE</span> 
        </Typography>
      </Box>
      <Box>

        <Link to="/Register"> 
        <Button className="button">Start Building</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Timetojoin;
