import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { debounce } from 'lodash';

import { ReactComponent as FiltersIcon } from 'assets/svg/filter.svg';
import { ReactComponent as FiltersWhiteIcon } from 'assets/svg/filter-white.svg';

// import './style.scss';

export const FilterType = {
  SELECT: 'SELECT',
  // SELECT_ALL: 'SELECT_ALL',
  SEARCH: 'SEARCH',
  // SEARCH_ALL: 'SEARCH_ALL'
};

class Filter extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const filteredDataValues = data.map(item => {
      if (item.type === FilterType.SEARCH) {
        return item.values;
      }
      return null;
    });
    const selectedValues = data.map(() => []);
    this.state = {
      filteredDataValues,
      selectedValues,
      open: false,
    };

    this.filterSearch = debounce(this.filterSearch, 500);
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
    if (event) {
      event.preventDefault();
    }

    this.setState(oldState => ({
      open: !oldState.open,
    }));
  };

  filterSearch = (index, text) => {
    const { data } = this.props;
    const { filteredDataValues } = this.state;
    const filteredValues = data[index].values.filter(item => item.toLowerCase().includes(text.toLowerCase()));
    const newDataValues = filteredDataValues;
    newDataValues[index] = filteredValues;
    this.setState({
      filteredDataValues: newDataValues,
    });
  };

  onChangeValue = (index, value) => {
    const { selectedValues } = this.state;
    const temp = selectedValues;
    const i = temp[index].indexOf(value);
    if (i >= 0) {
      temp[index].splice(i, 1);
    } else {
      temp[index].push(value);
    }
    this.setState({
      selectedValues: temp,
    });
  };

  onCheckAll = index => {
    const { data } = this.props;
    const { selectedValues } = this.state;
    const isCheckedAll = selectedValues[index].length === data[index].values.length;
    selectedValues[index] = isCheckedAll ? [] : [...data[index].values];
    this.setState({
      selectedValues,
    });
  };

  onClear = () => {
    const { onChange, data } = this.props;
    const returnData = {};
    const selectedValues = [];
    const filteredDataValues = [];

    data.forEach(item => {
      selectedValues.push([]);
      filteredDataValues.push(item.type === FilterType.SEARCH ? item.values : null);
      returnData[item.id] = [];
    });

    this.setState({
      selectedValues,
      filteredDataValues,
    });

    // this.handleToggleState();

    onChange(returnData);
  };

  onApply = () => {
    const { onChange, data } = this.props;
    const { selectedValues } = this.state;
    const returnData = {};
    const filteredDataValues = [];
    data.forEach((item, index) => {
      filteredDataValues.push(item.type === FilterType.SEARCH ? item.values : null);
      returnData[item.id] = selectedValues[index];
    });
    this.handleToggleState();
    onChange(returnData);
    this.setState({
      filteredDataValues,
    });
  };

  render() {
    const { className, data } = this.props;
    const { filteredDataValues, selectedValues, open } = this.state;
    return (
      <ul className={`filter__toggle  ${className || ''}`}>
        <li className={`nav-item dropdown position-static ${open ? 'show' : ''}`}>
          <a className="nav-link dropdown-toggle" href="#" onClick={this.handleToggleState} role="button">
            Filter
            <div style={{ marginLeft: 8, display: 'inline-block' }}>
              {open ? <FiltersWhiteIcon /> : <FiltersIcon />}
            </div>
          </a>
          <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
            <div className="filterColsCont">
              {data.map((item, index) => (
                <div
                  // className={`col-md-${12 / data.length}`}
                  className={`filterCols ${index === data.length - 1 ? 'filterColsLastItem' : ''}`}
                  key={`filter_item__${index.toString()}`}
                >
                  <div className="paddingBottom10 bold-font">{item.title}</div>
                  {item.type === FilterType.SEARCH && (
                    <div>
                      <div className="searchWrapper">
                        <input
                          type="text"
                          className="searchTextfield"
                          placeholder={`Search ${item.title}`}
                          onChange={e => this.filterSearch(index, e.target.value)}
                        />
                      </div>
                      <div className="chkboxCont">
                        {filteredDataValues[index].map((value, i) => (
                          <div
                            className="custom-control custom-checkbox paddingBottom5"
                            key={`filter_search_value__${index.toString()}_${i.toString()}`}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`custom_search_check__${index}_${i}`}
                              checked={selectedValues[index].includes(value)}
                              onChange={() => this.onChangeValue(index, value)}
                            />
                            <label className="custom-control-label" htmlFor={`custom_search_check__${index}_${i}`}>
                              {value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.type === FilterType.SELECT && (
                    <>
                      <div className="custom-control custom-checkbox paddingBottom5" key="filter_select_value__All">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`custom_select_check__${index}_All`}
                          checked={selectedValues[index] && selectedValues[index].length === item.values.length}
                          onChange={() => this.onCheckAll(index)}
                        />
                        <label className="custom-control-label" htmlFor={`custom_select_check__${index}_All`}>
                          All
                        </label>
                      </div>
                      <div style={{ overflowY: 'auto', height: 153 }}>
                        {item.values.map((value, i) => (
                          <div
                            className="custom-control custom-checkbox paddingBottom5"
                            key={`filter_select_value__${i + 1}`}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`custom_select_check__${index}_${i}`}
                              checked={selectedValues[index].includes(value)}
                              onChange={() => this.onChangeValue(index, value)}
                            />
                            <label className="custom-control-label" htmlFor={`custom_select_check__${index}_${i}`}>
                              {value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="clearfix"></div>
            </div>

            <div className="filterBtnsCont">
              <div className="filterBtns">
                <a href="#" className="btn btn-pri" onClick={this.onApply}>
                  Apply
                </a>
              </div>
              <div className="filterBtns">
                <a href="#" className="btn btn-sec" onClick={this.onClear}>
                  Reset
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

Filter.defaultProps = {
  statusFilter: true,
};

export default Filter;

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Filter);
