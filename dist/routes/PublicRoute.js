"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicRoute = PublicRoute;
var _reactRouterDom = require("react-router-dom");
var _Login = require("../pages/Login");
var _User = require("./../pages/User");
// import SignUp from './pages/SignUp';

function PublicRoute() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exat: true,
    path: "/login",
    element: /*#__PURE__*/React.createElement(_Login.Login, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/*",
    element: /*#__PURE__*/React.createElement(_reactRouterDom.Navigate, {
      to: "/login"
    })
  }));
}

// PublicRoute.propTypes = {
//   element: PropTypes.elementType.isRequired,
//   // outras props necessárias
// };