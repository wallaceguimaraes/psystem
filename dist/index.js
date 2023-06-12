"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals.js"));
require("bootstrap/dist/css/bootstrap.min.css");
var _App = _interopRequireDefault(require("./App.jsx"));
require("bootswatch/dist/cosmo/bootstrap.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* import './index.css'; */

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

var root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();