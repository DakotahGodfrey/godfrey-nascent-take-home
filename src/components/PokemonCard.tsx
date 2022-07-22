import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pokemon } from "types";

const PokemonCardContainer = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-around;
  img {
    object-fit: contain;
    flex-shrink: 2;
    min-width: 100px;
    max-width: 250px;
    padding: 32px;
  }
  > div {
    flex-shrink: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      text-transform: capitalize;

      margin: 8px 0;
      font-size: 18px;
      span {
        font-weight: 600;
      }
    }
    .options {
      button {
        background-color: ${(props) => props.theme.alert};
      }
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
      gap: 16px;
    }
    .choose {
      background-color: ${(props) => props.theme.success};
    }
  }
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
        <div>
          <p>
            <span>Pokedex Entry:</span> {pokemon.id}
          </p>
          <p>
            <span>Name:</span> {pokemon.name}
          </p>
        </div>

        {!isChosen && handleChooseClick ? (
          <button className='choose' onClick={() => handleChooseClick(pokemon)}>
            I Choose You
          </button>
        ) : isChosen && setFreeClick ? (
          <div className='options'>
            <button onClick={() => setFreeClick()}>Set Free</button>
            <Link to={"/confirm"}>Next</Link>
          </div>
        ) : null}
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
