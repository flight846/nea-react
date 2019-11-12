import React, { Fragment, Component } from 'react';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Dashboard" />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Dashboard</h1>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
