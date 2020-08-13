import { post } from './request';

export const fetchSignup = (email, password, avatar) =>
  post('/api/v1/auth/signup', { email, password, avatar });


export const fetchLogin = (email, password) => 
  post('/api/v1/auth/login', { email, password });
