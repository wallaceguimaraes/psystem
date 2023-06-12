import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Sidebar from './components/Sidebar';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

import { useContext } from 'react';
import AppRoutes from '../../routes/AppRoutes';
import Header from '../../components/Header';
// import ErrorBoundary from '../../components/ErrorBoundary';
import './main.css';
import { Login } from './../Login';
import SideBar from '../../components/Sidebar';
import Content from './Content';

export default function Main() {
  const { authenticated, userData } = useContext(AuthContext);

  return (
    <Router>
      {!authenticated && (
        <Container className="p-0" fluid>
          <Login />
        </Container>
      )}
      {authenticated && (
        <div id="page-top">
          {/*  <!-- Page Wrapper --> */}
          <div id="wrapper">
            {/** Sidebar here */}
            <SideBar />

            <div id="content-wrapper" className="d-flex flex-column">
              {/*  <!-- Main Content --> */}
              <div id="content">
                {/** Header here*/}
                <Header />
                <Content />
              </div>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}
