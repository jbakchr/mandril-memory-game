import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import _ from "lodash";

import { GameCard } from "./GameCard";

import data from "../data/data.json";

export const GameGrid = () => {
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    let cards = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < 2; j++) {
        cards.push({
          imgUrl: data[i],
          selected: false,
        });
      }
    }
    cards = _.shuffle(cards);

    setGameCards(cards);
  }, []);

  const onCardClick = (card) => {
    // When a card is clicked set its 'selected' property to 'true'
    const cards = [...gameCards];
    cards[card.position] = {
      ...card,
      selected: true,
    };
    setGameCards(cards);
  };

  const renderGameCards = () => {
    return gameCards.map((card, index) => {
      return <GameCard key={index} card={card} onCardClick={onCardClick} />;
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
