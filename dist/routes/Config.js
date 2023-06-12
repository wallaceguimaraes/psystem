"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Config;
var _Dashboard = _interopRequireDefault(require("../pages/Dashboard"));
var _index = _interopRequireDefault(require("../pages/Home/index"));
var _User = require("./../pages/User");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Config() {
  var routes = [{
    path: '/app',
    element: /*#__PURE__*/React.createElement(_index.default, null),
    rules: ['admin'],
    name: 'home',
    title: 'Home',
    icon: 'fas fa-fw fa-home'
  }, {
    path: '/app/users',
    element: /*#__PURE__*/React.createElement(_User.User, null),
    rules: ['admin'],
    name: 'users',
    title: 'Usuários',
    icon: 'fas fa-fw fa-user',
    children: [{
      path: '/app/users',
      title: 'Cadastro',
      icon: 'fas fa-fw fa-user'
    }, {
      path: '/app/users',
      title: 'Listagem',
      icon: 'fas fa-fw fa-user'
    }]
  }, {
    path: '/app/dashboard',
    element: /*#__PURE__*/React.createElement(_Dashboard.default, null),
    rules: ['admin'],
    name: 'dashboard',
    title: 'Dashboard',
    icon: 'fas fa-fw fa-tachometer-alt'
  }];
  return routes;
}