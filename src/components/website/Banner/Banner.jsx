import { Box } from '@mui/material';
import React from 'react'
import './Banner.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  return (
    // <Container sx={{backgroundColor:'black'}}>
   <Box className='banner_box' sx={{bgcolor:'purple' , border:'1px solid purple' }}>
    <p>Wallet SDK allows you to connect any wallet to your apps and games <span> <ArrowForwardIcon sx={{fontSize:'17px' , fontWeight:'bold', marginLeft:'4px', marginTop:'5px'
}}/> </span>  </p>
   </Box>





    // </Container>
  )
}

export default Banner;
