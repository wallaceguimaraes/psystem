import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await handleLogin({ email, password });
    console.log('login', data);
    if (data != null && !!data.token) {
      toast.success('Usuário logado com sucesso!');
      navigate('/app');
      //   return <Navigate to="/app" />;
    } else toast.error('Login ou senha incorretos!');
  };

  return (
    // <div className="login-container">
    //   {/* {error && <Alert variant="danger">{error}</Alert>} */}
    //   <Form onSubmit={handleSubmit}>
    //     <h2>StarterPack</h2>
    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>Usuário</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group className="mt-2" controlId="formBasicPassword">
    //       <Form.Label>Senha</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group className="center mt-3">
    //       <Button variant="primary" type="submit">
    //         Entrar
    //       </Button>
    //       {/* <Button variant="primary" onClick={() => handleTheme()} type="button">
    //         Mudar tema
    //       </Button> */}
    //     </Form.Group>
    //   </Form>
    // </div>

    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row justify-content-center">
                <div className="col-lg-7 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-5">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Psystem</h1>
                    </div>

                    <Form className="" onSubmit={handleSubmit}>
                      {/* <Form className="user" onSubmit={handleSubmit}> */}
                      <div className="form-group">
                        <Form.Control
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-describedby="emailHelp"
                          placeholder="Digite seu email..."
                        />
                      </div>
                      <div className="form-group">
                        <Form.Control
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Digite sua senha..."
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div
                        className="container"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          variant="primary"
                          className="btn btn-primary btn-user btn-block center"
                          type="submit"
                          style={{ flex: 0.5 }}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
