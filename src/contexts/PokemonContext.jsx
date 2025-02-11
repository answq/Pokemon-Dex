import React, { createContext } from "react";
import { useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //포켓몬 추가
  const addPokemon = (addPokemon) => {
    console.log(addPokemon);
    if (
      selectedPokemon.some((prevSelected) => prevSelected.id === addPokemon.id)
    ) {
      alert("중복된 포켓몬입니다!");
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택할 수 있습니다.");
      return;
    }
    setSelectedPokemon((prevSelected) => [...prevSelected, addPokemon]);
  };

  //포켓몬 삭제
  const removePokemon = (removePokemon) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter(
        (prevSelected) => prevSelected.id !== removePokemon.id
      )
    );
  };

  const pokemonContext = {
    selectedPokemon,
    addPokemon,
    removePokemon,
  };
  return (
    <PokemonContext.Provider value={pokemonContext}>
      {children}
    </PokemonContext.Provider>
  );
};
