/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

import { ReactComponent as SortDescBlue } from 'assets/svg/sort.svg';
import { ReactComponent as SortDescWhite } from 'assets/svg/sort-white.svg';
import { ReactComponent as SortAscBlue } from 'assets/svg/sort-asc.svg';
import { ReactComponent as SortAscWhite } from 'assets/svg/sort-asc-white.svg';

import './style.scss';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = event => {
    const { open } = this.state;
    if (open) {
      if (!findDOMNode(this).contains(event.target)) {
        this.setState({ open: false });
      }
    }
  };

  handleToggleState = event => {
    event.preventDefault();
    this.setState(oldState => ({
      open: !oldState.open,
    }));
  };

  render() {
    const { className, value, desc, data, onChange } = this.props;
    const { open } = this.state;
    return (
      <ul className={`sortby__toggle  ${className || ''}`}>
        <li className={`nav-item dropdown position-static ${open ? 'show' : ''}`}>
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
            Sort: {value.label}
            <div style={{ marginLeft: 8, display: 'inline' }}>
              {desc ? open ? <SortDescWhite /> : <SortDescBlue /> : open ? <SortAscWhite /> : <SortAscBlue />}
            </div>
          </a>
          <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
            <div className="clearfix">
              <div className="sortList">
                <ul>
                  {data.map((item, index) => {
                    return (
                      <li key={`popup_sort__${index.toString()}`}>
                        <a
                          href="#"
                          onClick={() =>
                            onChange({
                              id: item.accessor,
                              label: item.Header,
                              desc,
                            })
                          }
                        >
                          {item.Header}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="sortBtnsCont">
                <div className="custom-radio paddingBottom5">
                  <input
                    className="form-input"
                    type="radio"
                    id="ascending"
                    name="radio-group"
                    checked={!desc}
                    onChange={() => onChange({ ...value, desc: false })}
                  />
                  <label className="form-label" htmlFor="ascending">
                    Ascending
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    className="form-input"
                    type="radio"
                    id="descending"
                    name="radio-group"
                    checked={desc}
                    onChange={() => onChange({ ...value, desc: true })}
                  />
                  <label className="form-label" htmlFor="descending">
                    Descending
                  </label>
                </div>
                <div className="clearfix"></div>
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
)(Sort);
