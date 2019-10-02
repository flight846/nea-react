import React, { Fragment, Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import BreadCrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';
import { ReactComponent as Search } from 'assets/svg/search.svg';

import './style.scss';

class Detailpage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render () {
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="workspace" />
          <div className="contentWrapper">
            <BreadCrumb />
            <div className="paddingBottom50">
              <div className="go-back">
                <a href="#">Back to Inspection ID: VC-20215-11700</a>
              </div>
              <div className="tabsContainer">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Analysis
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}
                    >
                      Certification
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <p className="tab-pane__title text-bold" style={{borderBottom: '1px solid #ccc;'}}>FORM 3 ID: 014989</p>
                    <div className="card bg-white">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-4">
                            <div className="label-group mb-4">
                              <label className="col-form-label">RO</label>
                              <p className="col-form-label font-weight-bold">Central</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="label-group mb-4">
                              <label className="col-form-label">Date and Time Collected</label>
                              <p className="col-form-label font-weight-bold">01/01/2019 13:30</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="label-group mb-4">
                              <label className="col-form-label">Collector's Name (Designation)</label>
                              <p className="col-form-label font-weight-bold">Ben Wong (Inspector)</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="label-group mb-4">
                              <label className="col-form-label">Disease Control</label>
                              <p className="col-form-label font-weight-bold">Survey Control</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="label-group mb-4">
                              <label className="col-form-label">Address of Premises</label>
                              <p className="col-form-label font-weight-bold">Blk 300, Ang Mo Kio <br />Street 10, #10-10, <br /> S123456</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                  <div className="tab-pane__group">
                      <p className="tab-pane__title">Habitat 1: Container<span className="m-1">|</span>XX cm2<span className="m-1">|</span>Kitchen</p>
                      <div className="card">
                        <div className="accordion orange is-edit" id="habitat-1">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="small-grey-text">Barcode ID: </span><span className="font-weight-bold">CRO-A123459-19</span><span className="badge badge-warning">Pending</span>
                              </button>
                            </h2>
                          </div>
                          <div id="collapseOne" className="collapse shadow-sm show" aria-labelledby="headingOne" data-parent="#habitat-1">
                            <div className="card-body">
                              <div className="row section">
                                <div className="col-xl-3 col-5 mb-2">
                                  <span className="small-grey-text">Sample ID: </span><span className="font-weight-bold">CRO-A123459-19</span>
                                </div>
                                <div className="col-xl-9 col-7">
                                  <div className="row">
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Date and Time Collected</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received by</p>
                                      <p className="mb-0">Jenny Aw</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Sent as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">First examined at</p>
                                      <p className="mb-0">-</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Identified by</p>
                                      <p className="mb-0">Ben Wong</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Density</p>
                                      <p className="mb-0">X in Container X per dip (80 cc)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Edit Findings */}
                              <div className="row section">
                                <div className="col-md-9 col-xl-6">
                                  <div className="row nea-select-box form-group">
                                    <div className="col-md-4 col-xl-3">
                                      <label className="col-form-label">Findings 1</label>
                                    </div>
                                    <div className="col-md-8 col-xl-9">
                                      <select className="form-control" value="" placeholder="Please select">
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 col-xl-6">
                                  <div className="nea-btn-group">
                                    <button type="button" className="btn btn-outline-primary mr-2">Clear</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-md-12 col-xl-6">
                                  <div className="nea-select-box form-group row">
                                    <div className="col-md-3 col-xl-3">
                                        <label className="col-form-label">Specimen</label>
                                    </div>
                                    <div className="col-md-9 col-xl-9">
                                      <select className="form-control" value="Mosquito" placeholder="Please select">
                                        <option>Option</option>
                                        <option selected>Mosquito</option>
                                        <option>Option</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12 col-xl-6 form-nea__checkgroup">
                                  <div className="form-nea__checkgroup-toggle show">
                                    <div className="row">
                                      <div className="col-md-3 col-xl-12">
                                        <p style={{padding: '13px 0', marginBottom: 0}}>Specimen Stage</p>
                                      </div>
                                      <div className="col-md-9 col-xl-12">
                                        <ul className="form-nea__checkgroup mt-1-tablet">
                                          <li className="form-nea__block">
                                            <div className="nea-chkbx form-group">
                                              <label className="custom-chckbbox">
                                                  Larval Instar
                                                  <input className="form-control checked" type="checkbox" name="" id="" value="" checked="true" />
                                                  <span className="checkmark"></span>
                                              </label>
                                            </div>
                                            <ul className="form-nea__checkgroup-ul show">
                                              <li className="form-nea__inline">
                                                <div className="nea-chkbx form-group">
                                                  <label className="custom-chckbbox">
                                                    1
                                                    <input className="form-control" type="checkbox" name="" id="" value=""  checked="false" />
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </div>
                                              </li>
                                              <li className="form-nea__inline">
                                                <div className="nea-chkbx form-group">
                                                  <label className="custom-chckbbox">
                                                    2
                                                    <input className="form-control checked" type="checkbox" name="" id="" value="" checked="false" />
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </div>
                                              </li>
                                              <li className="form-nea__inline">
                                                <div className="nea-chkbx form-group">
                                                  <label className="custom-chckbbox">
                                                    3
                                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="false" />
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </div>
                                              </li>
                                              <li className="form-nea__inline">
                                                <div className="nea-chkbx form-group">
                                                  <label className="custom-chckbbox">
                                                    4
                                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="false" />
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </div>
                                              </li>
                                            </ul>
                                          </li>
                                          <li className="form-nea__block">
                                            <div className="nea-chkbx form-group">
                                              <label className="custom-chckbbox">
                                                Pupae
                                                <input className="form-control checked" type="checkbox" name="" id="" value="" checked="true" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                          </li>
                                          <li className="form-nea__block">
                                            <div className="nea-chkbx form-group">
                                              <label className="custom-chckbbox">
                                                Adult
                                                <input className="form-control checked" type="checkbox" name="" id="" value="" checked="true" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                            <ul className="form-nea__checkgroup-ul show">
                                              <li className="form-nea__inline sm-w-30p">
                                                <div className="form-group">
                                                  <label className="custom-textbox">
                                                    Male(s)
                                                    <input className="form-control textField" type="text" name="" id="" value="3" placeholder="00" />
                                                  </label>
                                                </div>
                                              </li>
                                              <li className="form-nea__inline sm-w-30p">
                                                <div className="form-group hasError">
                                                  <label className="custom-textbox">
                                                    Female(s)
                                                    <input className="form-control textField" type="text" name="" id="" value="" placeholder="00" />
                                                  </label>
                                                </div>
                                              </li>
                                              <li className="form-nea__inline sm-w-30p">
                                                <div className="form-group hasError">
                                                  <label className="custom-textbox">
                                                    Not Identifiable
                                                    <input className="form-control textField" type="text" name="" id="" value="" placeholder="00" />
                                                  </label>
                                                </div>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-md-9 col-xl-6">
                                  <div className="nea-select-box form-group">
                                    <div className="row">
                                      <div className="col-md-4 col-xl-3">
                                        <label className="col-form-label">Species</label>
                                      </div>
                                      <div className="col-md-8 col-xl-9">
                                        <select className="form-control" value="Aedes (Stegomyia) aegypi"  placeholder="Please select">
                                          <option>Please select</option>
                                          <option selected>Aedes (Stegomyia) aegypi</option>
                                          <option>Option</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-md-12 col-xl-6">
                                    <div className="nea-text-box form-group">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <label className="col-form-label">Vector of Diseases</label>
                                        </div>
                                        <div className="col-md-9">
                                          <input type="text" className="form-control textField" name="" placeholder="Dengue, Chikungunya, Zika" value="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-xl-6 col-md-12">
                                <div className="form-group mb-md-3">
                                    <div className="row">
                                      <div className="col-3">
                                        <label className="col-form-label">Sample Treatment</label>
                                      </div>
                                      <div className="col-9 btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-primary">
                                          <input type="radio" name="options" id="option1" value="" />Destroy
                                        </label>
                                        <label className="btn btn-primary active">
                                          <input type="radio" name="options" id="option2" checked value="research" />Research
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-md-12 form-nea__checkgroup">
                                  <div className="form-nea__checkgroup-toggle show">
                                    <div className="nea-select-box form-group marginBottom15">
                                      <div className="row">
                                        <div className="col-md-3 col-xl-5">
                                          <label className="col-form-label">Purpose</label>
                                        </div>
                                        <div className="col-md-9 col-xl-7">
                                          <select className="form-control" value="Purpose 1"  placeholder="Please select">
                                            <option>Please select</option>
                                            <option selected>Purpose 1</option>
                                            <option>Purpose 2</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="nea-text-box form-group">
                                      <div className="row">
                                        <div className="col-md-3 col-xl-5">
                                          <label className="col-form-label">Officer Name</label>
                                        </div>
                                        <div className="col-md-9 col-xl-7">
                                          <input type="text" className="form-control textField" name="" placeholder="Officer Name" value="Ben Affleck" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-12">
                                  <div className="nea-text-box form-group">
                                    <div className="row">
                                      <div className="col-3">
                                        <label className="col-form-label">Remarks</label>
                                      </div>
                                      <div className="col-9">
                                        {/* <textarea  className="form-control" name="" rows="3" placeholder="Officer Name" value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos nihil modi. Mollitia at odio molestias hic, provident aliquam magnam incidunt esse accusantium voluptate sapiente architecto tempore repellat quis eius?"></textarea>  */}
                                        <textarea className="form-control" name="" id="" rows="3" placeholder="Remarks">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos nihil modi. Mollitia at odio molestias hic, provident aliquam magnam incidunt esse accusantium voluptate sapiente architecto tempore repellat quis eius?</textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary m-4 add-findings" type="button">Add Findings</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane__group">
                      <p className="tab-pane__title">Habitat 2: Container<span className="m-1">|</span>XX cm2<span className="m-1">|</span>Kitchen</p>
                      <div className="card">
                        <div className="accordion green" id="habitat-2">
                          <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="small-grey-text">Barcode ID: </span><span className="font-weight-bold">CRO-A123459-19</span><span className="badge badge-success">Identified</span>
                              </button>
                            </h2>
                          </div>
                          <div id="collapseTwo" className="collapse shadow-sm" aria-labelledby="headingTwo" data-parent="#habitat-2">
                            <div className="card-body">
                              <div className="row section">
                                <div className="col-xl-3 col-5 mb-2">
                                  <span className="small-grey-text">Sample ID: </span><span className="font-weight-bold">CRO-A123459-19</span>
                                </div>
                                <div className="col-xl-9 col-7">
                                  <div className="row">
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Date and Time Collected</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received by</p>
                                      <p className="mb-0">Jenny Aw</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Sent as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">First examined at</p>
                                      <p className="mb-0">-</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Identified by</p>
                                      <p className="mb-0">Ben Wong</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Density</p>
                                      <p className="mb-0">X in Container <br /> X per dip (80 cc)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-6">
                                  <div className=" row">
                                    <div className="col-md-4 col-xl-3 ">
                                      <label className="col-form-label">Findings 1</label>
                                    </div>
                                    <div className="col-md-8 col-xl-9">
                                      <p className="col-form-label">Identified</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="nea-btn-group">
                                    <small className="mr-3" style={{alignSelf: 'center'}}>Save as at <span>01/02/2019 18:00</span></small>
                                    <button type="button" className="btn btn-outline-primary">Edit</button>
                                  </div>
                                </div>
                              </div>
                              <div className="row section">
                                <div className="col-6">
                                  <div className="label-group">
                                    <label className="col-form-label">Specimen</label>
                                    <p className="col-form-label font-weight-bold">Rodent</p>
                                  </div>
                                  <div className="label-group">
                                    <label className="col-form-label">Species</label>
                                    <p className="col-form-label font-weight-bold font-italic">Mus musculus</p>
                                  </div>
                                  <div className="label-group">
                                    <label className="col-form-label">Vector of Disease</label>
                                    <p className="col-form-label font-weight-bold font-italic">Plague, Murine typhus, Salmonellosis</p>
                                  </div>
                                  <div className="label-group">
                                    <label className="col-form-label">Sample Treatment</label>
                                    <p className="col-form-label font-weight-bold">Destroy</p>
                                  </div>
                                  <div className="label-group">
                                    <label className="col-form-label">Remarks</label>
                                    <p className="col-form-label font-weight-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos nihil modi. Mollitia at odio molestias hic, provident aliquam magnam incidunt esse accusantium voluptate sapiente architecto tempore repellat quis eius?</p>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="label-group">
                                    <label className="col-form-label">Specimen Type</label>
                                    <p className="col-form-label font-weight-bold">Droppings</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary m-4 add-findings" type="button">Add Findings</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane__group">
                      <p className="tab-pane__title">Habitat 3: Container<span className="m-1">|</span>XX cm2<span className="m-1">|</span>Location of breeding within premises</p>
                      <div className="card">
                        <div className="accordion grey" id="habitat-3">
                          <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="small-grey-text">Barcode ID: </span><span className="font-weight-bold">CRO-A123459-19</span><span className="badge badge-light">Sending to EHI</span>
                              </button>
                            </h2>
                          </div>
                          <div id="collapseThree" className="collapse shadow-sm" aria-labelledby="headingThree" data-parent="#habitat-2">
                            <div className="card-body">
                              <div className="row section">
                                <div className="col-xl-3 col-5 mb-2">
                                  <span className="small-grey-text">Sample ID: </span><span className="font-weight-bold">CRO-A123459-19</span>
                                </div>
                                <div className="col-xl-9 col-7">
                                  <div className="row">
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Date and Time Collected</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Received by</p>
                                      <p className="mb-0">Jenny Aw</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Sent as at</p>
                                      <p className="mb-0">30/12/2019<span className="pr-1">16:30</span></p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">First examined at</p>
                                      <p className="mb-0">-</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Identified by</p>
                                      <p className="mb-0">Ben Wong</p>
                                    </div>
                                    <div className="col-6 col-xl-4 details-info">
                                      <p className="small-grey-text mb-0">Density</p>
                                      <p className="mb-0">X in Container <br /> X per dip (80 cc)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-outline-primary m-4 add-findings" type="button">Add Findings</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="tab-pane__group shadow-sm">
                      <div className="card bg-white">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="label-group mb-4">
                                <p className="col-form-label">I certify that I have examined the speciment(s) and the result of my findings are indicated above</p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-2 col-xl-1">
                              <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                  Email
                                  <input className="form-control checked" type="checkbox" name="" id="" value="" checked="true" />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4 col-xl-3">
                              <div className="searchToken shadow-sm show">
                                <div className="searchWrapper">
                                  <input type="text" className="searchTextfield" placeholder="Enter" />
                                  <Search className="searchIcon" />
                                </div>
                                <div className="chkboxCont">
                                  <div className="custom-control custom-checkbox marginBottom15">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">
                                      <p className="font-weight-bold">Group 1</p>
                                      <p className="small-grey-text mb-0">Aloysius Tan</p>
                                      <p className="small-grey-text mb-0">Amily Tan</p>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox marginBottom15">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                    <label className="custom-control-label" for="customCheck2">
                                      <p className="font-weight-bold">Group 2</p>
                                      <p className="small-grey-text mb-0">Aloysius Tan</p>
                                      <p className="small-grey-text mb-0">Amily Tan</p>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox marginBottom15">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                    <label className="custom-control-label" for="customCheck3">
                                      <p className="font-weight-bold">Group 3</p>
                                      <p className="small-grey-text mb-0">Aloysius Tan</p>
                                      <p className="small-grey-text mb-0">Amily Tan</p>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row justify-content-end mt-5">
                            <div className="label-group">
                              <p className="mb-0">Ben Wong (Auto-populated)</p>
                              <p className="small-grey-text mb-0">Name  Designation of Analyst Appointed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Detailpage;
