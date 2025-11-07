import React from "react";
import { Box } from "@mui/material";

const CentralizedBox = ({ children, sx = {}, ...props }) => {
  return (
    <Box
      sx={{
        mx: { xs: 1, sm: 3, md: 3, lg: 10 },
        ...sx, // allow override
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CentralizedBox;
