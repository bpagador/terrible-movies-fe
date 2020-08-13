import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/AuthContext';

const HeaderLinks = () => (
  <>
    <Link to="/signup">Signup /</Link>
    <Link to="/login">  Login</Link>
  </>
);

const Header = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser
        ? <img src={currentUser.avatar} />
        : <HeaderLinks />}
    </>
  );
};

export default Header;
