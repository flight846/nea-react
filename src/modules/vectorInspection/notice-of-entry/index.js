import React, {Fragment,Component} from 'react';

import { Link, withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';

class NoticeOfEntry extends Component {
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
                                Back to Section 35: Notice to Enter Premises
                            </a>
                        </div>
                        <div className="mainBox">
                            <div className="row paddingBottom20">
                                <div className="col-lg-3 bold-font">Address of Owner/Occupier</div>
                                <div className="col-lg-9 bold-font text-blue">Blk 300, Ang Mo Kio Ave 5, S550300</div>
                            </div>
                            <div className="tblCompo habitatTbl">
                                <table>
                                    <thead>
                                        <tr className="tbl-headings">
                                            <th align="left" valign="middle" className="col1" width="120">
                                                Unit
                                            </th>
                                            <th align="left" valign="middle" className="col2">
                                                Name of Owner/Occupier
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td align="left" valign="middle" className="text-blue">
                                                01-101
                                            </td>
                                            <td align="left" valign="middle">
                                                Samantha Jovina Ang
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td align="left" valign="middle" className="text-blue">
                                                09-102
                                            </td>
                                            <td align="left" valign="middle">
                                                Benedict Ang
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="middle" className="text-blue">
                                                08-101
                                            </td>
                                            <td align="left" valign="middle">
                                                Natasha Bin Ladin
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="middle" className="text-blue">
                                                07-101
                                            </td>
                                            <td align="left" valign="middle">
                                                Olsen Norman Lee
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="middle" className="text-blue">
                                                10-101
                                            </td>
                                            <td align="left" valign="middle">
                                                Tracey Lee Xiao qin
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="SampleSelWrapper marginTop30 marginBottom30">
                                <div className="row paddingBottom20">
                                    <div className="col-lg-3 col-md-6">
                                        Premises Inspection Date
                                    </div>
                                    <div className="col-lg-9 col-md-6 bold-font">
                                        15/10/2019
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-lg-3 col-md-6">
                                        Premises Inspection Time
                                    </div>
                                    <div className="col-lg-9 col-md-6 bold-font">
                                        From 10:00 to 15:30
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-lg-3 col-md-6">
                                        Head RO
                                    </div>
                                    <div className="col-lg-9 col-md-6 bold-font">
                                        John Smith Cumberbatch (CRO)
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-lg-3 col-md-6">
                                        Status
                                    </div>
                                    <div className="col-lg-9 col-md-6 bold-font">
                                        <div className="badge badge-success text-blue" style={{ marginLeft: 0 }}>Approved</div>
                                    </div>
                                </div>
                                <div className="row paddingBottom20">
                                    <div className="col-lg-3 col-md-6">
                                        Dated
                                    </div>
                                    <div className="col-lg-9 col-md-6 bold-font">
                                        01/01/2019
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="downloadBtn">
                                        <a href="#">Download S35</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="text-center marginTop10 marginBottom50">
                            <a href="#" class="btn btn-pri">Submit</a>
                        </div> */}
                        <Footer />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NoticeOfEntry;
