import { useState } from "react";

export default function RandomPokemon() {
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const [pokemonId, setPokemonId] = useState(
    Math.floor(Math.random() * 151) + 1
  );

  const getRandomPokemon = () => {
    setPokemonId(Math.floor(Math.random() * 151) + 1);
  };

  const pokeNum = Math.floor(Math.random() * 151) + 1

  return (
    <div>
      <h2>Get Random Pokémon</h2>
        <h4>Pokemon #{pokeNum}</h4>
      <img
        src={`${baseURL}${pokemonId}.png`}
        alt="Random Pokémon"
      />

      <br />

      <button onClick={getRandomPokemon}>
        Get Another Pokémon
      </button>
    </div>
  );
}
