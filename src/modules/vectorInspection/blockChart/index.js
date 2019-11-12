import React, {Fragment,Component} from 'react';

import { Link, withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';

import './style.scss';
import CustomModal from 'components/common/modal';

class BlockChart extends Component {
  constructor() {
    super();
    this.state = {
      isShowConfirmModal: true
    }
  }

  toggleConfirmModal = () => {
    this.setState({
      isShowConfirmModal: !this.state.isShowConfirmModal
    })
  }

  render(){
    return(
      <Fragment>
        <Header />
        <div className="main-content">
          <NavBar active="task" />
          <div className="contentWrapper">
            <Breadcrumb />
            <div className="go-back">
              <a href="#" onClick={this.handleBack}>
                Back to Blk 794, Woodlands Dr 72, Woodsvale, S738095
              </a>
            </div>
            <div className="bg-white paddingLeft30 paddingRight30 paddingTop30 paddingBottom10">
              <div className="row">
                <div className="col-md-12">
                  <div className="downloadBtn">
                    <a href="#">Download Block Chart in Excel</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 offset-md-10 paddingTop30">
                  <a href="#" className="text-blue" onClick={ this.toggleConfirmModal }>View Legend</a>
                </div>
              </div>
            </div>
            <div className={`tables__main`}>
              <div className="tblCompo blkTbl">
                <table>
                  <thead>
                    <tr className="tbl-headings">
                      <th align="left" valign="middle">
                        <div className="background">
                          <span className="bottom">Level</span>
                          <span className="top">Unit</span>
                          <div className="line"></div>
                        </div>
                      </th>
                      <th align="center" valign="middle">
                        100
                      </th>
                      <th align="center" valign="middle">
                        101
                      </th>
                      <th align="center" valign="middle">
                        102
                      </th>
                      <th align="center" valign="middle">
                        103
                      </th>
                      <th align="center" valign="middle">
                        104
                      </th>
                      <th align="center" valign="middle">
                        105
                      </th>
                      <th align="center" valign="middle">
                        106
                      </th>
                      <th align="center" valign="middle">
                        107
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">10</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">9</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">8</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u></u></div>
                          <div className="label1"><span></span></div>
                          <div className="label1"><span></span></div>
                        </div>
                        <div className="lvlRight paddingTop25">7</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u></u></div>
                          <div className="label1"><span></span></div>
                          <div className="label1"><span></span></div>
                        </div>
                        <div className="lvlRight paddingTop25">6</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u></u></div>
                          <div className="label1"><span></span></div>
                          <div className="label1"><span></span></div>
                        </div>
                        <div className="lvlRight paddingTop25">5</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">4</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">3</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">2</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-orange">
                          <div className="sup text-red"></div>
                          VC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td align="left" valign="middle">
                        <div className="lvlLeft">
                          <div><u>Gravitrap</u></div>
                          <div className="label1"><span>Positive</span> - 1</div>
                          <div className="label1"><span>Total</span> - 2</div>
                        </div>
                        <div className="lvlRight paddingTop25">1</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-dark-red">
                          <div className="sup text-red">S35</div>
                          IR
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-green">
                          <div className="sup text-red"></div>
                          IL
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red">BR</div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                      <td align="center" valign="middle">
                        <div className="legendValue text-blue">
                          <div className="sup text-red"></div>
                          AC
                        </div>
                        <div>01/10/2019</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="blkChartSummaryCont">
              <div className="blkChartSummary">
                <div className="cols text-center">
                  <div className="label">Total Units</div>
                  <div className="display bold-font">80</div>
                </div>
                <div className="cols text-center">
                  <div className="label">Checked</div>
                  <div className="display bold-font">80</div>
                </div>
                <div className="cols text-center text-blue">
                  <div className="label">Refused</div>
                  <div className="display bold-font">4</div>
                </div>
                <div className="cols text-center text-blue">
                  <div className="label">Vacant</div>
                  <div className="display bold-font">9</div>
                </div>
                <div className="cols text-center text-blue">
                  <div className="label">Locked</div>
                  <div className="display bold-font">20</div>
                </div>
                <div className="cols text-center">
                  <div className="label">Total Balance</div>
                  <div className="display bold-font">0</div>
                </div>
                <div className="cols text-center">
                  <div className="label">No. of Breeding</div>
                  <div className="display bold-font">12</div>
                </div>
                <div className="cols text-center">
                  <div className="label">Accessibility</div>
                  <div className="display bold-font">58.75%</div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="gravitrapSummary">
                    <div className="gravitrapLHS">Gravitrap</div>
                    <div className="gravitrapRHS">
                      Positive : 7 | Total : 15
                    </div>
                  </div>
                </div>
                <div className="col-md-3 offset-md-2 marginTop30 text-right">
                  <a href="#" className="btn btn-sec">Breeding Summary</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="twoBtnsCont paddingTop30 paddingBottom30">
                    <ul>
                      <li>
                        <div className="paddingBottom10">Generate Call Letter for inaccessible units</div>
                        <div>
                          <a href="#" className="btn btn-pri">Generate Call Letter</a>
                        </div>
                      </li>
                      <li>
                        <div className="paddingBottom10">Total number of S35 served for this block : 5</div>
                        <div>
                          <a href="#" className="btn btn-pri">View S35</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center paddingTop30 paddingBottom30">
                    <div className="paddingBottom10">Generate Call Letter for inaccessible units</div>
                    <div>
                      <a href="#" className="btn btn-pri">Confirm</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <CustomModal 
              isOpen={this.state.isShowConfirmModal} 
              onCancel={this.toggleConfirmModal} 
              type="info-modal"
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BlockChart;
