import React, { useState } from 'react';
import '../../pages/Main/main.css';
import { BarStyleContext } from '../../context/BarStyleContext';
import { useContext } from 'react';
import Notification from './Notification/index';
import Message from './Message';
import Profile from './Profile';
import Search from './Search/index';
import SearchXs from './SearchXs';

export default function Header() {
  const { style, setStyle } = useContext(BarStyleContext);

  const changeStyle1 = () => {
    if (style == 'navbar-nav bg-primary sidebar sidebar-dark accordion') {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion toggled1');
    } else {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion');
    }
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-3 static-top shadow">
      {/*  <!-- Sidebar Toggle (Topbar) --> */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3 ml-sm-2"
        onClick={changeStyle1}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/*  <!-- Topbar Search --> */}
      {/* <Search /> */}

      <ul className="navbar-nav ml-auto">
        {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        {/* <SearchXs /> */}
        {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

        <Notification />
        <Message />

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <Profile />
      </ul>
    </nav>
  );
}
