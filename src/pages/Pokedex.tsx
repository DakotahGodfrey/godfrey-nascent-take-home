import Container from "components/Container";
import PokemonCard from "components/PokemonCard";
import React, { useState, useEffect } from "react";
import { Pokemon } from "types";
import { POKEMON_API } from "utils/endpoints";
import { selectUser, updatePokemon, clearPokemon } from "app/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

const Pokedex: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>();
  const [chosenOne, setChosenOne] = useState<Pokemon | null>(null);
  const { pokemon } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

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
    }
    if (pokemon) {
      setChosenOne(pokemon);
    }
  }, [query, pokemon]);

  const handleChooseClick = (pokemon: Pokemon) => {
    setChosenOne(pokemon);
    dispatch(updatePokemon(pokemon));
  };
  const setFreeClick = () => {
    setChosenOne(null);
    dispatch(clearPokemon());
  };

  return (
    <Container>
      <h1>Who's your favourite Pokémon?</h1>
      {chosenOne && (
        <PokemonCard isChosen setFreeClick={setFreeClick} pokemon={chosenOne} />
      )}
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
      {result && (
        <PokemonCard handleChooseClick={handleChooseClick} pokemon={result} />
      )}
    </Container>
  );
};

export default Pokedex;
