import { Box, Typography } from "@mui/material";
function MainContainer() {
  return (
    <>
      <Box
        sx={{
          marginTop: "60px",
          gap: "12px",
          lineHeight: "18px",
          marginLeft: "50px",
        }}
      >
        <Typography
          sx={{
            marginBottom: 2,
            fontSize: "42px",
            fontWeight: 700,
            lineHeight: "normal",
            display: "flex",
            alignItems: "center",
          }}
        >
          Hii, Muskan Tomar
        </Typography>
        <Typography
          sx={{
            marginBottom: 2,
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em",
            fontFamily: "sans-serif",
          }}
        >
          Explore our platform to design, deploy, and manage AI-driven applications customized for your specific needs.
      
        </Typography>
      </Box>
    </>
  );
}

export default MainContainer;
