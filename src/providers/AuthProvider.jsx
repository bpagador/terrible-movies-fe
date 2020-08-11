import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup } from '../services/auth';

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  const authService = (serviceFn, ...args) => {
    return serviceFn(...args)
      .then(user => setCurrentUser(user));
  };

  const signup = (email, password, avatar) => 
    authService(fetchSignup, email, password, avatar);


  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthProvider;
