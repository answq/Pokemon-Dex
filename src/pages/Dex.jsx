import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../assets/mock";

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList PokemonList={MOCK_DATA} />
    </>
  );
};

export default Dex;
