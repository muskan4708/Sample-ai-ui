import { Tabs, Tab } from "@mui/material";

interface ToolTabsProps {
  value: number;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}

const ToolTabs: React.FC<ToolTabsProps> = ({ value, handleChange }) => {
  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="My Tools" />
      <Tab label="Tool Templates" />
      <Tab label="Favourite tools"/>
    </Tabs> 
    
  );
};

export default ToolTabs;
