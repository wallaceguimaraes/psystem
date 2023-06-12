import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

// import { Register } from './pages/Register';
import { User } from './../pages/User';
import Config from './Config';

export function PrivateRoute() {
  const { privateRoutes } = Config();

  return (
    <Routes>
      {privateRoutes.map((item, index) =>
        Array.isArray(item.children) && item.children.length >= 1 ? (
          item.children.map((children, index) => (
            <Route
              key={index}
              path={children.path}
              element={children.element}
            />
          ))
        ) : (
          <Route key={index} path={item.path} element={item.element} />
        ),
      )}

      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      {/* <Route path="/app/dashboard" element={<Dashboard />} />
      <Route path="/app/cadastro/usuarios" element={<User />} /> */}
    </Routes>
  );
}

// PrivateRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };
