/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const Footer = props => {
  const { className } = props;

  return (
    <div className={`footer__main ${className || ''}`}>
      <div className="footer">

          <div className="row">
            <div className="col-md-12 footerTitle">
              <div className="bold-font">Vector Control System 2</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="footerLinks">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 footerCopyrights">
              &copy; 2019 Government of Singapore.
            </div>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
