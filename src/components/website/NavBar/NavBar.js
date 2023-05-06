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
// import logo from  '../../../assets/transparent_background.png'
import transparent_background from "../../../assets/transparent_background.png"
import text_logo from "../../../assets/text_logo.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const NavBar = () => {
  return (
    <Container sx={{ pt: "20px" }}>
      <Box>
        <Box
          sx={{
           
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // mt: "5px",
          }}
        >
          <Box  className='logo_box' sx={{display:"flex",gap:"20px" , alignItems:'center'}}>
              <Box >
              <img src={transparent_background} alt="LOGO" height={45}></img>
                 </Box>
              <Box className="title_logo_box">
              <img  src={text_logo} alt="LOGO" height={30}></img>
                 </Box>
          </Box>
          <Box
            sx={{
             
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: "15px",
              gap: "30px",
            }}
          >
            <Box>
              <Typography sx={{ color: "white" }}>Products</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "white" }}>Solutions</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "white" }}>Resources</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "white" }}>Docs</Typography>
            </Box>

            <Box >
              <TwitterIcon sx={{color:"white" , paddingRight:'15px'}}  />
              <GitHubIcon sx={{color:"white" , paddingRight:'15px'}}/>
              <LinkedInIcon sx={{color:"white" , paddingRight:'15px'}}/>
              <YouTubeIcon sx={{color:"white" , paddingRight:'15px'}}/>




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
