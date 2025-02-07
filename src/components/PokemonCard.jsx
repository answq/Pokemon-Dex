import React, { useState } from "react";
import styled from "styled-components";

const MainCard = styled.div`
  width: 100%;
  background-color: pink;
  text-align: center;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MainCards = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 2px;
`;

const PokemonImage = styled.img`
  margin-top: 1rem;
`;

const PokemonName = styled.p`
  font-weight: bold;
  font-size: small;
  margin-bottom: 1rem;
`;

const PokemonNumber = styled.p`
  font-size: x-small;
  color: grey;
`;
const AddButton = styled.button`
  background-color: red;
  border-radius: 5%;
  font-size: x-small;
  cursor: pointer;
`;

const PokemonCard = (pokemon) => {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const { img_url, korean_name, id } = pokemon;
  //포켓몬 추가
  const addPokemon = (addPokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택할 수 있습니다.");
    } else {
      setSelectedPokemon((prevSelected) => [...prevSelected, addPokemon]);
    }
  };

  //포켓몬 삭제
  const removePokemon = (removePokemon) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter(
        (prevSelected) => prevSelected.id !== removePokemon.id
      )
    );
  };

  const onClickEvent = AddButton === "추가" ? addPokemon : removePokemon;

  return (
    <MainCards>
      <MainCard>
        <PokemonImage src={img_url} />
        <PokemonName>{korean_name}</PokemonName>
        <PokemonNumber>{id}</PokemonNumber>
        <AddButton
          onClick={() => {
            onClickEvent();
          }}
        >
          추가
        </AddButton>
      </MainCard>
    </MainCards>
  );
};

export default PokemonCard;
