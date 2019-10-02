/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import { ReactComponent as Filters } from 'assets/svg/filter.svg';
import { ReactComponent as Sort } from 'assets/svg/sort.svg';

import './style.scss';

const Filter = props => {
  const { className } = props;

  return (
    <div className={`filter__main ${className || ''}`}>
      <div className="filterWrapper">
        <div className="row">
          <div className="col-lg-5">
            <div className="searchWrapper">
              <input
                type="text"
                className="searchTextfield"
                placeholder="Please scan or enter Barcode ID"
              />
              <Search className="searchIcon" />
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
