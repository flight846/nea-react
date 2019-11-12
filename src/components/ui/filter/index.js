/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import { ReactComponent as Filters } from 'assets/svg/filter.svg';
import { ReactComponent as Sort } from 'assets/svg/sort.svg';

import { Nav, NavItem, NavLink } from 'reactstrap';

import './style.scss';

const Filter = props => {
  const { className } = props;

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className={`filter__main ${className || ''}`}>
      <div className="filterWrapper">
        <div className="row">
          <div className="col-lg-5">
            <div className="main--search">
              <div className="searchWrapper">
                <input type="text" className="searchTextfield" placeholder="Please scan or enter Barcode ID" />
                <Search className="searchIcon" />
              </div>
            </div>
            <div className="tabs-search">
              <div className="searchWrapper">
                <Nav tabs className="navtab-tabs">
                  <NavItem>
                    <NavLink
                      className={`${activeTab === '1' ? 'active' : ''}`}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      Deposit
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={`${activeTab === '2' ? 'active' : ''}`}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      Sent to EHI
                    </NavLink>
                  </NavItem>
                </Nav>
                <input
                  type="text"
                  className="searchTextfield navtab-search"
                  placeholder="Please scan or enter Barcode ID"
                />
                <Search className="searchIcon" />
              </div>
            </div>
            <div className="dropdown--search">
              <div className="searchWrapper">
                <div className="nea-select-box navtab-select form-group">
                  <select className="form-control" value="" placeholder="Please select">
                    <option>Option</option>
                    <option>Option</option>
                    <option>Option</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="searchTextfield navtab-search"
                  placeholder="Please scan or enter Barcode ID"
                />
                <Search className="searchIcon" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 filterSortWrapper">
            <div className="filterCont">
              Filter
              <Filters />
            </div>
            <div className="sortCont">
              Sort: Sent as at
              <Sort />
            </div>
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
)(Filter);
