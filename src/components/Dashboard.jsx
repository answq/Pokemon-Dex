import React from "react";
import Card from "./Card";
import { styled } from "styled-components";
import { useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";

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
  width: 200%;
  height: 100%;
  background-color: white;
  border-radius: 5%;
  padding-bottom: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2%;
  text-align: center;
`;

const MymonHeader = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Mymoncontainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10rem;
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
  const selectedPokemon = [];

  return (
    <Card>
      <MymonHeader>나만의 포켓몬</MymonHeader>
      {selectedPokemon.map((pokemon) => {
        return (
          <Mymoncontainer>
            {" "}
            <MyMon>
              <img src={pokemon.img_url} />
              <MymonName>{pokemon.korean_name} </MymonName>
              <MymonNumber>{pokemon.id}</MymonNumber>
              <RemoveButton
                onClick={() => {
                  removePokemonHandler(pokemon);
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
