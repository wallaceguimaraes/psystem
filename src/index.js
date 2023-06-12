import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import 'bootswatch/dist/minty/bootstrap.min.css';

/**
 * morph /
 * quartz /
 * cosmo y
 * lumen /
 * cerulean y
 * darkly /
 * spacelab /
 *
 * cyborg /
 * flatly y
 * journal y
 * litera y
 * lux y
 * materia
 * minty y
 * sandstone
 * simplex y
 * sketchy y
 * slate /
 * solar
 * superhero
 * united y
 * vapor y
 * yeti
 * zephyr y
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
