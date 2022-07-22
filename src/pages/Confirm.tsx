import Container from "components/Container";
import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUser, clearPokemon } from "app/userSlice";
import PokemonCard from "components/PokemonCard";
import UserForm from "components/UserForm";
import ProgressIndicator from "components/ProgessIndicator";

const Confirm: React.FC = () => {
  const { pokemon } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <>
      <ProgressIndicator step={3} />
      <Container>
        <h1>Confirm Your Details</h1>
        <UserForm isConfirm />
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </Container>
    </>
  );
};

export default Confirm;
