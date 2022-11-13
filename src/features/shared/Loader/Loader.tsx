import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Stack, Box } from "@mui/material";

export function Loader () {

  const LoadingBox: React.FC = () => {
    return (
    <Stack spacing={1}>
      <Box sx={{display: "flex", m: 3, p: 4, boxShadow: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)", borderRadius: "8px"}}>
        <Skeleton animation="wave" variant="circular" width={60} height={60} sx={{m: 2}}/>
        <Skeleton animation="wave" variant="rectangular" width={"90%"} height={60} sx={{m: 2}}/>
      </Box>
    </Stack>
  )};

  return (
    <>
      <LoadingBox/>
      <LoadingBox/>
      <LoadingBox/>
    </>
  );
};
