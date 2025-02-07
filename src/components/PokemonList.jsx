import PokemonCard from "./PokemonCard";

const PokemonList = ({ PokemonList, addPokemon }) => {
  return PokemonList.map((pokemon) => {
    return (
      <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
    );
  });
};

export default PokemonList;
