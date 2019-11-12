import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import DataTable from 'components/common/data-table';
import SearchBox from 'components/common/searchBox';
import DateRangePickerSelect from 'components/common/dateRangPickerSelect';
import InPageLoading from 'components/common/inPageLoading';

import Arrow from 'assets/img/receive-number-arrow.png';

import {
  getDepositListingAction,
  getSendListingAction,
  validateBarcodeDepositAction,
  validateBarcodeSendAction,
  submitDepositAction,
  submitSendAction,
} from './action';

import './style.scss';

const depositDateSelectData = [
  {
    label: 'Breeding Detection',
    value: 'breedingDetectionDateTime',
  },
];
const sendDateSelectData = [
  {
    label: 'Breeding Detection',
    value: 'breedingDetectionDateTime',
  },
  {
    label: 'Deposited as at',
    value: 'depositedDateTime',
  },
];

class DepositSendSamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerValue: null,
      barcodeId: '',
      listType: 'deposit',
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing = () => {
    const { listType } = this.state;
    const { getDepositListingAction, getSendListingAction } = this.props;
    if (listType === 'deposit') {
      getDepositListingAction().then(() => {
        if (this.searchBox.inputRef) this.searchBox.inputRef.focus();
      });
    } else {
      getSendListingAction().then(() => {
        if (this.searchBox.inputRef) this.searchBox.inputRef.focus();
      });
    }
  };

  onChangeSearchText = text => {
    this.setState({
      barcodeId: text,
    });
  };

  onChangeListType = listType => {
    this.setState(
      {
        listType,
      },
      this.getListing,
    );
  };

  onSubmitBarcode = event => {
    event.preventDefault();
    const { listType, barcodeId } = this.state;
    const { validateBarcodeDepositAction, validateBarcodeSendAction } = this.props;

    if (barcodeId && barcodeId.trim()) {
      if (listType === 'deposit') {
        validateBarcodeDepositAction(barcodeId.trim());
      } else {
        validateBarcodeSendAction(barcodeId.trim());
      }
    }
  };

  onChangeDatePicker = datePickerValue => {
    this.setState(
      {
        datePickerValue,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  getTrProps = (state, rowInfo) => {
    const {
      data: { scannedSample },
    } = this.props;
    let className = '';
    if (rowInfo) {
      if (rowInfo.row._original.isScanned) {
        className += ' bg-scanned';
      }
      if (scannedSample && rowInfo.row.barcodeId === scannedSample.barcodeId) {
        className += ' selected';
      }
      if (rowInfo.row._original.hasBottomDivider) {
        className += ' bottom-divider';
      }
    }
    return { className };
  };

  render() {
    const { barcodeId, listType } = this.state;
    const {
      ui: { isLoading },
      data: { filteredSamples, samples },
      fontSize,
    } = this.props;
    const depositColumns = [
      {
        Header: 'Breeding Detection',
        accessor: 'breedingDetectionDateTime',
      },
      {
        Header: 'Inspection ID',
        accessor: 'inspectionId',
      },
      {
        Header: 'Barcode ID',
        accessor: 'barcodeId',
      },
      {
        Header: 'Action',
        className: 'th-center',
        accessor: 'action',
      },
    ];
    const sendColumns = [
      {
        Header: 'Breeding Detection',
        accessor: 'breedingDetectionDateTime',
      },
      {
        Header: 'Inspection ID',
        accessor: 'inspectionId',
      },
      {
        Header: 'Barcode ID',
        accessor: 'barcodeId',
      },
      {
        Header: 'Deposited as at',
        accessor: 'depositedDateTime',
      },
      {
        Header: 'Action',
        className: 'th-center',
        accessor: 'action',
      },
    ];
    const isDepositType = listType === 'deposit';
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Deposit / Send Samples" />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Deposit / Send Samples</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="filterWrapper">
                <Nav tabs>
                  <NavItem>
                    <NavLink className={isDepositType ? 'active' : ''} onClick={() => this.onChangeListType('deposit')}>
                      Deposit
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={!isDepositType ? 'active' : ''} onClick={() => this.onChangeListType('send')}>
                      Sent to EHI
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  autoFocus
                  name="barcode"
                  placeholder="Please scan or enter Barcode ID"
                  onChangeText={this.onChangeSearchText}
                  value={barcodeId}
                  onSubmit={this.onSubmitBarcode}
                  ref={ref => {
                    this.searchBox = ref;
                  }}
                />
                <DateRangePickerSelect
                  className="navbar-nav filterWrapper ml-auto"
                  onChange={this.onChangeDatePicker}
                  selectData={isDepositType ? depositDateSelectData : sendDateSelectData}
                />
              </div>
            </div>
            <div className="main-title">
              <div className="receive__numbers">
                <div className="receive__number receive__accepted">
                  <span className="receive__label">Total Sample Collected</span>
                  <span>30</span>
                </div>

                <img src={Arrow} className="receive__arrow"/>

                <div className="receive__number receive__accepted">
                  <span className="receive__label">Total Sample Deposited</span>
                  <span>20</span>
                </div>

                <img src={Arrow} className="receive__arrow"/>

                <div className="receive__number receive__accepted">
                  <span className="receive__label">Collected by Sender</span>
                  <span>20</span>
                </div>

                <img src={Arrow} className="receive__arrow"/>

                <div className="receive__number receive__accepted">
                  <span className="receive__label">Received by EHI</span>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: `${fontSize}px` }}>
              <DataTable
                data={filteredSamples}
                columns={isDepositType ? depositColumns : sendColumns}
                getTrProps={this.getTrProps}
              />
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, vectorInspectionReducers: { depositSendSamples } }, ownProps) => ({
  ...ownProps,
  ...depositSendSamples,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getDepositListingAction,
  getSendListingAction,
  validateBarcodeDepositAction,
  validateBarcodeSendAction,
  submitDepositAction,
  submitSendAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DepositSendSamples));

// class DepositSendSamples extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '0'
//     };
//   }

//   toggle(tab) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       });
//     }
//   }

//   render () {
//     return (
//       <Fragment>
//         <Header />
//         <div className="main-content workspace__main">
//           <NavBar active="workspace" />
//           <div className="contentWrapper">
//             <BreadCrumb />
//             <div className="paddingBottom50">
//                 <div className="main-title">
//                     <h1>Deposit / Send Samples</h1>
//                 </div>
//                 <Filter />
//                 <ShowList />
//                 <Tables />
//                 <Pagination />
//             </div>
//             <Footer />
//           </div>
//         </div>
//       </Fragment>
//     )
//   }
// }

// export default DepositSendSamples;
