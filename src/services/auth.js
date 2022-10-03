import { post } from './request.js';

const URL = '/api/v1/auth';

export async function signUp(credentials) {
  return await post(URL, credentials);
}
