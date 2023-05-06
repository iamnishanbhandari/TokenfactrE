import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import transparelogo from "../../../assets/transparelogo.png";
import { Container } from "@mui/material";
const drawerWidth = 240;

export default function Adminnavbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Container>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            color: "white",
            border: "1px solid red",
            backgroundColor: "black",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <img src={transparelogo} alt="Logo" height={50}></img>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <Box>
                <Box>
                  <Typography variant="h5" mt={3} sx={{outline:"1px solid red",textAlign:"center"}}>Dashboard</Typography>
                </Box>
                <Box>
                  <Typography variant="h5"mt={2} sx={{outline:"1px solid red",textAlign:"center"}}>Profile</Typography>
                </Box>
                <Box>
                  <Typography variant="h5"mt={2} sx={{outline:"1px solid red",textAlign:"center"}}>Step</Typography>
                </Box>
                <Box>
                  <Typography variant="h5"mt={2} sx={{outline:"1px solid red",textAlign:"center"}}>Role</Typography>
                </Box>
                <Box>
                  <Typography variant="h5"mt={2} sx={{outline:"1px solid red",textAlign:"center"}}>Token</Typography>
                </Box>
              </Box>
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
