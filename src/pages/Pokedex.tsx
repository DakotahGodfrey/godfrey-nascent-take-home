import Container from "components/Container";
import PokemonCard from "components/PokemonCard";
import React, { useState, useEffect } from "react";
import { POKEMON_API } from "utils/endpoints";

const Pokedex: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>();

  useEffect(() => {
    const getPokemonByName = async (name: string) => {
      const response = await fetch(POKEMON_API + name);
      const data = await response.json();
      if (data !== "Not Found") {
        setResult(data);
      }
    };
    if (query) {
      getPokemonByName(query);
      console.log(result);
    }
  }, [query]);

  return (
    <Container>
      <h1>Who's your favourite Pokémon?</h1>
      {/* Selected Pokémon */}
      <PokemonCard pokemon={result} />
      {/* Search Input */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
          type='search'
          name='search'
          id='search'
          onChange={(e) => setQuery(e.target.value)}
          required
          value={query}
        />
      </form>
      {/* Results */}

      {/* Options */}
    </Container>
  );
};

export default Pokedex;
