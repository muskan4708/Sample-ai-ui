import { Box, IconButton, Typography } from "@mui/material";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { PiFolderThin } from "react-icons/pi";




function Cards() {
  return (
    <>
    <Box
sx={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  flexWrap: "wrap", 
  gap: "12px",
  marginTop: "84px",
  width:"100",
  lineHeight:"18px"
   
}}
>
{/* First Container */}
<Box
   sx={{
    display: "flex",
    flexDirection: "row", 
    alignItems: "flex-start", 
    padding: "17px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",  
    width: "45%",
    height: "auto",
    backgroundColor: "#ffff",
    border: "1px solid grey",
    gap:"2px",
    transition: "border 0.3s ease", // Smooth transition effect for the hover
    "&:hover": {
      border: "1px solid rgb(96, 46, 223)", // Border on hover
    },
  }}
>
  <IconButton
    sx={{
      backgroundColor: "rgb(247, 240, 255)",
      width: "40px", 
      height: "40px", 
      marginRight: "10px",
      alignSelf: "flex-start",
      color:"black",
      borderRadius: "6px", 
    }}
  >
    <HiOutlineSquaresPlus size={20} />{" "}
    {/* Increased icon size by 4px */}
  </IconButton>

  <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft:"8px",
        gap:"5px"
      }}
  >
    <Typography
       sx={{
        fontSize: "16px",
        fontWeight: 500,
        color: "#333",
        lineHeight:"normal",
        cursor:"pointer"
      }}
    >
      Tools
    </Typography>
    <Typography
     sx={{
        marginTop: "5px", 
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "0.00938em",
        fontFamily: "sans-serif",
        color: "#666", 
      }}
    >
      Chains of actions, such as model calls and web scraping, that
      help streamline complex processes.
    </Typography>
  </Box>
</Box>

{/* Second Container */}
<Box
   sx={{
    display: "flex",
    flexDirection: "row", 
    alignItems: "flex-start", 
    padding: "17px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",  
    width: "45%",
    height: "auto",
    backgroundColor: "#ffff",
    border: "1px solid grey",
    transition: "border 0.3s ease", // Smooth transition effect for the hover
    "&:hover": {
      border: "1px solid rgb(96, 46, 223)", // Border on hover
    },
  }}
>
  <IconButton
    sx={{
        backgroundColor: "rgb(247, 240, 255)",
      width: "40px",
      height: "40px",
      marginRight: "10px", 
      alignSelf: "flex-start",
      borderRadius: "6px", 
      color:"black"
    }}
  >
    <HiOutlineSquaresPlus size={20} />{" "}
    {/* Increased icon size by 4px */}
  </IconButton>

  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft:"8px",
    gap:"5px"
  }}
  >
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 500,
        color: "#333",
        lineHeight:"normal",
        cursor:"pointer"
      }}
    >
     Agents
    </Typography>
    <Typography
       sx={{
        marginTop: "5px", 
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "0.00938em",
        fontFamily: "sans-serif",
        color: "#666", 
      }}
    >
     Conversational bots that can dynamically use tools to extend their capabilities.
    </Typography>
  </Box>
</Box>


{/* Third Container */}
<Box
  sx={{
    display: "flex",
    flexDirection: "row", 
    alignItems: "flex-start", 
    padding: "17px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",  
    width: "45%",
    height: "auto",
    backgroundColor: "#ffff",
    border: "1px solid grey",
    transition: "border 0.3s ease", // Smooth transition effect for the hover
    "&:hover": {
      border: "1px solid rgb(96, 46, 223)", // Border on hover
    },
  }}
>
  <IconButton
    sx={{
        backgroundColor: "rgb(247, 240, 255)",
      width: "40px",
      height: "40px",
      marginRight: "10px", 
      alignSelf: "flex-start",
      borderRadius: "6px",
      color:"black" 
    }}
  >
    <HiOutlineSquaresPlus size={20} />{" "}
    {/* Increased icon size by 4px */}
  </IconButton>

  <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft:"8px",
        gap:"5px"
      }}
  >
    <Typography
     sx={{
        fontSize: "16px",
        fontWeight: 500,
        color: "#333",
        lineHeight:"normal",
        cursor:"pointer"
      }}
    >
     Models
    </Typography>
    <Typography
      sx={{
        marginTop: "5px", // Adjust margin for better spacing
        fontWeight: 400,
        fontSize: "12px", // Adjust font size for a better fit
        lineHeight: "18px",
        letterSpacing: "0.00938em",
        fontFamily: "sans-serif",
        color: "#666", // Slightly lighter text color for better readability
      }}
    >
      Open and closed-source models suitable for all use cases.
    </Typography>
  </Box>
</Box>

{/* Fourth Container */}
<Box
   sx={{
    display: "flex",
    flexDirection: "row", 
    alignItems: "flex-start", 
    padding: "17px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",  
    width: "45%",
    height: "auto",
    backgroundColor: "#ffff",
    border: "1px solid grey",
    transition: "border 0.3s ease", // Smooth transition effect for the hover
    "&:hover": {
      border: "1px solid rgb(96, 46, 223)", // Border on hover
    },
  }}
>
  <IconButton
    sx={{
     backgroundColor: "rgb(247, 240, 255)",
      width: "40px", 
      height: "40px",
      marginRight: "10px", 
      alignSelf: "flex-start",
      borderRadius: "6px",
      color:"black" 
    }}
  >
   <PiFolderThin  size={20}/>
    {/* Increased icon size by 4px */}
  </IconButton>

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft:"8px",
      gap:"5px"
    }}
  >
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 500,
        color: "#333",
        lineHeight:"normal",
        cursor:"pointer"
      }}
    >
    Knowledge Bases
    </Typography>
    <Typography
      sx={{
        marginTop: "5px", // Adjust margin for better spacing
        fontWeight: 400,
        fontSize: "12px", // Adjust font size for a better fit
        lineHeight: "18px",
        letterSpacing: "0.00938em",
        fontFamily: "sans-serif",
        color: "#666", // Slightly lighter text color for better readability
      }}
    >
     Converts your enterprise data into a readily searchable database to power Retrieval-Augmented Generation (RAG) or enhance search experiences.
    </Typography>
  </Box>
</Box>
</Box>
    </>
  )
}

export default Cards
