import React from 'react';
import { useAuthError } from '../../hooks/AuthContext';

const AuthError = () => {
  const authError = useAuthError();
  if(!authError) return null;

  return (
    <p style={{ color: 'red' }}>{authError.message}</p>
    //this .message comes from authError being JSON (status, message)
  );
};

export default AuthError;
