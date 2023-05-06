import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "./Communitystatus.css";

const CommunityStatus = () => {
  return (
    <Container>
      <Box className="community-status-box">
        <Box
          className="community-status-content"
        >
          <Box>
            <Typography className="community-status-text1">
              Join The Community Of Millions
            </Typography>
          </Box>

          <Box>
            <Typography className="community-status-text2">
              11.5M+ <br />
              ACTIVE ACCOUNTS
            </Typography>
            <Typography className="community-status-text3" mt={2}>
              $0.00025 <br />
              AVERAGE COST <br /> PER TOkFactrE
            </Typography>
          </Box>
        </Box>
        <Box className="community-status-made-for">
          Made for Mass Adoption
        </Box>
      </Box>
    </Container>
  );
};

export default CommunityStatus;
