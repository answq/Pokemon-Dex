import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainCards = styled.div`
  width: 90%;
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
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
  margin-bottom: 1rem;
`;

const PokemonNumber = styled.p`
  font-size: x-small;
  color: grey;
`;
const AddButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5%;
  font-size: x-small;
  cursor: pointer;
`;

const PokemonCard = ({ pokemon, addPokemon }) => {
  const { img_url, korean_name, id } = pokemon;

  const navigate = useNavigate();
  return (
    <MainCards>
      <MainCard onClick={() => navigate("detail:id")}>
        <PokemonImage src={img_url} />
        <PokemonName>{korean_name}</PokemonName>
        <PokemonNumber>{id}</PokemonNumber>
        <AddButton
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </AddButton>
      </MainCard>
    </MainCards>
  );
};

export default PokemonCard;
