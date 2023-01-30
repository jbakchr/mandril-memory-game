import React from "react";
import { Box, Grid } from "@mui/material";

import { GameCard } from "./GameCard";

export const GameGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <GameCard />
        <GameCard />
      </Grid>
    </Box>
  );
};
