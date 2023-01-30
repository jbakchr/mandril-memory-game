import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import logo from "../assets/card_logo.jpeg";

export const GameCard = () => {
  return (
    <Grid xs={2}>
      <Paper
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
          borderRadius: "25px",
          background: `url(${logo})`,
        }}
        elevation={5}
      />
    </Grid>
  );
};
