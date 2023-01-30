import React from "react";
import { Box, Grid } from "@mui/material";

export const GameGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={1}>ost</Grid>
        <Grid xs={1}>ost</Grid>
      </Grid>
    </Box>
  );
};
