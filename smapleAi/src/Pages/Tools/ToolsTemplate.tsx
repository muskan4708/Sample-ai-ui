import { Grid, Box, Typography } from "@mui/material";

interface ToolTemplate {
  title: string;
  description: string;
}

interface ToolTemplateListProps {
  templateContent: ToolTemplate[];
}

const ToolTemplateList: React.FC<ToolTemplateListProps> = ({ templateContent }) => {
  return (
    <Grid container spacing={2}>
      {templateContent.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ padding: "16px", borderRadius: "8px", backgroundColor: "#f5f5f5", boxShadow: 1, textAlign: "center" }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolTemplateList;
