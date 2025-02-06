import React from "react";
import { useState } from "react";
import MOCK_DATA from "../assets/mock";
import { useState } from "react";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //포켓몬 추가
  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택할 수 있습니다.");
    } else {
      setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
    }
  };

  //포켓몬 삭제
  const removePokemon = (pokemon) => {
    setSelectedPokemon((prevSelected) => prevSelected.filter());
  };
  return <div>Dex</div>;
};

export default Dex;
