import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
