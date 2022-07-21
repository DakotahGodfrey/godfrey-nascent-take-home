import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import {
  updateFirstName,
  updateLastName,
  updatePhone,
  updateAddress,
  updateEmail,
  selectUser,
  clearUser,
} from "app/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

const UserForm = styled.form``;

const ControlGroup = styled.div``;

const UserPage: React.FC = () => {
  const { firstName, lastName, phone, address, email } =
    useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    action: any
  ) => {
    dispatch(action(e.currentTarget.value));
  };
  return (
    <main>
      <Container>
        <h1>Tell us about you!</h1>
        <UserForm onSubmit={(e) => e.preventDefault()}>
          <ControlGroup>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='first_name'
              placeholder='first name'
              value={firstName}
              id='firstName'
              onChange={(e) => handleInputChange(e, updateFirstName)}
            />
          </ControlGroup>
          <ControlGroup>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='last_name'
              placeholder='last name'
              value={lastName}
              id='lastName'
              onChange={(e) => handleInputChange(e, updateLastName)}
            />
          </ControlGroup>
          <ControlGroup>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              placeholder='phone number'
              value={phone}
              id='phoneNumber'
              onChange={(e) => handleInputChange(e, updatePhone)}
            />
          </ControlGroup>
          <ControlGroup>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              placeholder='address'
              value={address}
              id='address'
              onChange={(e) => handleInputChange(e, updateAddress)}
            />
          </ControlGroup>
          <ControlGroup>
            <label htmlFor='email'>E-mail Address</label>
            <input
              type='email'
              name='email'
              placeholder='e-mail address'
              value={email}
              id='email'
              onChange={(e) => handleInputChange(e, updateEmail)}
            />
          </ControlGroup>
          <div>
            <button type='reset' onClick={() => dispatch(clearUser())}>
              Clear
            </button>
            <button type='submit'>Next</button>
          </div>
        </UserForm>
      </Container>
      <section>
        <p>Allow location services to help us find your address.</p>
        <p>Add your e-mail address to recieve a copy of your submission.</p>
      </section>
    </main>
  );
};

export default UserPage;
