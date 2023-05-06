import { Box, Container, Typography } from "@mui/material";
import React from "react";
// import '../../../assets/transparent_background.png'

import transparelogo from '../../../assets/transparelogo.png'

const NavBar = () => {
  return (
    <Container>
      <Box>
        <Box
          sx={{
            border: "1px solid green",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // mt: "5px",
          }}
        >
          <Box ml={5}>
            <Typography variant="h5"> 
            <img src={transparelogo} alt="LOGO"></img>
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid green",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: "15px",
              gap: "30px",
            }}
          >
            <Box>
              <Typography sx={{color:"white"}}>Solutions</Typography>
            </Box>
            <Box>
              <Typography >Docs</Typography>
            </Box>
            {/* <Box>
              <Typography sx={{ border: "1px solid", borderRadius: "20px" }}>
                <Button>Join Us As Partner </Button>
              </Typography>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
