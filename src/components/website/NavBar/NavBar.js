// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import './NavBar.css'

// function NavBar() {
//   return (
//     <AppBar position="static" className="navbar-appbar" sx={{border:"1px solid red",color:"red"}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box>
//             <Box className>Logo</Box>
//             <Box>
//               <Box>
//                 <Box>
//                   <Typography>Solutions</Typography>
//                 </Box>
//                 <Box>
//                   <Typography>Docs</Typography>
//                 </Box>
//                 <Box>
//                   <Typography>Join us as Partner</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default NavBar;

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import '../../../assets/transparent_background.png'

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
            <img src="transparent_background.png" alt="LOGO"></img>
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
