import { useState, useEffect } from 'react';
import Auth from '../../services/Auth/Auth';
// import api from '../../services/api';

// import Message from "../../components/message/message";

export default function useAuth() {
  //   const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // if (token) {
    //   //   api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    //   setAuthenticated(true);
    // }

    setLoading(false);
  }, []);

  async function handleLogin(params) {
    // return params;
    const data = await Auth.authenticate(params);
    // const data = null;
    // console.log(data);

    // api.defaults.headers.Authorization = `Bearer ${data.token}`;

    //verificar status

    if (data == null || !data.token) {
      setAuthenticated(false);
      return null;
    }

    localStorage.setItem('token', JSON.stringify(data.token));
    setAuthenticated(true);
    setUserData(data);

    return data;
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    // api.defaults.headers.Authorization = undefined;
    // navigate('/login', { replace: true });
  }

  return { authenticated, loading, handleLogin, handleLogout, userData };
}
