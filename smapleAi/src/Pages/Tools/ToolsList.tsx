import { Grid, Box, Typography } from "@mui/material";

interface Tool {
  name: string;
  description: string;
  file?: File;
}

interface ToolListProps {
  tools: Tool[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <Grid container spacing={2}>
      {tools.map((tool, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ padding: "16px", borderRadius: "8px", backgroundColor: "#f5f5f5", boxShadow: 1, textAlign: "center" }}>
            <Typography variant="h6">{tool.name}</Typography>
            <Typography variant="body2">{tool.description}</Typography>
            {tool.file && (
              <Box sx={{ marginTop: "10px" }}>
                <img src={URL.createObjectURL(tool.file)} alt={tool.file.name} style={{ width: "100%", borderRadius: "4px" }} />
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolList;
