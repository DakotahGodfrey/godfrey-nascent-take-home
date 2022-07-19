import Container from "components/Container";
import React from "react";

const Confirm: React.FC = () => {
  return (
    <Container>
      <h1>Confirm You Details</h1>
      <div className='userCard'>
        <p>
          <span>Name:</span>{" "}
        </p>
        <p>
          <span>Phone Number: </span>
        </p>
        <p>
          <span>Address: </span>
        </p>
        <p>
          <span>Email Address:</span>
        </p>
      </div>
      {/* <PokemonCard/> */}
    </Container>
  );
};

export default Confirm;
