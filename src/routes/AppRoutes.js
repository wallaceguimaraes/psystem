import React from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const AppRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? (
    <>
      {/* <Header /> */}
      <PrivateRoute />
    </>
  ) : (
    <PublicRoute />
  );
};

export default AppRoutes;
