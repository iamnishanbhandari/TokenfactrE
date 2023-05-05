import React from "react";
import { Box, Button, Container } from "@mui/material";
import "./Header.css";

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
            <Button className="header-button-text">Join Us As Partner</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
