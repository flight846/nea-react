/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const ShowList = props => {
  const { className, pageSize, totalItems, onChangePageSize } = props;

  return (
    <div className={`showlist__main ${className || ''}`}>
      <div className="showListCont">
        <div className="showingTxt">
          {' '}
          Showing {pageSize} of {totalItems}{' '}
        </div>
        <div className="form-group showList">
          <select
            className="form-control"
            id="sel1"
            onChange={onChangePageSize}
          >
            <option value={10}>Show 10</option>
            <option value={20}>Show 20</option>
            <option value={30}>Show 30</option>
            <option value={40}>Show 40</option>
          </select>
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
)(ShowList);
