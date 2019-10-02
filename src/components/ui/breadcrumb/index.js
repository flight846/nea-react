/* eslint-disable react/jsx-fragments */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.scss';

const BreadCrumb = props => {
  const { className, page, parent } = props;
  return (
    <nav className={`breadcrumb__main ${className || ''}`}>
      <div className="breadcrumbWrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          /
          <li>
            <a href="#">Vector Control System 2</a>
          </li>
          {parent ? (
            <React.Fragment>
              /
              <li>
                <a href="#">{parent}</a>
              </li>
            </React.Fragment>
          ) : (
            ''
          )}
          {page ? (
            <React.Fragment>
              /
              <li>
                <a href="#">{page}</a>
              </li>
            </React.Fragment>
          ) : (
            ''
          )}
        </ul>
      </div>
    </nav>
  );
};

BreadCrumb.defaultProps = {
  parent: '',
  page: '',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(BreadCrumb));
