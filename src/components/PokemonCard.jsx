import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonContext from "../contexts/PokemonContext";
import { useContext } from "react";

const MainCards = styled.div`
  width: 90%;
  background-color: orange;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  gap: 2px;
`;

const MainCard = styled.div`
  width: 50%;
  background-color: pink;
  text-align: center;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  const addPokemonHandler = () => {
    pContext.addPokemon(pokemon, id);
  };

  const removePokemonHandler = () => {
    pContext.removePokemon(pokemon, id);
  };

  const onClickEvent =
    buttonName === "추가" ? addPokemonHandler : removePokemonHandler;
  const navigate = useNavigate();

  return (
    <MainCards>
      <MainCard onClick={() => navigate(`/detail/${id}`)}>
        <PokemonImage src={img_url} />
        <PokemonName>{korean_name}</PokemonName>
        <PokemonNumber>{id}</PokemonNumber>
        <AddButton
          onClick={(e) => {
            e.stopPropagation(); //버블링 방지
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
