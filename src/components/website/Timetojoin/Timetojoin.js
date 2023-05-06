import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import "./Timetojoin.css";
import { Link } from "react-router-dom";
const Timetojoin = () => {
  return (
    <Box className="timetojoin-box">
      <Box>
        <Typography className="join">
          It's time to join the thousands of cafe, Restaurant, large as
          <br /> well as small business with TOkenFactrE
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
