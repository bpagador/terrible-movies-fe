import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin } from '../services/auth';

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (email, password, avatar) => 
    authService(fetchSignup, email, password, avatar);

  const login = (email, password) =>
    authService(fetchLogin, email, password);


  return (
    <AuthContext.Provider value={{ currentUser, authError, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthProvider;
