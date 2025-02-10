import React from "react";
import { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../assets/mock";

const Dex = () => {
  //selectedPokemon의 기본값을 빈 배열로 설정
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //포켓몬 추가
  const addPokemon = (addPokemon) => {
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

  return (
    <>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList PokemonList={MOCK_DATA} addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
