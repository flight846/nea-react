/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import './style.scss';

const NavBar = props => {
  const { className, showMenu, active } = props;

  return (
    <nav className={`nav__main ${className || ''}`}>
      <div className={`overlay ${showMenu ? '' : 'hidden'}`} />
      <div className={`menuWrapper ${showMenu ? '' : 'hidden'}`}>
        <div className="container">
          <div className="iMenu">
            <div className="iNavTitle">Vector Control System 2</div>
            <ul>
              <li className="dashboard">
                <a href="#">Dashboard</a>
              </li>
              <li className={`cPool ${active === 'task' ? 'active' : ''}`}>
                <Link to="/claim-task"> Claim Task</Link>
              </li>
              <li
                className={`workspace ${
                  active === 'workspace' ? 'active' : ''
                }`}
              >
                <Link to="/my-workspace"> My Workspace</Link>
              </li>
              <li className="qrySample">
                <a href="#">Sample Management</a>
              </li>
              <li className="rpt">
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="leftNavCont bg-blue cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"
        id="cbp-spmenu-s1"
      >
        <div>
          <div className="leftNavTitle">Vector Control System 2</div>
          <ul className="leftNav">
            <li className="dashboard">
              <a href="#">Dashboard</a>
            </li>
            <li className={`cPool ${active === 'task' ? 'active' : ''}`}>
              <Link to="/claim-task">Claim Task</Link>
            </li>
            <li
              className={`workspace ${active === 'workspace' ? 'active' : ''}`}
            >
              <Link to="/my-workspace">My Workspace</Link>
            </li>
            <li className="qrySample">
              <a href="#">Sample Management</a>
            </li>
            <li className="rpt">
              <a href="#">Report</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  active: '',
};

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  showMenu: global.ui.showMenu,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NavBar));
