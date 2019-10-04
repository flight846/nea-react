/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './style.scss';

class TabNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, onToggleTab, activeTab } = this.props;
    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { onToggleTab('1'); }}
          >
            Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { onToggleTab('2'); }}
          >
            Analysis
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { onToggleTab('3'); }}
          >
            Certification
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabNav);
