import React from "react";
import Container from "components/Container";
import ProgressIndicator from "components/ProgessIndicator";
import UserForm from "components/UserForm";

const UserPage: React.FC = () => {
  return (
    <>
      <ProgressIndicator step={1} />
      <main>
        <Container>
          <h1>Tell us about you!</h1>
          <UserForm />
        </Container>
      </main>
    </>
  );
};

export default UserPage;
