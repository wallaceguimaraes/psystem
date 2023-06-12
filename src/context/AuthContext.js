import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import useAuth from './hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = React.memo(function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const { authenticated, loading, handleLogin, handleLogout, userData } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authenticated,
        loading,
        handleLogin,
        handleLogout,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
