import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const GameCard = () => {
  return (
    <Grid xs={2}>
      <Paper style={{ height: "150px", borderRadius: "25px" }} elevation={5}>
        Ost
      </Paper>
    </Grid>
  );
};
