import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

import Main from './pages/Main';
import { BarStyleProvider } from './context/BarStyleContext';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BarStyleProvider>
        <Main />
      </BarStyleProvider>
    </AuthProvider>
  );
}

export default App;
