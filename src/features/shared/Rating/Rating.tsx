import React from "react";
import { Box, Rating } from "@mui/material";

export function RatingElement () {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};