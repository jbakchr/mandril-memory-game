import React from "react";
import { Container } from "@mui/material";

import { GameHeader } from "../components/GameHeader";

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <GameHeader />
    </Container>
  );
};
