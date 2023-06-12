"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Dashboard.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Dashboar() {
  var _useState = (0, _react.useState)('navbar-nav bg-primary sidebar sidebar-dark accordion'),
    _useState2 = _slicedToArray(_useState, 2),
    style = _useState2[0],
    setStyle = _useState2[1];
  var changeStyle = function changeStyle() {
    if (style == 'navbar-nav bg-primary sidebar sidebar-dark accordion') {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion toggled');
    } else {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion');
    }
  };
  var changeStyle1 = function changeStyle1() {
    if (style == 'navbar-nav bg-primary sidebar sidebar-dark accordion') {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion toggled1');
    } else {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion');
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("body", {
    id: "page-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: style,
    id: "accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "sidebar-brand d-flex align-items-center justify-content-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-brand-icon rotate-n-15"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-laugh-wink"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-brand-text mx-3"
  }, "SB Admin ", /*#__PURE__*/_react.default.createElement("sup", null, "2")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center d-none d-md-inline"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "rounded-circle border-0",
    id: "sidebarToggle",
    onClick: changeStyle
  }))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider my-0"
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "index.html"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-tachometer-alt"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Dashboard"))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-heading"
  }, "Interface"), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link collapsed",
    href: "#",
    "data-toggle": "collapse",
    "data-target": "#collapseTwo",
    "aria-expanded": "true",
    "aria-controls": "collapseTwo"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-cog"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Components")), /*#__PURE__*/_react.default.createElement("div", {
    id: "collapseTwo",
    className: "collapse",
    "aria-labelledby": "headingTwo",
    "data-parent": "#accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white py-2 collapse-inner rounded"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Custom Components:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "buttons.html"
  }, "Buttons"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "cards.html"
  }, "Cards")))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link collapsed",
    href: "#",
    "data-toggle": "collapse",
    "data-target": "#collapseUtilities",
    "aria-expanded": "true",
    "aria-controls": "collapseUtilities"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-wrench"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Utilities")), /*#__PURE__*/_react.default.createElement("div", {
    id: "collapseUtilities",
    className: "collapse",
    "aria-labelledby": "headingUtilities",
    "data-parent": "#accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white py-2 collapse-inner rounded"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Custom Utilities:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "utilities-color.html"
  }, "Colors"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "utilities-border.html"
  }, "Borders"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "utilities-animation.html"
  }, "Animations"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "utilities-other.html"
  }, "Other")))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-heading"
  }, "Addons"), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link collapsed",
    href: "#",
    "data-toggle": "collapse",
    "data-target": "#collapsePages",
    "aria-expanded": "true",
    "aria-controls": "collapsePages"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-folder"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Pages")), /*#__PURE__*/_react.default.createElement("div", {
    id: "collapsePages",
    className: "collapse",
    "aria-labelledby": "headingPages",
    "data-parent": "#accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white py-2 collapse-inner rounded"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Login Screens:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "login.html"
  }, "Login"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "register.html"
  }, "Register"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "forgot-password.html"
  }, "Forgot Password"), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse-divider"
  }), /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Other Pages:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "404.html"
  }, "404 Page"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "blank.html"
  }, "Blank Page")))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "charts.html"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-chart-area"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Charts"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "tables.html"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-table"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Tables"))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider d-none d-md-block"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-card d-none d-lg-flex"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "sidebar-card-illustration mb-2",
    src: "img/undraw_rocket.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center mb-2"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "SB Admin Pro"), " is packed with premium features, components, and more!"), /*#__PURE__*/_react.default.createElement("a", {
    className: "btn btn-success btn-sm",
    href: "https://startbootstrap.com/theme/sb-admin-pro"
  }, "Upgrade to Pro!"))), /*#__PURE__*/_react.default.createElement("div", {
    id: "content-wrapper",
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "content"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  }, /*#__PURE__*/_react.default.createElement("button", {
    id: "sidebarToggleTop",
    className: "btn btn-link d-md-none rounded-circle mr-3",
    onClick: changeStyle1
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-bars"
  })), /*#__PURE__*/_react.default.createElement("form", {
    className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control bg-light border-0 small",
    placeholder: "Search for...",
    "aria-label": "Search",
    "aria-describedby": "basic-addon2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search fa-sm"
  }))))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow d-sm-none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "searchDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search fa-fw"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
    "aria-labelledby": "searchDropdown"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "form-inline mr-auto w-100 navbar-search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control bg-light border-0 small",
    placeholder: "Search for...",
    "aria-label": "Search",
    "aria-describedby": "basic-addon2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-search fa-sm"
  }))))))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow mx-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "alertsDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-bell fa-fw"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-danger badge-counter"
  }, "3+")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "alertsDropdown"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dropdown-header"
  }, "Alerts Center"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-primary"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-file-alt text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 12, 2019"), /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-bold"
  }, "A new monthly report is ready to download!"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-success"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-donate text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 7, 2019"), "$290.29 has been deposited into your account!")), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-circle bg-warning"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-exclamation-triangle text-white"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "December 2, 2019"), "Spending Alert: We ve noticed unusually high spending for your account.")), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item text-center small text-gray-500",
    href: "#"
  }, "Show All Alerts"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow mx-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "messagesDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-envelope fa-fw"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-danger badge-counter"
  }, "7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "messagesDropdown"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dropdown-header"
  }, "Message Center"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_1.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-success"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "font-weight-bold"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Hi there! I am wondering if you can help me with a problem I ve been having."), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Emily Fowler \xB7 58m"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_2.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "I have the photos that you ordered last month, how would you like them sent to you?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Jae Chun \xB7 1d"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "img/undraw_profile_3.svg",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-warning"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Last month s report looks great, I am very happy with the progress so far, keep up the good work!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Morgan Alvarez \xB7 2d"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item d-flex align-items-center",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-list-image mr-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded-circle",
    src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
    alt: "..."
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "status-indicator bg-success"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-truncate"
  }, "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren t good..."), /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-gray-500"
  }, "Chicken the Dog \xB7 2w"))), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item text-center small text-gray-500",
    href: "#"
  }, "Read More Messages"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "topbar-divider d-none d-sm-block"
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown no-arrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "userDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2 d-none d-lg-inline text-gray-600 small"
  }, "Douglas McGee"), /*#__PURE__*/_react.default.createElement("img", {
    className: "img-profile rounded-circle",
    src: "img/undraw_profile.svg"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right shadow animated--grow-in",
    "aria-labelledby": "userDropdown"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
  }), "Profile"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
  }), "Settings"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-list fa-sm fa-fw mr-2 text-gray-400"
  }), "Activity Log"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#",
    "data-toggle": "modal",
    "data-target": "#logoutModal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
  }), "Logout"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-sm-flex align-items-center justify-content-between mb-4"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "h3 mb-0 text-gray-800"
  }, "Dashboard"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-download fa-sm text-white-50"
  }), ' ', "Generate Report")), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-3 col-md-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card border-left-primary shadow h-100 py-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs font-weight-bold text-primary text-uppercase mb-1"
  }, "Earnings (Monthly)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "h5 mb-0 font-weight-bold text-gray-800"
  }, "$40,000")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-calendar fa-2x text-gray-300"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-3 col-md-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card border-left-success shadow h-100 py-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs font-weight-bold text-success text-uppercase mb-1"
  }, "Earnings (Annual)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "h5 mb-0 font-weight-bold text-gray-800"
  }, "$215,000")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-dollar-sign fa-2x text-gray-300"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-3 col-md-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card border-left-info shadow h-100 py-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs font-weight-bold text-info text-uppercase mb-1"
  }, "Tasks"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h5 mb-0 mr-3 font-weight-bold text-gray-800"
  }, "50%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress progress-sm mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-info a1",
    role: "progressbar"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-clipboard-list fa-2x text-gray-300"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-3 col-md-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card border-left-warning shadow h-100 py-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row no-gutters align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col mr-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs font-weight-bold text-warning text-uppercase mb-1"
  }, "Pending Requests"), /*#__PURE__*/_react.default.createElement("div", {
    className: "h5 mb-0 font-weight-bold text-gray-800"
  }, "18")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-comments fa-2x text-gray-300"
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-8 col-lg-7"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Earnings Overview"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown no-arrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    role: "button",
    id: "dropdownMenuLink",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right shadow animated--fade-in",
    "aria-labelledby": "dropdownMenuLink"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "Dropdown Header:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Action"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another action"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Something else here")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "chart-area"
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    id: "myAreaChart"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-4 col-lg-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Revenue Sources"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown no-arrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    role: "button",
    id: "dropdownMenuLink",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right shadow animated--fade-in",
    "aria-labelledby": "dropdownMenuLink"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "Dropdown Header:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Action"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another action"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Something else here")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "chart-pie pt-4 pb-2"
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    id: "myPieChart"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4 text-center small"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-circle text-primary"
  }), ' ', "Direct"), /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-circle text-success"
  }), ' ', "Social"), /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-circle text-info"
  }), " Referral")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header py-3"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Projects")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "small font-weight-bold"
  }, "Server Migration", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "float-right"
  }, "20%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-danger a2",
    role: "progressbar"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "small font-weight-bold"
  }, "Sales Tracking", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "float-right"
  }, "40%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-warning a3",
    role: "progressbar"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "small font-weight-bold"
  }, "Customer Database", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "float-right"
  }, "60%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar a7",
    role: "progressbar"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "small font-weight-bold"
  }, "Payout Details", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "float-right"
  }, "80%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-info a4",
    role: "progressbar"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "small font-weight-bold"
  }, "Account Setup", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "float-right"
  }, "Complete!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-success a5",
    role: "progressbar"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-primary text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Primary", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#4e73df")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-success text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Success", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#1cc88a")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-info text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Info", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#36b9cc")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-warning text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Warning", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#f6c23e")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-danger text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Danger", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#e74a3b")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-secondary text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Secondary", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#858796")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-light text-black shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Light", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-black-50 small"
  }, "#f8f9fc")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card bg-dark text-white shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Dark", /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white-50 small"
  }, "#5a5c69")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header py-3"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Illustrations")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "img-fluid px-3 px-sm-4 mt-3 mb-4 a6",
    src: "img/undraw_posting_photo.svg",
    alt: "..."
  })), /*#__PURE__*/_react.default.createElement("p", null, "Add some quality, svg illustrations to your project courtesy of", ' ', /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "nofollow noreferrer",
    href: "https://undraw.co/"
  }, "unDraw"), ", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!"), /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "nofollow noreferrer",
    href: "https://undraw.co/"
  }, "Browse Illustrations on unDraw \u2192"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header py-3"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Development Approach")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("p", null, "SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce CSS bloat and poor page performance. Custom CSS classNamees are used to create custom components and custom utility classNamees."), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, "Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classNamees."))))))), /*#__PURE__*/_react.default.createElement("footer", {
    className: "sticky-footer bg-white"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container my-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "copyright text-center my-auto"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Copyright \xA9 Your Website 2021")))))), /*#__PURE__*/_react.default.createElement("a", {
    className: "scroll-to-top rounded",
    href: "#page-top"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-angle-up"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "logoutModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, "Ready to Leave?"), /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    type: "button",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, "Select Logout below if you are ready to end your current session."), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    "data-dismiss": "modal"
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("a", {
    className: "btn btn-primary",
    href: "login.html"
  }, "Logout")))))));
}
var _default = Dashboar;
exports.default = _default;