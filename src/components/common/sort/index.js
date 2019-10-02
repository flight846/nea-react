/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as SortDesc } from 'assets/svg/sort.svg';
import { ReactComponent as SortAsc } from 'assets/svg/sort-asc.svg';

import { Button, Popover, PopoverBody } from 'reactstrap';

// import './style.scss';

const Sort = props => {
  const { className, value, desc, data, isShowSort, toggle, onChange } = props;

  return (
    <div className={`sortCont ${className}`}>
      <button
        type="button"
        className="btn btn-link"
        id="SortPopover"
        onClick={toggle}
      >
        Sort: {value.label}
        {desc ? <SortDesc /> : <SortAsc />}
      </button>
      <Popover placement="bottom" isOpen={isShowSort} target="SortPopover">
        <PopoverBody>
          {data.map((item, index) => {
            return (
              <button
                type="button"
                className="btn btn-link d-block"
                key={`popup_sort__${index.toString()}`}
                style={
                  value && value.id === item.accessor
                    ? { color: '#007bff' }
                    : {}
                }
                onClick={() =>
                  onChange({ id: item.accessor, label: item.Header, desc })
                }
              >
                {item.Header}
              </button>
            );
          })}
          <Button
            outline={desc}
            size="sm"
            color="primary"
            onClick={() => onChange({ ...value, desc: false })}
          >
            Ascending
          </Button>
          <Button
            outline={!desc}
            size="sm"
            color="primary"
            onClick={() => onChange({ ...value, desc: true })}
          >
            Descending
          </Button>
        </PopoverBody>
      </Popover>
    </div>
  );
};

Sort.defaultProps = {
  onChange: () => {},
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
