import api from '../api';

const AuthService = {
  async authenticate(params) {
    if (params.email != 'uri@mail.com') return null;

    const obj = {
      user: {
        name: 'Uri',
        email: 'uri@mail.com',
      },
      token: 'HJ78auhjak78ah',
      rule: {
        name: 'Administrador',
        description: 'admin',
      },
    };

    return obj;
    // const response = await api.post('/auth', params);
    // return response;
  },
};

export default AuthService;

// const jwt = require('jsonwebtoken');
// const secret = 'mysecretkey';

// const payload = {
//   id: 123,
//   name: 'John Doe',
//   email: 'john.doe@example.com',
// };

// const token = jwt.sign(payload, secret, { expiresIn: '1h' });

// console.log(token);

// const jwt = require('jsonwebtoken');
// const secret = 'mysecretkey';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJu

// Armazenando o token JWT no localStorage
// localStorage.setItem('token', token);

// Recuperando o token JWT do localStorage
// const token = localStorage.getItem('token');
