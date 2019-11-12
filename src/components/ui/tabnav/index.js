/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';

import './style.scss';

class TabNav extends Component {
  render() {
    const { className, onToggleTab, activeTab, menu } = this.props;
    return (
      <Nav tabs>
        {menu.map((menu, index) => (
          <NavItem key={`tab_nav_${index + 1}`}>
            <NavLink
              className={activeTab === index.toString() ? 'active' : ''}
              onClick={() => {
                onToggleTab(index.toString());
              }}
            >
              {menu}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabNav);
