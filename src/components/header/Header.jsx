import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/AuthContext';

const Header = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser
        ? <img src={currentUser.avatar} />
        : <Link to="/signup">Signup</Link>}
    </>
  );
};

export default Header;
