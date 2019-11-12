import React, {Fragment,Component} from 'react';

import { Link, withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';

import './style.scss';

class InsertCallLetter extends Component {
    render() {
        return(
            <Fragment>
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
                            <div className="lInspectionWrapper">
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Unit</div>
                                        <div className="col-lg-10 bold-font">01-101</div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-5">Latest Inspect Date</div>
                                        <div className="col-lg-7 bold-font">01/01/2019</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Status</div>
                                        <div className="col-lg-10 bold-font">Refused Entry</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Reason</div>
                                        <div className="col-lg-10">
                                          <div className="nea-select-box navtab-select form-group">
                                            <select className="form-control" value="" placeholder="Please select">
                                              <option>Option</option>
                                              <option>Option</option>
                                              <option>Option</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      Calendar Control need to add
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <textarea className="textareaField"></textarea>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <div className="uploadBtn">
                                      <a href="#">Upload Document</a>
                                    </div>
                                  </div>
                                </div>
                            </div>

                            <div className="lInspectionWrapper">
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Unit</div>
                                        <div className="col-lg-10 bold-font">01-101</div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-5">Latest Inspect Date</div>
                                        <div className="col-lg-7 bold-font">01/01/2019</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Status</div>
                                        <div className="col-lg-10 bold-font">Refused Entry</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Reason</div>
                                        <div className="col-lg-10">
                                          <div className="nea-select-box navtab-select form-group">
                                            <select className="form-control" value="" placeholder="Please select">
                                              <option>Option</option>
                                              <option>Option</option>
                                              <option>Option</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      Calendar Control need to add
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <textarea className="textareaField"></textarea>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <div className="uploadBtn">
                                      <a href="#">Upload Document</a>
                                    </div>
                                  </div>
                                </div>
                            </div>

                            <div className="lInspectionWrapper">
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Unit</div>
                                        <div className="col-lg-10 bold-font">01-101</div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-5">Latest Inspect Date</div>
                                        <div className="col-lg-7 bold-font">01/01/2019</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Status</div>
                                        <div className="col-lg-10 bold-font">Refused Entry</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Reason</div>
                                        <div className="col-lg-10">
                                          <div className="nea-select-box navtab-select form-group">
                                            <select className="form-control" value="" placeholder="Please select">
                                              <option>Option</option>
                                              <option>Option</option>
                                              <option>Option</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      Calendar Control need to add
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <textarea className="textareaField"></textarea>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <div className="uploadBtn">
                                      <a href="#">Upload Document</a>
                                    </div>
                                  </div>
                                </div>
                            </div>

                            <div className="lInspectionWrapper">
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Unit</div>
                                        <div className="col-lg-10 bold-font">01-101</div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-5">Latest Inspect Date</div>
                                        <div className="col-lg-7 bold-font">01/01/2019</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Status</div>
                                        <div className="col-lg-10 bold-font">Refused Entry</div>
                                      </div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-lg-2">Reason</div>
                                        <div className="col-lg-10">
                                          <div className="nea-select-box navtab-select form-group">
                                            <select className="form-control" value="" placeholder="Please select">
                                              <option>Option</option>
                                              <option>Option</option>
                                              <option>Option</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      Calendar Control need to add
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <textarea className="textareaField"></textarea>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-11">
                                    <div className="uploadBtn">
                                      <a href="#">Upload Document</a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center marginTop10 marginBottom50">
                        <a href="#" className="btn btn-pri">Submit</a>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InsertCallLetter;
