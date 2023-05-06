import React from "react";
import { Box, Button, Container } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box className="header-box">
        <Container className="header-container">
          <Box>
            <Box className="header-content1">
              Connecting Your Business TO BlockChain
            </Box>
            <Box className="header-content2">Accelerate Your Business through TOkenFactrE</Box>
          </Box>
          <Box className="header-button">
          <Link to='/Register'> 
            <Button className="header-button-text">Join Us As Partner</Button>
          </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
