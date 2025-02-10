import React from "react";
import Card from "./Card";
import { styled } from "styled-components";

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  font-size: x-small;
  border-radius: 5%;
  cursor: pointer;
`;

const MyMon = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  padding-bottom: 10px;
  margin: 10px;
`;

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <Card>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.map((pokemon) => {
        return (
          <MyMon key={pokemon.id}>
            <img src={pokemon.img_url} />
            <p>{pokemon.korean_name} </p>
            <DeleteButton
              onClick={() => {
                removePokemon(pokemon);
              }}
            >
              삭제
            </DeleteButton>
          </MyMon>
        );
      })}
    </Card>
  );
};

export default Dashboard;
