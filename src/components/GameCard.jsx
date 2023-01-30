import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import logo from "../assets/card_logo.jpeg";

export const GameCard = ({ card }) => {
  console.log(card);

  const onCardClick = () => {
    console.log("card clicked!");
  };

  return (
    <Grid xs={2}>
      <Paper
        sx={{
          height: "150px",
          borderRadius: "25px",
          background: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          ":hover": {
            transform: "scale(1.05)",
            transition: "transform 500ms",
          },
        }}
        elevation={15}
        onClick={onCardClick}
      />
    </Grid>
  );
};
