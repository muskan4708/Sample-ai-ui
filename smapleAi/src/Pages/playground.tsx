import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import smapleAiIcon from "../assets/simplaiLogo.svg";
import { TbGridDots } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";
import "../../src/components/Sidebar/main.css";

import { BsChatDots, BsHouseDoor } from "react-icons/bs";

import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { FaLaptopHouse } from "react-icons/fa";

// import Cards from "./Cards";
// import MainContainer from "./mainContainer";
import { Link } from "react-router-dom";
import Lockslider from "../Layout/Lockslider";
import CustomToools from "./multiTab";
import { Avatar, Grid } from "@mui/material";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#fff",
  width: "100%",
}));

interface DrawerProps {
  open: boolean;
}

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
    },
  }),
  ...(!open && {
    width: `calc(${theme.spacing(7)} + 1px)`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    "& .MuiDrawer-paper": {
      width: `calc(${theme.spacing(7)} + 1px)`,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
  }),
}));

const Playground: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Open sidebar when hovering over the Drawer
  const handleMouseEnterDrawer = () => {
    setOpen(true);
  };

  const handleMouseEnterMainContent = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* //header */}
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={smapleAiIcon} alt="SimplAI Logo" className="logo" />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ color: "rgb(96, 46, 223)" }}
              >
                Sample Ai
              </Typography>
            </div>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <CiCircleQuestion size={24} style={{ color: "" }} />
              </IconButton>
              <IconButton>
                <TbGridDots size={24} style={{ color: "rgb(96, 46, 223)" }} />
              </IconButton>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ height: "30px", mx: 2, mt: "16px" }}
            />

            <div className="user-initials">Mt</div>
          </Toolbar>
        </AppBar>

        {/* sidebar */}
       <Drawer
          variant="permanent"
          open={open}
          onMouseEnter={handleMouseEnterDrawer}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "Playground", "Tools", "Agent"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={Link}
                  to={
                    index === 0
                      ? "/home"
                      : index === 1
                      ? "/playground"
                      : "/tools"
                  } // Ensure correct paths
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 && <BsHouseDoor size={20} />} {/* Home icon */}
                    {index === 1 && <BsChatDots size={20} />} {/* Chat icon */}
                    {index === 2 && <HiOutlineSquaresPlus size={20} />}{" "}
                    {/* Tools icon */}
                    {index === 3 && <FaLaptopHouse />}{" "}
                    {/* Person on Laptop icon */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              border: "2px solid #ccc",
              width: "500px",
              height: "40px",
              position: "absolute",
              bottom: "1px",
              left: "1px",
              borderRadius: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="action"
              sx={{
                // circular
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#888",
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              {/* <RiGhostSmileFill size={20} /> */}
              <Lockslider />
            </IconButton>
          </Box>
        </Drawer>
 
          <DrawerHeader />
        </Box>
      
      <Box sx={{ overflow: "hidden" }}>
       
      </Box>

      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
            borderRadius: 1,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Left Side */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#EFF3F9",
                  fontSize: 16,
                }}
              >
                {/* Add SVG or icon inside */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  {/* Add your path here */}
                  <path
                    d="M13.875 5.9375H4.125C3.29657 5.9375 2.625 6.64638 2.625 7.52083V15.8333C2.625 16.7078 3.29657 17.4167 4.125 17.4167H13.875C14.7034 17.4167 15.375 16.7078 15.375 15.8333V7.52083C15.375 6.64638 14.7034 5.9375 13.875 5.9375Z"
                    fill="#EFF3F9"
                  />
                  {/* Add more paths as needed */}
                </svg>
              </Avatar>
              <Typography variant="body1" noWrap>
                Title or Content Here
              </Typography>
            </Box>
          </Box>

          {/* Body Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Description or Additional Content Goes Here
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>

    </>
  );
};

export default Playground;
