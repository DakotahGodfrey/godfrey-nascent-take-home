import styled from "styled-components";

const PokemonCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface IPokemonCardProps {
  name: string;
  pokedexNumber: string;
  info: string;
  imgURL: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({
  name,
  pokedexNumber,
  info,
  imgURL,
}) => {
  return (
    <PokemonCardContainer>
      <img src={imgURL} alt='' />
      <div>
        <h2>
          <span>#:{pokedexNumber}</span> <span>Name: {name}</span>
        </h2>
        <p>Bio</p>
        <p>{info}</p>
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
