// MultiTabs.tsx
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

interface MultiTabsProps {
  labels: string[];
  children: React.ReactNode[];
}

const MultiTabs: React.FC<MultiTabsProps> = ({ labels, children }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="multi-tabs" sx={{ "& .MuiTabs-indicator": { backgroundColor: "#722ED1" } }}>
        {labels.map((label, index) => (
          <Tab key={index} label={label} sx={{ color: value === index ? "#722ED1" : "inherit", "&.Mui-selected": { color: "#722ED1" } }} />
        ))}
      </Tabs>

      <Box sx={{ p: 3 }}>
        {children[value]}
      </Box>
    </Box>
  );
};

export default MultiTabs;
