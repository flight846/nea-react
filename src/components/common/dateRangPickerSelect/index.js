/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

import { ReactComponent as CalendarIcon } from 'assets/svg/calendar.svg';
import { ReactComponent as CalendarWhiteIcon } from 'assets/svg/calendar-white.svg';
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';

import './style.scss';

class DateRangePickerSelect extends Component {
  constructor(props) {
    super(props);
    const { selectData } = this.props;
    this.state = {
      startDate: null,
      endDate: null,
      selectedValue: selectData && selectData.length > 0 ? selectData[0].value : '',
      focusedInput: 'startDate',
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

  toggle = event => {
    if (event) {
      event.preventDefault();
    }

    this.setState(oldState => ({
      open: !oldState.open,
      focusedInput: 'startDate',
    }));
  };

  onChangeSelect = value => {
    this.setState({
      selectedValue: value,
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onClear = () => {
    const { onChange, selectData } = this.props;
    const data = {
      startDate: null,
      endDate: null,
      selectedValue: selectData && selectData.length > 0 ? selectData[0].value : '',
    };
    this.setState({
      ...data,
    });
    this.toggle();
    onChange(data);
  };

  onApply = () => {
    const { onChange } = this.props;
    const { startDate, endDate, selectedValue } = this.state;
    this.toggle();
    onChange({ startDate, endDate, selectedValue });
  };

  renderDate = data => {
    return <span>{data.date()}</span>;
  };

  render() {
    const { className, selectData } = this.props;
    const { startDate, endDate, selectedValue, focusedInput, open } = this.state;
    const today = Moment();
    const dataLength = selectData?.length || 0;
    return (
      <ul className={`datepicker__toggle  ${className || ''}`}>
        <li className={`nav-item dropdown position-static ${open ? 'show' : ''}`}>
          <a className="nav-link dropdown-toggle" href="#" onClick={this.toggle} role="button">
            Custom Date Range
            <div style={{ marginLeft: 8, display: 'inline-block' }}>
              {open ? <CalendarWhiteIcon /> : <CalendarIcon />}
            </div>
          </a>
          <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
            <div className="row">
              {dataLength > 0 &&
                selectData.map((item, index) => {
                  const key = `date_picker_select__${index.toString()}`;
                  return (
                    <div className="paddingLeft15 paddingRight10" key={key}>
                      <div className="custom-radio">
                        <input
                          className="form-input"
                          type="radio"
                          id={key}
                          name="date-range-picker-radio-group"
                          checked={selectedValue === item.value}
                          onChange={() => this.onChangeSelect(item.value)}
                        />
                        <label className="form-label" htmlFor={key}>
                          {item.label}
                        </label>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="clearfix filterColsCont">
              {open && (
                <div className="datepicker-controller">
                  <DateRangePicker
                    startDate={startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={endDate}
                    endDateId="your_unique_end_date_id"
                    numberOfMonths={2}
                    isOutsideRange={day => today.diff(day) < 1}
                    initialVisibleMonth={() => today.subtract(1, 'months')}
                    showDefaultInputIcon
                    inputIconPosition="after"
                    customInputIcon={
                      <div>Days selected: {endDate && startDate && endDate.diff(startDate, 'days')}</div>
                    }
                    displayFormat="DD/MM/YYYY"
                    firstDayOfWeek={1}
                    onDatesChange={this.onDatesChange}
                    focusedInput={focusedInput}
                    onFocusChange={focusedInput => focusedInput && this.setState({ focusedInput })}
                    renderDayContents={this.renderDate}
                  />
                </div>
              )}
            </div>

            <div className="filterBtnsCont clearfix">
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
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

DateRangePickerSelect.defaultProps = {
  statusFilter: true,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateRangePickerSelect);
