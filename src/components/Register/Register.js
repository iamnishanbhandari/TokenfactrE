import {
  Container,
  FormControl,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { TextField, Box, Stack } from "@mui/material";
import { Button } from "@mui/material";
import "./Register.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

import "./Register.css";

const Register = () => {
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  // const { enqueueSnackbar } = useSnackbar();
  // const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    setQuantity(quantity.target.value);
  };

  const uploadToIpfs = async (e) => {
    try {
      //create an object that can be used to construct a multipart/form-data request body that includes the PDF file data and any other parameters required by the Pinata API.
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      //pinata API endpoint for uploading File
      const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

      const resFile = await axios.post(url, formData, {
        headers: {
          pinata_api_key: `${process.env.NEXT_PUBLIC_REACT_APP_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.NEXT_PUBLIC_REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const imgURL = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      console.log("image link", "imgURL");
      setImage(imgURL);
    } catch (e) {
      console.error(e);
      alert("Error! while uploading file to IPFS....");
    }
  };

  // const handleCreateAccount = () => {
  //   enqueueSnackbar("Success! Account Created", { variant: "success" });
  //   setTimeout(() => {
  //     navigate("/Ecommerce");
  //   }, 4000);
  // };

  return (
    <>
      <Box bgcolor={"black"} color={"white"}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2>Create Your Account</h2>
              <p>
                Hustlers REWARDS Join Hustler’s Rewards to earn Stars for free
                food and drinks, <br />
                any way you pay. Get access to mobile ordering, a birthday
                Reward, and moremore.
              </p>
            </Box>

            <Stack spacing={2} direction="row" sx={{ marginBottom: 3 }}>
              <TextField
                type="text"
                variant="outlined"
                label="First Name"
                // onChange={e => setFirstName(e.target.value)}
                // value={firstName}
                className="text-field"
                sx={{ color: "white", bgcolor: "white" }}
                focused
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                // color="secondary"
                label="Lastname"
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              fullWidth
              required
              sx={{ mb: 3, color: "black", bgcolor: "white" }}
            />

            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              required
              fullWidth
              sx={{ mb: 3, color: "black", bgcolor: "white" }}
            />

            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Business Name"
              required
              fullWidth
              sx={{ mb: 3, color: "black", bgcolor: "white" }}
            />

            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="TOken Name"
              required
              fullWidth
              sx={{ mb: 3, color: "black", bgcolor: "white" }}
            />
            <Box>
              <Typography>Choose Quantity </Typography>
              <RadioGroup
                aria-label="Select one option"
                name="option"
                onChange={handleQuantityChange}
                quantity={quantity}
                // color:{black
              >
                <FormControlLabel value="100" control={<Radio />} label="100" />
                <FormControlLabel value="500" control={<Radio />} label="500" />
                <FormControlLabel
                  value="1000"
                  control={<Radio />}
                  label="1000"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography>Upload Image:</Typography>
              <input type="file" onChange={uploadToIpfs} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Link to="/Ecommerce"> */}
              <Button
                sx={{
                  width: "200px",
                  height: "60px",
                  background:
                    "linear-gradient(90deg, #7CF4B6 4.68%, #00FFE0 95.08%)",
                  border: " 2px solid #496F69",
                  boxShadow: " 0px 0px 100px #000000",
                  borderRadius: "88px",
                }}
                // onClick={handleCreateAccount}
              >
                Create
              </Button>
              {/* </Link> */}
            </Box>
            <Box sx={{ textAlign: "center", mt: "30px" }}>
              <Typography>TERMS OF USE</Typography>
              <Typography mt={1}>
                I agree to the Hustlers® Rewards Termsopens in new window and{" "}
                <br /> the Hustlers Card Termsopens in new window and have read
                the <br /> Hustlers Privacy Statementopens in new window.
              </Typography>
            </Box>
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default Register;
