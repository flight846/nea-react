/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';

// import './style.scss';

const Pagination = props => {
  const { className, totalPages, number, onClickPager } = props;

  const handleClick = (e, i) => {
    e.preventDefault();
    if (onClickPager) {
      onClickPager(i);
    }
  };

  const renderPagers = () => {
    const pagers = [];

    for (let i = 0; i < totalPages; i += 1) {
      pagers.push(
        <li key={i} className={number === i ? 'active' : ''}>
          <a href="#" title={i} onClick={e => handleClick(e, i)}>
            {i + 1}
          </a>
        </li>,
      );
    }

    return pagers;
  };

  return (
    <div className={`pagination__main ${className || ''}`}>
      <div className="paginationCont">
        <ul>
          <li hidden={number <= 0}>
            <a href="#" onClick={e => handleClick(e, number - 1)}>
              Previous
            </a>
          </li>
          {renderPagers()}
          <li hidden={number >= totalPages - 1}>
            <a href="#" onClick={e => handleClick(e, number + 1)}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
