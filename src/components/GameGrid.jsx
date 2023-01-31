import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import _ from "lodash";

import { GameCard } from "./GameCard";

import data from "../data/data.json";

export const GameGrid = () => {
  const [gameCards, setGameCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

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

  const onCardClick = (card, index) => {
    // When a card is clicked we first check if has already been clicked
    // If so we just return as it doesn't make sense to do anything further
    if (gameCards[index].selected) {
      return;
    }

    // If the card hasn't been clicked then we first update the cards 'selected' property
    card.selected = true;

    // Then we add the clicked card to the list of selected cards
    const selectionOfCards = [...selectedCards, card];
    console.log("selection of cards:", selectionOfCards);

    // Then we check if the length of the 'selectedCards' is equal to 2 as we will then need to check
    // if the 2 selected cards are the same or not
    if (selectionOfCards.length === 2) {
      console.log("selections are the same");
    } else {
      // If the length of the selected cards isn't equal to 2 then that means that the user hasn't selected
      // 2 cards just yet and so it is still the users turn to select another card.
      // Hence we first update the list of cards in order to display the selected cards image when the list of
      // cards is rendered again
      const cards = [...gameCards];
      cards[index] = card;

      // And finally we then set state
      setSelectedCards(selectionOfCards);
      setGameCards(cards);
    }
  };

  const renderGameCards = () => {
    return gameCards.map((card, index) => {
      return (
        <GameCard
          key={index}
          card={card}
          cardIndex={index}
          onCardClick={onCardClick}
        />
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
