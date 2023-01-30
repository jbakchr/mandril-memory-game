import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    let cards = [];
    for (let i = 0; i < 4; i++) {
      const imgUrl = i % 2 === 0 ? "fisserul_lohman.jpeg" : "wandy_skæg.jpeg";
      cards.push({ position: i, imgUrl, selected: false });
    }
    setGameCards(cards);
  }, []);

  const renderGameCards = () => {
    return gameCards.map((card) => {
      return <GameCard key={card.position} />;
    });
  };

  console.log("game cards:", gameCards);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderGameCards()}
      </Grid>
    </Box>
  );
};
