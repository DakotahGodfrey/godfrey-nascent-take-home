import Container from "components/Container";
import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { clearAll, selectUser } from "app/userSlice";
import PokemonCard from "components/PokemonCard";

const Confirm: React.FC = () => {
  const { firstName, lastName, phone, address, email, pokemon } =
    useAppSelector(selectUser);

  return (
    <Container>
      <h1>Confirm You Details</h1>
      <div className='userCard'>
        <p>
          <span>Name:</span>
          {firstName} {lastName}
        </p>
        <p>
          <span>Phone Number: </span> {phone}
        </p>
        <p>
          <span>Address: </span> {address}
        </p>
        <p>
          <span>Email Address:</span> {email}
        </p>
      </div>
      {/* <PokemonCard/> */}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </Container>
  );
};

export default Confirm;
