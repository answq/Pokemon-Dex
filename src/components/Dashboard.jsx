import React from "react";
import Card from "./Card";
import { styled } from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  font-size: x-small;
  border-radius: 5%;
  border-color: red;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #881616;
  }
`;

const MyMon = styled.div`
  border-radius: 5%;
  padding-bottom: 10px;
  margin-top: 50px;
`;

const MymonHeader = styled.h1`

  text-align: center;
  color: #d62206;
`;

const Mymoncontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  justify-content: flex-start;
`;

const MymonName = styled.p`
  font-weight: bold;
  font-size: small;
`;
const MymonNumber = styled.p`
  font-size: x-small;
  color: grey;
  margin-bottom: 1rem;
`;

const Dashboard = () => {
  const pContext = useContext(PokemonContext);
  const selectedPokemon = pContext.selectedPokemon ?? [];
  console.log(pContext.selectedPokemon);
  //포켓몬 삭제
  const removePokemonHandler = () => {
    pContext.removePokemonHandler(pokemon, id);
  };

  return (
    <Card>
      <MymonHeader>나만의 포켓몬</MymonHeader>
      {selectedPokemon.map((pokemon) => {
        return (
          <Mymoncontainer>
            <MyMon>
              <img src={pokemon.img_url} />
              <MymonName>{pokemon.korean_name} </MymonName>
              <MymonNumber>{pokemon.id}</MymonNumber>
              <RemoveButton
                onClick={() => {
                  removePokemonHandler();
                }}
              >
                삭제
              </RemoveButton>
            </MyMon>
          </Mymoncontainer>
        );
      })}
    </Card>
  );
};

export default Dashboard;
