import React, { createContext } from "react";

const PokemonContext = createContext({
  selectedPokemon: [],
  addPokemon: (pokemon, id) => {},
  removePokemon: (pokemon, id) => {},
});

export default PokemonContext;
