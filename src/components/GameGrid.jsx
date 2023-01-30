import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    let cards = [];
    for (let i = 0; i < 4; i++) {
      cards.push({ position: i, character: "Mogens", selected: false });
    }
    setGameCards(cards);
  }, []);

  console.log("game cards:", gameCards);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <GameCard />
        <GameCard />
      </Grid>
    </Box>
  );
};
