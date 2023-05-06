import React from "react";
import { Box, Button } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";
import web3 from '../../../assets/web3.jpg';

const Header = () => {
  return (
    
      < Box className="header-box" sx={{ display:'flex', width:'100%' }} >

        <Box className="header-container" sx={{width:'45%'}} >

          <Box className="header-content1" >
            Excel you bussiness with <br />
            <span> TokenFactrE</span>

          </Box>


          <Box className="header-button" >
            <Link to='/Register'>
              <Button className="header-button-text">Join Us As Partner</Button>
            </Link>
          </Box>


        </Box>

        <Box  className='header_image' sx={{width:'45%'}}>
          <img src={web3} sx={{width:'200px', height:'100px',borderRadius:"85px"}} alt='header' height={500} />
        </Box>

      </Box>
    
  );
};

export default Header;
