import { post } from './request';

export const fetchSignup = (email, password, avatar) =>
  post('/api/v1/auth/signup', { email, password, avatar });
