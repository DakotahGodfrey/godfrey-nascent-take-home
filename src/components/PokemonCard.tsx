import styled from "styled-components";
import { Pokemon } from "types";

const PokemonCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export interface IPokemonCardProps {
  pokemon: Pokemon;
  isChosen?: boolean;
  handleChooseClick?: (pokemon: Pokemon) => void;
  setFreeClick?: () => void;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
  isChosen,
  handleChooseClick,
  setFreeClick,
}) => {
  return (
    <PokemonCardContainer>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=''
      />
      <div>
        <h2>
          <span>#:{pokemon.id}</span> <span>Name: {pokemon.name}</span>
        </h2>
        <p>Bio</p>
        {!isChosen && handleChooseClick ? (
          <button onClick={() => handleChooseClick(pokemon)}>
            I Choose You
          </button>
        ) : isChosen && setFreeClick ? (
          <button onClick={() => setFreeClick()}>Set Free</button>
        ) : null}
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
