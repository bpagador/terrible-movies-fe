import React, { useState } from 'react';
import { useSignup } from '../../hooks/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const signup = useSignup();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'avatar') setAvatar(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password, avatar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}/>

      <input 
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}/>

      <input 
        type="url"
        name="avatar"
        placeholder="Avatar"
        value={avatar}
        onChange={handleChange}/>

      <button>Signup</button>
    </form>
  );
};

export default Signup;
