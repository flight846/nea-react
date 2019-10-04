/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import './style.scss';

class SortbyToggle extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleToggleState = event => {
    event.preventDefault();
    this.setState(oldState => ({
      open: !oldState.open,
    }));
  };

  render() {
    const { className } = this.props;
    const { open } = this.state;
    return (
      <ul className={`sortby__toggle  ${className || ''}`}>
        <li
          className={`nav-item dropdown position-static ${open ? 'show' : ''}`}
        >
          <a
            className="nav-link dropdown-toggle"
            href="#"
            onClick={this.handleToggleState}
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort: Sent as at
          </a>
          <div
            className={`dropdown-menu ${open ? 'show' : ''}`}
            aria-labelledby="navbarDropdown"
          >
            <div className="clearfix">
              <div className="sortList">
                <ul>
                  <li>
                    <a href="#">Premise</a>
                  </li>
                  <li>
                    <a href="#">Division</a>
                  </li>
                  <li className="active">
                    <a href="#">Task ID</a>
                  </li>
                  <li>
                    <a href="#">Address</a>
                  </li>
                  <li>
                    <a href="#">Trap Code</a>
                  </li>
                  <li>
                    <a href="#">Eweek</a>
                  </li>
                  <li>
                    <a href="#">Sample Bottles</a>
                  </li>
                  <li>
                    <a href="#">Specimen</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>
              <div className="sortBtnsCont clearfix">
                <div className="sortBtns">
                  <a href="#" className="btn btn-pri">
                    Ascending
                  </a>
                </div>
                <div className="sortBtns">
                  <a href="#" className="btn btn-sec">
                    Descending
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortbyToggle);
