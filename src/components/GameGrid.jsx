import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import _ from "lodash";

import { GameCard } from "./GameCard";

import data from "../data/data.json";
import { Container } from "@mui/system";

export const GameGrid = () => {
  const [gameCards, setGameCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    // When the game first mounts we create an array of cards the length of
    // 2 times that of 'data'
    let cards = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < data.length; j++) {
        cards.push({
          imgUrl: data[j],
          selected: false,
          cardFound: false,
        });
      }
    }

    // Then we shuffle the cards to create some randomness in the way they'll
    // be layed out
    cards = _.shuffle(cards);

    // And then we add a 'position' property to each card as this will make it
    // much easier to locate the specific cards later on in the game
    cards = cards.map((card, index) => {
      return {
        ...card,
        position: index,
      };
    });

    console.log(cards);

    // Lastly we set the cards on state so the can get rendered and the game begin
    setGameCards(cards);
  }, []);

  const onCardClick = (card) => {
    console.log(card);
    // When a card is clicked we first check if has already been clicked
    // If so we just return as it doesn't make sense to do anything further
    if (gameCards[card.position].selected) {
      return;
    }

    // TODO: The following two lines of code could be extracted to a function that could return an object with both the updated card and selection of cards which could then just be destructured in order to minimize code a bit (if you can find a good name for the function ..)

    // If the card hasn't been clicked then we first update the cards 'selected' property
    card.selected = true;

    // Then we add the clicked card to the list of selected cards
    const selectionOfCards = [...selectedCards, card];
    console.log(selectionOfCards);

    // Then we check if the length of the 'selectedCards' is equal to 2 as we will then need to check
    // if the 2 selected cards are the same or not
    if (selectionOfCards.length === 2) {
      // If the user has selected 2 cards then we first check if the 2 cards holds the same image
      if (selectionOfCards[0].imgUrl === card.imgUrl) {
        console.log("cards are the same!!!");
        // If the 2 cards are the same then we just update the game cards to reflect this
        const cards = [...gameCards];
        cards[selectionOfCards[0].position].cardFound = true;
        cards[selectionOfCards[1].position].cardFound = true;
        setSelectedCards([]);
        setGameCards(cards);
      } else {
        // TODO: This update of unequal cards should be refactored to its own function
        // if the cards aren't the same then we should first just show the image of the selected card which
        // we do by just updating the list of cards
        const cards = [...gameCards];
        cards[card.position] = card;
        setGameCards(cards);

        // But since the cards aren't the same then we just sort of wait for 1.5 seconds to turn both 2 cards
        // over again
        setTimeout(() => {
          cards[selectionOfCards[0].position].selected = false;
          cards[selectionOfCards[1].position].selected = false;
          console.log("cards:", cards);
          setSelectedCards([]);
          setGameCards(cards);
        }, 1500);
      }
    } else {
      // If the length of the selected cards isn't equal to 2 then that means that the user hasn't selected
      // 2 cards just yet and so it is still the users turn to select another card.
      // Hence we first update the list of cards in order to display the selected cards image when the list of
      // cards is rendered again
      const cards = [...gameCards];
      cards[card.position] = card;

      // And finally we then set state
      setSelectedCards(selectionOfCards);
      setGameCards(cards);
    }
  };

  const renderGameCards = () => {
    return gameCards.map((card) => {
      return (
        <GameCard key={card.position} card={card} onCardClick={onCardClick} />
      );
    });
  };

  console.log("render cards");

  return (
    <Container maxWidth="md" style={{ marginTop: "15px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {renderGameCards()}
        </Grid>
      </Box>
    </Container>
  );
};
