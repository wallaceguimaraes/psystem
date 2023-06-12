import axios from 'axios';

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios.create({
  baseURL: 'http://localhost:5000',
});

//envia token no cabecalho da requisicao

// axios
//   .get('/api/user')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });
