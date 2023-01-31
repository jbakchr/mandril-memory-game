import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import logo from "../assets/card_logo.jpeg";

export const GameCard = ({ card, onCardClick }) => {
  const onCardClickHandler = () => {
    onCardClick(card);
  };

  const img = card.selected ? require(`../assets/${card.imgUrl}`) : logo;

  return (
    <Grid xs={2}>
      <Paper
        sx={{
          height: "150px",
          borderRadius: "25px",
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          ":hover": {
            transform: "scale(1.05)",
            transition: "transform 500ms",
          },
        }}
        elevation={15}
        onClick={onCardClickHandler}
      />
    </Grid>
  );
};
