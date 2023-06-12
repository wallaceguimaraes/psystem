"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateRoute = PrivateRoute;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Home = _interopRequireDefault(require("../pages/Home"));
var _Dashboard = _interopRequireDefault(require("../pages/Dashboard"));
var _User = require("./../pages/User");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { Register } from './pages/Register';

function PrivateRoute() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/app",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/app/dashboard",
    element: /*#__PURE__*/React.createElement(_Dashboard.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/app/users",
    element: /*#__PURE__*/React.createElement(_User.User, null)
  }));
}

// PrivateRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };