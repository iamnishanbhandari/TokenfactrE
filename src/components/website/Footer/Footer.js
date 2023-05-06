import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box className="footer-container" >
        <Box>
          <Typography>
            Managed by TokenFactrE Foundation <br />
            © 2023 TokenFactrE Foundation.
            <br />
            All rights reserved.
          </Typography>
        </Box>

        <Box>
          <Typography>
            <ul>
              <li> TokenFactrE </li>
              <li> Break TokenFactrE</li>
              <li> Media Kit</li>
              <li> Careers </li>
              <li>Disclaimer</li>
            </ul>
          </Typography>
        </Box>

        <Box>
          <Typography sx={{fontFamily:"Sora"}}>
            <ul>
              <li> GET CONNECTED</li>
              <li> Ecosystem</li>
              <li> Newsletter</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
