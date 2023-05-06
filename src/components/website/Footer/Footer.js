import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  return (
    <>
      <Box className="footer-container" >
        <Box className='footer-left'>
          <Typography fontSize={20} lineHeight={2}>
            Managed by TokenFactrE Foundation <br />
            © 2023 TokenFactrE Foundation.
            <br />
            All rights reserved.
          </Typography>
        </Box>

        <Box className='footer-middle'>
          <Typography fontSize={20}  >
            <ul>
              <li > <ArrowForwardIosIcon fontSize="small" /> TokenFactrE </li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Break TokenFactrE</li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Media Kit</li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Careers </li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Disclaimer</li>
            </ul>
          </Typography>
        </Box>

        <Box className='footer-right'>
          <Typography  fontSize={20}>
            <ul>
              <li> <ArrowForwardIosIcon fontSize="small" /> Get Connected</li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Ecosystem</li>
              <li> <ArrowForwardIosIcon fontSize="small" /> Newsletter</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
