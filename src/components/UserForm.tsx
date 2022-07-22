import React from "react";
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
import { Link } from "react-router-dom";

interface IUserFormProps {
  isConfirm?: boolean;
}
const UserForm: React.FC<IUserFormProps> = ({ isConfirm }) => {
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
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='control-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='first_name'
          placeholder='first name'
          value={firstName}
          required
          id='firstName'
          onChange={(e) => handleInputChange(e, updateFirstName)}
        />
      </div>
      <div className='control-group'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='last_name'
          placeholder='last name'
          value={lastName}
          required
          id='lastName'
          onChange={(e) => handleInputChange(e, updateLastName)}
        />
      </div>
      <div className='control-group'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          type='tel'
          name='phone'
          placeholder='phone number'
          value={phone}
          id='phoneNumber'
          required
          onChange={(e) => handleInputChange(e, updatePhone)}
        />
      </div>
      <div className='control-group'>
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          name='address'
          placeholder='address'
          value={address}
          id='address'
          onChange={(e) => handleInputChange(e, updateAddress)}
        />
      </div>
      <div className='control-group'>
        <label htmlFor='email'>E-mail Address</label>
        <input
          type='email'
          name='email'
          placeholder='e-mail address'
          value={email}
          id='email'
          onChange={(e) => handleInputChange(e, updateEmail)}
        />
      </div>
      <div className='options'>
        <button type='reset' onClick={() => dispatch(clearUser())}>
          Clear
        </button>
        {isConfirm ? null : (
          <Link
            className={`${
              !firstName || !lastName || !phone ? "disabled-link" : ""
            }`}
            to='/pokemon'
          >
            Next
          </Link>
        )}
      </div>
    </form>
  );
};

export default UserForm;
