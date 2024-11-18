import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import {
  ArrowDownward,
  SearchRounded,
  Add,
  CloseOutlined,

} from "@mui/icons-material";
import Playground from "./playground";
import SideDrawer from "../components/Layout";


function Tools() {
  const [value, setValue] = useState(0);
  const [templateValue, setTemplateValue] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [tools, setTools] = useState([]); // State to hold the list of tools
  const [toolName, setToolName] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [profileFile, setProfileFile] = useState(null); // State for file upload

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setTemplateValue(null);
  };

  const handleTemplateChange = (index: number) => {
    setTemplateValue(index);
  };

  const templateContent = {
    0: Array.from({ length: 6 }, (_, index) => ({
      title: `Tool ${index + 1}`,
      description: `Description for Tool ${index + 1} in All Templates`,
    })),
    1: Array.from({ length: 6 }, (_, index) => ({
      title: `Research Tool ${index + 1}`,
      description: `Description for Research Tool ${index + 1}`,
    })),
    2: Array.from({ length: 6 }, (_, index) => ({
      title: `Sales Tool ${index + 1}`,
      description: `Description for Sales Tool ${index + 1}`,
    })),
    3: Array.from({ length: 6 }, (_, index) => ({
      title: `Healthcare Tool ${index + 1}`,
      description: `Description for Healthcare Tool ${index + 1}`,
    })),
    4: Array.from({ length: 6 }, (_, index) => ({
      title: `Media & Entertainment Tool ${index + 1}`,
      description: `Description for Media & Entertainment Tool ${index + 1}`,
    })),
    5: Array.from({ length: 6 }, (_, index) => ({
      title: `Customer Support Tool ${index + 1}`,
      description: `Description for Customer Support Tool ${index + 1}`,
    })),
    6: Array.from({ length: 6 }, (_, index) => ({
      title: `Travel Tool ${index + 1}`,
      description: `Description for Travel Tool ${index + 1}`,
    })),
    7: Array.from({ length: 6 }, (_, index) => ({
      title: `HR Tool ${index + 1}`,
      description: `Description for HR Tool ${index + 1}`,
    })),
    8: Array.from({ length: 6 }, (_, index) => ({
      title: `Marketing Tool ${index + 1}`,
      description: `Description for Marketing Tool ${index + 1}`,
    })),
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setToolName("");
    setToolDescription("");
    setProfileFile(null);
  };

  const handleCreateTool = () => {
    handleCloseModal();
  };

  return (
    <>
      {/* <Playground /> */}
      <SideDrawer />
      <Box sx={{ overflow: "hidden",backgroundColor:"" }}>
        <Typography
          variant="h4"    
        
          gutterBottom
          sx={{ fontSize: "22px", fontWeight: "700", marginLeft: "75px" }}
        >
          Tools
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: "400", marginLeft: "75px" }}
        >
          Advance your LLM development process with robust tools designed for
          scaling from initial demos to full-scale production.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "20px", marginLeft: "65px", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "divider",
            overflow: "hidden",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#722ED1",
                fontSize: "2px",
              },
            }}
          >
            <Tab
              label="My Tools"
              sx={{
                color: value === 0 ? "#722ED1" : "inherit",
                "&.Mui-selected": {
                  color: "#722ED1",
                },
              }}
            />
            <Tab
              label="Tool Templates"
              sx={{
                color: value === 1 ? "#722ED1" : "inherit",
                "&.Mui-selected": {
                  color: "#722ED1",
                },
              }}
            />
          </Tabs>

          <Box sx={{ gap: "1rem", display: "flex", height: "38px" }}>
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                backgroundColor: "#722ED1",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#5a1d9b",
                },
                padding: "10px 20px",
              }}
            >
              <Add sx={{ marginRight: "8px" }} />
              Create Tool
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                "&:hover": {
                  backgroundColor: "#5a1d9b",
                },
                padding: "10px 20px",
              }}
            >
              <ArrowDownward />
              Import Tool
            </Button>
          </Box>
        </Box>
      </Box>

      {value === 0 && (
        <Box sx={{ padding: "20px 65px" }}>
          <TextField
            placeholder="Search tools..."
            sx={{
              marginBottom: "16px",
              width: "100%",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5a1d9b",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded sx={{ marginLeft: "20px" }} />
                </InputAdornment>
              ),
              sx: {
                height: "40px",
                padding: "0px",
              },
            }}
          />
          <Grid container spacing={2}>
            {tools.map((tool, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">{tool.name}</Typography>
                  <Typography variant="body2">{tool.description}</Typography>
                  {tool.file && (
                    <Box sx={{ marginTop: "10px" }}>
                      <img
                        src={URL.createObjectURL(tool.file)}
                        alt={tool.file.name}
                        style={{ width: "100%", borderRadius: "4px" }}
                      />
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {value === 1 && (
        <Box sx={{ padding: "20px 65px" }}>
          <Box sx={{ display: "flex", gap: "18px", marginBottom: 2 }}>
            {[
              "All",
              "Research",
              "Sales",
              "Healthcare",
              "Media & Entertainment",
              "Customer Support",
              "Travel and Hospitality",
              "HR",
              "Marketing",
            ].map((label, index) => (
              <Box
                key={index}
                onClick={() => handleTemplateChange(index)}
                sx={{
                  padding: "2px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor:
                      templateValue !== index ? "#f5f5f5" : "#EDE7F6",
                    padding: "6px",
                    borderRadius: 1,
                    border:
                      templateValue === index
                        ? "1px solid #722ED1"
                        : "1px solid #ccc",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: templateValue === index ? "#722ED1" : "inherit",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Grid container spacing={2}>
            {(templateContent[templateValue || 0] || []).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    padding: "16px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "1rem",
            wordWrap: "break-word",
          }}
        >
          Create New Tool
        </DialogTitle>

        <IconButton
          edge="end"
          color="default"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: "28px",
            top: "8px",
          }}
        >
          <CloseOutlined />
        </IconButton>
        <label
          htmlFor="tool_icon"
          title="Tool icon (Optional)"
          style={{
            display: "block",
            marginLeft: "23px",
            fontSize: "14px",
            fontWeight: "normal",
          }}
        >
          Tool icon (Optional)
        </label>
        <div>
          <Box
            sx={{
              display: "flex",
              marginLeft: "12px",
              height: "100px",
              margin:"12px",
marginBottom:"8px",
            }}
          >
            <Button
              variant="outlined"
              component="label"
              sx={{
                borderStyle: "dashed",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                padding: "8px",
                marginLeft: "14px",
                minWidth: "120px",
              }}
            >
               <input
              type="file"
              hidden
              onChange={(e) => setProfileFile(e.target.files[0])}
            />
              <IconButton color="primary" sx={{ fontSize: "40px" }}>
                <Add />
              </IconButton>
            </Button>
            <Box
              sx={{



              }}
            >
              <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center", marginTop:"16px"}}>
                <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "12px" }}>
                  Maximum Size:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "500", fontSize: "12px", marginLeft: "8px" }}
                >
                  1 Mb
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", marginLeft: "80px", marginTop: "8px" }}>
                <Typography variant="body1" sx={{ fontWeight: "700", fontSize: "12px" }}>
                  Supported formats:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "12px", marginLeft: "8px" }}>
                  .jpg , .png, .jpeg
                </Typography>
              </Box>

            </Box>
          </Box>

        </div>
        <DialogContent> 
        <label
          htmlFor="tool_icon"
          title="Tool icon (Optional)"
          style={{
            display: "block",
            marginLeft: "",
            fontSize: "14px",
            fontWeight: "normal",
          }}
        >
          Tools
        </label>
          <TextField
            label=""
            fullWidth
            value={toolName}
            onChange={(e) => setToolName(e.target.value)}
             sx={{
              marginBottom: "16px",
              width: "100%",
              borderRadius:"25px solid black",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                
                border:"1px solid #d0bbed",
                borderColor: "purple",  // Custom border color on hover
              },
            }}
          />   
                  <label
          htmlFor="tool_icon"
          title="Tool icon (Optional)"
          style={{
            display: "block",
            marginLeft: "",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight:"22px"
          }}
        >
          Categories
        </label>
          <TextField
       
          
          fullWidth
          value={toolName}
          onChange={()=>console.log("hey fellows")}
          sx={{
            marginBottom: "16px",
            width: "100%",
            borderRadius:"25px solid black",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              
              border:"1px solid #d0bbed",
              borderColor: "purple",  // Custom border color on hover
            },
          }}
        /> 
           <label
          htmlFor="tool_icon"
          title="Tool icon (Optional)"
          style={{
            display: "block",
            marginLeft: "",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight:"22px"
          }}
        >
        Description
        </label>
          <TextField
            label=""
            fullWidth
            multiline
            
            rows={4}
            value={toolDescription}
            onChange={(e) => setToolDescription(e.target.value)}
             sx={{
              marginBottom: "16px",
              width: "100%",
              borderRadius:"25px solid black",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                
                border:"1px solid #d0bbed",
                borderColor: "purple",  // Custom border color on hover
              },
            }}
          />
       
        </DialogContent>
  
 <DialogActions>
 <Box 
  sx={{
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: "14px",
    width: "100%", // Ensure buttons are spread across full width
    boxSizing: "border-box",
  }}
>
  {/* Cancel Button */}
  <Button
    sx={{ 
      fontSize: "16px",
      lineHeight: "1.5",
      height: "44px",
      marginLeft:"12px",
      padding: "6px 32px",
      color: "#222",
      backgroundColor: "#fff",
      border:"1px solid purple",
      boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#d0bbed",
      },
    }} 
    onClick={handleCloseModal} 
    color="primary"
  >
    Cancel
  </Button>

  {/* Create Button */}
  <Button
    sx={{
      fontSize: "16px",
      lineHeight: "1.5",
      height: "44px",
      padding: "6px 32px",
      marginRight:"12px",
      backgroundColor: "#722ED1",
      color: "#fff",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#5a1d9b",
      },
    }}
    onClick={handleCreateTool}
    color="primary"
  >
    Create
  </Button>
</Box>

        </DialogActions>
        
      </Dialog>
    </>
  );
}

export default Tools;
