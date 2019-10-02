/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import './style.scss';

const NavBar = props => {
  const { className, showMenu } = props;
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
              <li className="cPool">
                <a href="#">Claim Task</a>
              </li>
              <li className="workspace">
                <a href="#"> My Workspace</a>
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
            <li className="cPool active">
              <a href="#">Claim Task</a>
            </li>
            <li className="workspace ">
              <a href="#">My Workspace</a>
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

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  showMenu: global.ui.showMenu,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NavBar));
