import { TextField, InputAdornment } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

interface ToolSearchProps {
  onSearch: (searchText: string) => void;
}

const ToolSearch: React.FC<ToolSearchProps> = ({ onSearch }) => {
  return (
    <TextField
      placeholder="Search tools..."
      sx={{ marginBottom: "16px", width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded sx={{ marginLeft: "20px" }} />
          </InputAdornment>
        ),
        sx: { height: "40px", padding: "0px" },
      }}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default ToolSearch;
