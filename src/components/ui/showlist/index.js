/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const ShowList = props => {
  const { className, pageSize, totalItems, onChangePageSize, title, pageSizeHidden } = props;

  return (
    <div className={`showlist__main ${className || ''}`}>
      <div className="showListCont">
        {!pageSizeHidden ? (
          <>
            <div className="showingTxt">
              {title && <h3 className="d-inline mr-1">{title}</h3>}
              Showing {pageSize} of {totalItems}{' '}
            </div>
            <div className="form-group showList">
              <select className="form-control" id="sel1" onChange={onChangePageSize}>
                <option value={10}>Show 10</option>
                <option value={20}>Show 20</option>
                <option value={50}>Show 50</option>
              </select>
            </div>
          </>
        ) : (
          <div className="showingTxt">{title && <h3 className="d-inline mr-1">{title}</h3>}</div>
        )}
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
