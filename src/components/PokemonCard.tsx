import styled from "styled-components";
import { Pokemon } from "types";

const PokemonCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface IPokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon: { name, id, sprites },
}) => {
  return (
    <PokemonCardContainer>
      <img src={sprites.other["official-artwork"].front_default} alt='' />
      <div>
        <h2>
          <span>#:{id}</span> <span>Name: {name}</span>
        </h2>
        <p>Bio</p>
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
