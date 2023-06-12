import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const BarStyleContext = createContext();

const BarStyleProvider = React.memo(function BarStyleProvider({ children }) {
  const [style, setStyle] = useState(
    'navbar-nav bg-primary sidebar sidebar-dark accordion',
  );

  return (
    <BarStyleContext.Provider
      value={{
        style,
        setStyle,
      }}
    >
      {children}
    </BarStyleContext.Provider>
  );
});

BarStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BarStyleContext, BarStyleProvider };
