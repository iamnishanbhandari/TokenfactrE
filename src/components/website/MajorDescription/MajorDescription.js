import { Typography, Box, Container } from "@mui/material";
import React from "react";
import "./MajorDescription.css"; 

const MajorDescription = () => {
  return (
    <>
      <Box>
        <Container> 
        <Box>
          <Typography className="major-description1" > 

          <h2>
          Decentralized 
          </h2>



          <p >

          The TokenFactrE network is validated by thousands <br /> 

          <span className="first-span">
          of nodes that operate independently of  each other <br  /> 


          </span>

        
            <span className="second-span">
            ensuring your data  remains secure and censorship <br/>
         
               
            </span>

            <span className="second-second-span">
           
            
            resistant. 
         
               
            </span>
          </p>
       
          <h3 style={{fontSize:'35px'}}> 1,736 </h3>
           <h4>VALIDATOR NODES</h4> 
          </Typography>
        </Box>

        <Box>
          <Typography className="major-description2"> 

          <h2>VALIDATOR NODES Energy Efficient</h2>
          <p style={{fontSize:18.5}}> TokenFactrE proof of stake  network and  other  innovations 
             <br/> minimize its impact on the environment. Each FActrE 
           <br/>
           transaction uses about the same energy as a few Google <br/>
            searches.  <br/>
            <br/>
             
           0% NET CARBON IMPACT</p>            
          </Typography>
        </Box>

        <Box>
          <Typography className="major-description3"> 
          <h2 style={{fontSize:45}} >
          Scalable
          </h2>
             <p style={{fontSize:19.5}}>
              <span style={{fontSize:30}}> Get big, quick.</span>
              <br/>
             
              
             TokenFactrE is introduced with an objective of handling <br /> 

             <span className="third-span">thousands of  transactions per second,and fees for both </span> <br/>
             <span className="fourth-span" >the developers and users remain less than $0.01.</span>
         
         
            
             </p>
            
           <h3>
           TOTAL TRANSACTIONS:
           
           <br />
           170,434,925,747 
           

           </h3>
            
             
          </Typography>
        </Box>
        </Container>
      </Box>
    </>
  );
};

export default MajorDescription;
