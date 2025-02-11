import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../assets/mock";
import { PokemonProvider } from "../contexts/PokemonContext";

const Dex = () => {
  return (
    <PokemonProvider>
      <Dashboard />
      <PokemonList PokemonList={MOCK_DATA} />
    </PokemonProvider>
  );
};

export default Dex;
