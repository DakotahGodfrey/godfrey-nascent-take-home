import Container from "components/Container";
import PokemonCard from "components/PokemonCard";
import React, { useState, useEffect } from "react";
import { Pokemon } from "types";
import { POKEMON_API } from "endpoints";
import { selectUser, updatePokemon, clearPokemon } from "app/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import ProgressIndicator from "components/ProgessIndicator";

const Pokedex: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>();
  const [chosenOne, setChosenOne] = useState<Pokemon | null>(null);
  const { pokemon } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPokemonByName = async (name: string) => {
      const response = await fetch(POKEMON_API + name.toLowerCase());
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
    <>
      <ProgressIndicator step={2} />
      <main>
        <Container>
          <h1>Who's your favourite Pokémon?</h1>
          <h2>My Fave:</h2>
          {chosenOne && (
            <PokemonCard
              isChosen
              setFreeClick={setFreeClick}
              pokemon={chosenOne}
            />
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='control-group'>
              <label htmlFor='search'>Search</label>
              <input
                type='search'
                name='search'
                id='search'
                onChange={(e) => setQuery(e.target.value)}
                required
                placeholder='try "squirtle"'
                value={query}
              />
            </div>
          </form>
          <h3>Results:</h3>
          {result && (
            <PokemonCard
              handleChooseClick={handleChooseClick}
              pokemon={result}
            />
          )}
        </Container>
      </main>
    </>
  );
};

export default Pokedex;
