import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { updateUser } from './../../features/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {/* Form name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          {/* Form last name */}
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          {/* Form email */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          {/* Form location */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
