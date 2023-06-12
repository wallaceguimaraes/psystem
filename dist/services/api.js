"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var token = localStorage.getItem('token');
_axios.default.defaults.headers.common['Authorization'] = "Bearer ".concat(token);
var _default = _axios.default.create({
  baseURL: 'http://localhost:5000'
}); //envia token no cabecalho da requisicao
// axios
//   .get('/api/user')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });
exports.default = _default;