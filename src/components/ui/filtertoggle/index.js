/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import './style.scss';

class FilterToggle extends Component {
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
      <ul className={`filter__toggle  ${className || ''}`}>
        <li
          className={`nav-item dropdown position-static ${open ? 'show' : ''}`}
        >
          <a
            className="nav-link dropdown-toggle"
            href="#"
            onClick={this.handleToggleState}
            role="button"
          >
            Filter
          </a>
          <div
            className={`dropdown-menu ${open ? 'show' : ''}`}
            aria-labelledby="navbarDropdown"
          >
            <div className="clearfix filterColsCont">
              <div className="filterCols">
                <div className="paddingBottom10 font-bold">Premise</div>
                <div className="searchWrapper">
                  <input
                    type="text"
                    className="searchTextfield"
                    placeholder="Search premise"
                  />
                  <img
                    alt=""
                    src="img/icons/search.svg"
                    className="searchIcon"
                  />
                </div>
                <div className="chkboxCont">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      All
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      Apartment
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck3"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck3"
                    >
                      HDB
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck4"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck4"
                    >
                      Condo
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck5"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck5"
                    >
                      Landed
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck6"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck6"
                    >
                      All
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck7"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck7"
                    >
                      Apartment
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck8"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck8"
                    >
                      HDB
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck9"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck9"
                    >
                      Condo
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck10"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck10"
                    >
                      Landed
                    </label>
                  </div>
                </div>
              </div>
              <div className="filterCols">
                <div className="paddingBottom10 font-bold">Division</div>
                <div className="searchWrapper">
                  <input
                    type="text"
                    className="searchTextfield"
                    placeholder="Search division"
                  />
                  <Search />
                </div>
                <div className="chkboxCont">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck11"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck11"
                    >
                      All
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck12"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck12"
                    >
                      Ang Mo Kio
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck13"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck13"
                    >
                      Aljunied
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck14"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck14"
                    >
                      Eunos
                    </label>
                  </div>
                </div>
              </div>
              <div className="filterCols">
                <div className="paddingBottom10 font-bold">Status</div>
                <div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck15"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck15"
                    >
                      All
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck16"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck16"
                    >
                      Pending Audit
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck17"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck17"
                    >
                      Show Cause
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filterBtnsCont clearfix">
              <div className="filterBtns">
                <a href="#" className="btn btn-pri">
                  Apply
                </a>
              </div>
              <div className="filterBtns">
                <a href="#" className="btn btn-sec">
                  Reset
                </a>
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
)(FilterToggle);
