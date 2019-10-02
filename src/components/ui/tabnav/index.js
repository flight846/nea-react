/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';

// import './style.scss';

const TabNav = props => {
  const { className } = props;

  return (
    <nav className={`tab__main ${className || ''}`}>
      <div className="tabsContainer">
        <ul>
          <li className="active">
            <a href="#">All (60)</a>
          </li>
          <li>
            <a href="#">CRO (20)</a>
          </li>
          <li>
            <a href="#">ERO (20)</a>
          </li>
          <li>
            <a href="#">WRO (20)</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabNav);
