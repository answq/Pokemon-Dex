import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../assets/mock";

const PokemonList = () => {
  {
    MOCK_DATA.map(() => {
      return <PokemonCard />;
    });
  }
};

export default PokemonList;
