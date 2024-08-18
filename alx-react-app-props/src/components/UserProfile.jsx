import React, { useContext } from 'react';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);
  return (
    <div>
        <UserInfo />
    </div>
  );
}

export default UserProfile;