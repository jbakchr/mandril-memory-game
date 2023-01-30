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

  const onCardClick = (card) => {
    // When a card is clicked set its 'selected' property to 'true'
    const cards = [...gameCards];
    cards[cards.position] = {
      ...card,
      selected: true,
    };
    console.log("cards:", cards);
  };

  const renderGameCards = () => {
    return gameCards.map((card) => {
      return (
        <GameCard key={card.position} card={card} onCardClick={onCardClick} />
      );
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderGameCards()}
      </Grid>
    </Box>
  );
};
