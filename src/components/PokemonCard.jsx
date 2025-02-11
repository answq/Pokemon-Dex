import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const MainCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 28px;
  place-items: center;
`;

const MainCard = styled.div`
  background-color: #fcedd8;
  border-radius: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 3px 3px #7e7d7d;
  cursor: pointer;
  padding-bottom: 10px;
  margin: 10px;
`;

const PokemonImage = styled.img`
  margin-top: 1rem;
`;

const PokemonName = styled.p`
  font-weight: bold;
  font-size: small;
`;

const PokemonNumber = styled.p`
  font-size: x-small;
  color: grey;
  margin-bottom: 1rem;
`;
const AddButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5%;
  border-color: red;
  font-size: x-small;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #881616;
  }
`;

const PokemonCard = ({ pokemon, buttonName }) => {
  const { img_url, korean_name, id } = pokemon;
  const pContext = useContext(PokemonContext);

  //포켓몬 추가
  const addPokemonHandler = () => {
    pContext.addPokemon(pokemon, id);
  };

  const navigate = useNavigate();

  return (
    <MainCardWrapper>
      <MainCard onClick={() => navigate(`/detail/${id}`)}>
        <PokemonImage src={img_url} />
        <PokemonName>{korean_name}</PokemonName>
        <PokemonNumber>{id}</PokemonNumber>
        <AddButton
          onClick={(e) => {
            e.stopPropagation(); //버블링 방지
            addPokemonHandler();
          }}
        >
          추가
        </AddButton>
      </MainCard>
    </MainCardWrapper>
  );
};

export default PokemonCard;
