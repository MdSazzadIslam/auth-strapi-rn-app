import BASE_URL from '../config';
import http from 'axios';

class authService {
  register = async (email, password) => {
    await http
      .post(`${BASE_URL}/auth/local/register`, {
        username: email,
        email,
        password,
      })
      .then((response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((err) => {
        console.log('An error occured', err);
      });
  };

  login = async (email, password) => {
    await http
      .post(`${BASE_URL}/auth/local`, {
        identifier: email,
        password,
      })
      .then((response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((err) => {
        console.log('An error occured', err.response);
      });
  };
}

export default new authService();
