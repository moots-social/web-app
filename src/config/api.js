import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', 
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if ( error.response.data.error === 'Token inválido ou expirado.') {
        alert('Token inválido ou expirado. Você será redirecionado para o login.');

        localStorage.removeItem('token');
        localStorage.removeItem('id');

        window.location.href = '/'; 
      }
    }

    return Promise.reject(error);
  }
);

export default api;
