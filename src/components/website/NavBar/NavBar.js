import { Box, Container, Typography } from "@mui/material";
import React from "react";
// import logo from  '../../../assets/transparent_background.png'
import transparent_background from "../../../assets/transparent_background.png"
import text_logo from "../../../assets/text_logo.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


          <Box  className='logo_box' sx={{display:"flex",gap:"20px" , alignItems:'center'}}>
              <Box >
              <img src={transparent_background} alt="LOGO" height={45}></img>
                 </Box>
              <Box className="title_logo_box">
              <img  src={text_logo} alt="LOGO" height={30}></img>
                 </Box>

          <Box ml={5}>
         

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
