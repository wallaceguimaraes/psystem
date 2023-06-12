import { Route, Navigate, Routes } from 'react-router-dom';
// import SignUp from './pages/SignUp';
import { Login } from '../pages/Login';
import { User } from './../pages/User';

export function PublicRoute() {
  return (
    <Routes>
      <Route exat path="/login" element={<Login />} />

      {/* <Route exat path="/registro" element={<SignUp />} /> */}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

// PublicRoute.propTypes = {
//   element: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };
