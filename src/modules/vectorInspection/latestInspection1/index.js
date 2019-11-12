import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';

import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import TimePickerIcon from 'assets/img/time-picker-icon.png';

import './style.scss';

const format = 'h:mm';

const now = moment()
  .hour(0)
  .minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

class LatestInspection1 extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="main-content">
          <NavBar active="task" />
          <div className="contentWrapper">
            <Breadcrumb />
            <div className="go-back">
              <a href="#" onClick={this.handleBack}>
                Back to Insert Call Letter
              </a>
            </div>

            <div className="mainBox">
              <div className="row paddingBottom20">
                <div className="col-lg-3 bold-font">Address of Owner/Occupier</div>
                <div className="col-lg-9 bold-font text-blue">Blk 300, Ang Mo Kio Ave 5, S550300</div>
              </div>
              <div className="owner-info">
                <div className="owner-info__head">
                  <div className="row">
                    <div className="col-lg-1 col-md-3">Unit</div>
                    <div className="col-lg-11 col-md-9">Name of owner/occupier</div>
                  </div>
                </div>
                <div className="owner-info__body">
                  <div className="row">
                    <div className="col-lg-1 col-md-3">01-101</div>
                    <div className="col-lg-11 col-md-9">Samantha Ang</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row paddingBottom20">
                  <div className="col-lg-3">Premises Inspection Date</div>
                  <div className="col-lg-5 bold-font">01/01/2019</div>
                </div>
                <div className="row paddingBottom20">
                  <div className="col-lg-3">Premises Inspection Time</div>
                  <div className="col-lg-6 ">
                    <div className="time-picker-box">
                      <span className="marginRight20">From</span>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="xxx"
                        onChange={onChange}
                        format={format}
                        clearText=""
                        use24Hours
                        inputReadOnly
                      />
                      <span className="marginRight20 marginLeft30">To</span>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="xxx"
                        onChange={onChange}
                        format={format}
                        clearText=""
                        use24Hours
                        inputReadOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row paddingBottom20">
                  <div className="col-lg-3">Officer Telephone Number</div>
                  <div className="col-lg-5 bold-font">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row paddingBottom20">
                  <div className="col-lg-3">Head RO</div>
                  <div className="col-lg-5">
                    <div className="nea-select-box navtab-select form-group">
                      <select className="form-control" defaultValue="" placeholder="Please select">
                        <option>Option</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left paddingLeft30 marginTop10 marginBottom50">
              <a href="#" className="btn btn-sec marginRight20">
                Preview
              </a>
              <a href="#" className="btn btn-pri">
                Submit
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default LatestInspection1;
