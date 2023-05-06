import { Typography, Box, Container } from "@mui/material";
import React from "react";
import "./MajorDescription.css"; 

const MajorDescription = () => {
  return (
    <>
      <Box>
        <Container> 
        <Box>
          <Typography className="major-description1"> 
            Decentralized <br /> <br />
            The TokenFactrE network is validated by <br /> thousands of nodes
            that operate <br /> independently of each other, ensuring <br />
            your data remains secure and censorship <br />
            resistant.
            <br />
            1,736 <br />
            VALIDATOR NODES
          </Typography>
        </Box>

        <Box>
          <Typography className="major-description2"> 
            <br />
            VALIDATOR NODES Energy Efficient <br /> <br />
            TokenFactrE proof of stake <br />
            network and other innovations <br />
            minimize its impact on the environment. <br />
            Each FAct transaction uses about <br />
            the same energy as a few Google searches. <br />
            0% NET CARBON IMPACT <br />
          </Typography>
        </Box>

        <Box>
          <Typography className="major-description3"> 
            Scalable <br /> <br />
            Get big, quick. TokenFactrE is made <br />
            to handle thousands of transactions per second,
            <br /> and fees for both developers and users
            <br />
            remain less than <br />
            $0.01. <br /> 170,434,925,747 <br /> TOTAL TRANSACTIONS
          </Typography>
        </Box>
        </Container>
      </Box>
    </>
  );
};

export default MajorDescription;
