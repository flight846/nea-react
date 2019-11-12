import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { ReactComponent as MeatballMenu } from 'assets/svg/meatball-menu.svg';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import SearchBox from 'components/common/searchBox';
import DataTable from 'components/common/data-table';
import BreadCrumb from 'components/ui/breadcrumb';
import CustomModal from 'components/common/modal';
import BinaryImage from 'components/common/binaryImage';
import InPageLoading from 'components/common/inPageLoading';
import DropBox from 'components/common/dropbox';
import { SampleRejectReasons } from 'constants/data-list';
import { FileSubmissionRule } from 'constants/file-operation';
import {
  receiveSampleFilter,
  receiveValidateBarcode,
  resetReceiveSampleReducer,
  rejectSample,
  reacceptSample,
  acceptUrgentSample,
  submitReceivedSamples,
} from './action';

import './style.scss';

class ReceiveSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingSample: null,
      barcodeId: '',
      isShowConfirmModal: false,
      isReacceptSample: false,
      isShowRejectModal: false,
      rejReasonCdList: [],
      rejReasonOth: '',
      rejFileList: [],
      isReviewReason: false,
      modalStep: 1,
    };
  }

  componentDidMount() {
    const { resetReceiveSampleReducerAction } = this.props;
    resetReceiveSampleReducerAction();
  }

  onSubmitBarcode = event => {
    event.preventDefault();
    const { barcodeId } = this.state;
    const { receiveValidateBarcodeAction } = this.props;

    if (barcodeId && barcodeId.trim()) {
      receiveValidateBarcodeAction({ barcodeId: barcodeId.trim() });
      this.setState({
        barcodeId: '',
      });
    }
  };

  onRejectSample = data => {
    const { rejectSampleAction } = this.props;
    rejectSampleAction(data);
  };

  onAcceptSample = () => {
    const {
      acceptUrgentSampleAction,
      data: { scannedSample },
    } = this.props;
    acceptUrgentSampleAction({ barcodeId: scannedSample.barcodeId });
    this.toggleConfirmModal();
  };

  onReacceptSample = () => {
    const { workingSample } = this.state;
    const { reacceptSampleAction } = this.props;
    reacceptSampleAction({
      barcodeId: workingSample.barcodeId,
      rejFileList: [],
      rejReasonOth: '',
      rejReasonCdList: [],
    });
    this.setState({
      rejFileList: [],
      rejReasonOth: '',
      rejReasonCdList: [],
    });
    this.toggleConfirmModal();
  };

  toggleConfirmModal = data => {
    const isReacceptSample = (data && data.isReacceptSample) || false;
    const sample = (data && data.sample) || null;
    this.setState(prevState => ({
      isShowConfirmModal: !prevState.isShowConfirmModal,
      isReacceptSample,
      workingSample: sample,
    }));
  };

  toggleReasonModal = data => {
    const isReviewReason = data.isReviewReason || false;
    const isClearData = data.isClearData || false;
    const sample = data.sample || null;
    this.setState(prevState => ({
      isShowRejectModal: !prevState.isShowRejectModal,
      isReviewReason,
      rejReasonOth: isClearData ? '' : prevState.rejReasonOth,
      rejReasonCdList: isClearData ? [] : prevState.rejReasonCdList,
      rejFileList: isClearData ? [] : prevState.rejFileList,
      modalStep: 1,
      workingSample: sample,
    }));
  };

  getTrProps = (state, rowInfo) => {
    const {
      data: { scannedSample },
    } = this.props;
    let className = '';
    if (rowInfo) {
      if (rowInfo.row._original.isUrgentCase) {
        className += 'bg-danger';
      }
      if (scannedSample && rowInfo.row.barcodeId === scannedSample.barcodeId) {
        className += ' selected';
      }
    }
    return { className };
  };

  onNextReasonModal = () => {
    const { modalStep, rejReasonCdList, rejReasonOth, workingSample } = this.state;
    if (modalStep === 1) {
      if (rejReasonCdList.length > 0 || rejReasonOth) {
        this.setState({
          modalStep: 2,
        });
      } else {
        toast.error('Please select at least one reason');
      }
    } else {
      const rejFileList = this.dropBoxRef.getFileList().map(file => file.fileId);
      this.onRejectSample({
        ...workingSample,
        rejReasonCdList,
        rejReasonOth,
        rejFileList,
      });
      this.toggleReasonModal({ isClearData: true });
    }
  };

  onEditReason = () => {
    this.setState({
      modalStep: 1,
      isShowRejectModal: true,
      isReviewReason: false,
    });
  };

  onCheckReason = reason => {
    const { rejReasonCdList } = this.state;
    const temp = rejReasonCdList;
    const index = temp.indexOf(reason);
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      temp.push(reason);
    }
    this.setState({
      rejReasonCdList: temp,
    });
  };

  renderReasonModalStep1 = () => {
    const { rejReasonOth, rejReasonCdList } = this.state;
    return (
      <form>
        <div className="form-nea__checkgroup">
          {SampleRejectReasons.map((value, i) => {
            const isChecked = rejReasonCdList.includes(value);
            const isOthers = value === 'Others';
            return (
              <div className="form-nea__block" key={`reject_reason__${i.toString()}`}>
                <div className={`nea-chkbx form-group ${isOthers ? 'mb-0' : ''}`}>
                  <label className="custom-chckbbox">
                    {value}
                    <input
                      className={`form-control ${isChecked ? 'checked' : ''}`}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => this.onCheckReason(value)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                {isOthers && (
                  <div className="form-nea__checkgroup-ul show">
                    <div className="form-group modal-others">
                      <label className="custom-textbox d-block">
                        <textarea
                          className="form-control textField modal-reason"
                          type="text"
                          placeholder="Please state reason"
                          value={rejReasonOth}
                          disabled={!isChecked}
                          onChange={e => this.setState({ rejReasonOth: e.target.value })}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </form>
    );
  };

  renderReasonModalStep2 = () => {
    const { rejFileList, workingSample } = this.state;
    return (
      <DropBox
        submissionType="SAMPLEID"
        submissionId={workingSample.sampleId}
        fileList={rejFileList}
        ref={ref => {
          this.dropBoxRef = ref;
        }}
      />
    );
  };

  toggleReviewReasonModal = data => {
    const rejReasonCdList = (data && data.rejReasonCdList) || [];
    const rejReasonOth = (data && data.rejReasonOth) || '';
    const rejFileList = (data && data.rejFileList) || [];
    this.setState(prevState => ({
      isShowRejectModal: !prevState.isShowRejectModal,
      isReviewReason: !prevState.isReviewReason,
      rejReasonOth,
      rejReasonCdList,
      rejFileList,
      workingSample: data,
    }));
  };

  renderReviewReason = () => {
    const { rejReasonCdList, rejReasonOth, rejFileList } = this.state;

    return (
      <div className="is-preview-upload">
        {rejReasonCdList &&
          rejReasonCdList.map((item, index) => {
            if (item === 'Others') {
              return <></>;
            }
            return <p key={`review_reason_${index.toString()}`}>• {item}</p>;
          })}
        {rejReasonCdList && rejReasonCdList.includes('Others') && <p>• Others: {rejReasonOth}</p>}
        <Slider dots={false} infinite={false} speed={500} slidesToScroll={1} slidesToShow={1}>
          {rejFileList.map((file, index) => (
            <div key={`review_reject_image_${index.toString()}`}>
              <BinaryImage fileId={file.fileId} />
              <p>
                {index + 1}. {file.fileName}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  onSubmitReceivedSample = () => {
    const {
      submitReceivedSamplesAction,
      resetReceiveSampleReducerAction,
      data: { filteredTaskList },
      ui: { isSubmitted },
    } = this.props;

    if (isSubmitted) {
      resetReceiveSampleReducerAction().then(() => {
        if (this.searchBox.inputRef) this.searchBox.inputRef.focus();
      });
    } else {
      const receiveList = filteredTaskList.map(item => {
        if (item.rejReasonOth || (item.rejReasonCdList && item.rejReasonCdList.length > 0)) {
          return {
            barcodeId: item.barcodeId,
            rejReasonOth: item.rejReasonOth,
            rejReasonCdList: item.rejReasonCdList,
            rejFileList: item.rejFileList.map(item => item.fileId),
          };
        }
        return { barcodeId: item.barcodeId };
      });
      submitReceivedSamplesAction({ receiveList });
    }
  };

  render() {
    const {
      isShowConfirmModal,
      isReacceptSample,
      isShowRejectModal,
      isReviewReason,
      modalStep,
      barcodeId,
    } = this.state;
    const {
      ui: { isLoading, loadingText, isSubmitted },
      data: { filteredTaskList, scannedSample },
      fontSize,
    } = this.props;

    const rejectedCount = filteredTaskList.filter(item => {
      if (isSubmitted) {
        return (item.rejectReasonList && item.rejectReasonList.length > 0) || item.rejectReasonOther;
      }
      return (item.rejReasonCdList && item.rejReasonCdList.length > 0) || item.rejReasonOth;
    }).length;
    const acceptedCount = filteredTaskList.length - rejectedCount;

    const columnPreSubmit = [
      {
        Header: 'Send Date',
        accessor: 'sendDate',
        width: 150,
      },
      {
        Header: 'Send Time',
        accessor: 'sendTime',
        width: 150,
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 100,
      },
      {
        Header: 'Sender Name',
        accessor: 'senderName',
      },
      {
        Header: 'Contact',
        accessor: 'senderContactNo',
      },
      {
        Header: 'Barcode ID',
        accessor: 'barcodeId',
      },
      {
        Header: 'Status',
        accessor: 'sampleStatusDesc',
      },
      {
        Header: 'Action',
        headerClassName: 'th-center',
        className: 'rt-overflow-visible justify-content-center',
        width: 300,
        Cell: cellInfo => {
          const { barcodeId, _original, senderName } = cellInfo.row;
          if ((_original.rejReasonCdList && _original.rejReasonCdList.length > 0) || _original.rejReasonOth) {
            return (
              <UncontrolledDropdown>
                <DropdownToggle tag="span">
                  <MeatballMenu height={32} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => this.toggleReviewReasonModal(_original)}>View Reason</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={() =>
                      this.toggleConfirmModal({
                        sample: _original,
                        isReacceptSample: true,
                      })
                    }
                  >
                    Reaccept
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            );
          }
          if (scannedSample && scannedSample.barcodeId === barcodeId) {
            if (!senderName && !_original.isUrgentCase) {
              return (
                <UncontrolledDropdown>
                  <DropdownToggle tag="span">
                    <MeatballMenu height={32} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() =>
                        this.toggleConfirmModal({
                          sample: _original,
                          isReacceptSample: false,
                        })
                      }
                    >
                      Accept
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={() =>
                        this.toggleReasonModal({
                          sample: _original,
                          isReviewReason: false,
                        })
                      }
                    >
                      Reject
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              );
            }
            return (
              <button
                type="button"
                className="btn btn-sec full-width"
                onClick={() =>
                  this.toggleReasonModal({
                    sample: _original,
                    isReviewReason: false,
                    isClearData: true,
                  })
                }
              >
                Reject
              </button>
            );
          }
          return <div />;
        },
      },
    ];
    const columnPostSubmit = [
      {
        Header: 'Send Date',
        accessor: 'sendDate',
      },
      {
        Header: 'Send Time',
        accessor: 'sendTime',
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 100,
      },
      {
        Header: 'Sender Name',
        accessor: 'senderName',
      },
      {
        Header: 'Contact',
        accessor: 'senderContactNo',
      },
      {
        Header: 'Barcode ID',
        accessor: 'barcodeId',
      },
      {
        Header: 'Status',
        accessor: 'sampleStatusDesc',
      },
      {
        Header: 'Received Date',
        accessor: 'receivedDate',
      },
      {
        Header: 'Received Time',
        accessor: 'receivedTime',
      },
      {
        Header: 'Reject Reason',
        width: 200,
        Cell: cellInfo => {
          const {
            _original: { rejectReasonList, rejectReasonOther },
          } = cellInfo.row;
          let reasons = '';
          if (rejectReasonList && rejectReasonList.length > 0) {
            reasons = rejectReasonList.join(', ');
          }
          if (rejectReasonOther) {
            reasons += rejectReasonOther;
          }
          return <span style={{ display: 'block', whiteSpace: 'normal' }}>{reasons}</span>;
        },
      },
    ];

    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Receive Sample" />
          <div className="contentWrapper">
            <BreadCrumb page="Receive Sample" parent="Sample Management" />
            <div className="main-title">
              <h1>Receive Sample</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode"
                  placeholder="Scan or enter Barcode ID (Must be exact Barcode ID: i.e. ERO-A200456-20)"
                  onSubmit={this.onSubmitBarcode}
                  value={barcodeId}
                  onChangeText={text => this.setState({ barcodeId: text })}
                  autoFocus
                  disabled={isSubmitted}
                  ref={ref => {
                    this.searchBox = ref;
                  }}
                />
              </div>
            </div>
            <div className="main-title">
              <div className="receive__numbers">
                <div className="receive__number receive__accepted">
                  <span className="receive__label">Samples Accepted:</span>
                  <span>{acceptedCount}</span>
                </div>

                <div className="receive__number receive__rejected">
                  <span className="receive__label"> Samples Rejected:</span>
                  <span>{rejectedCount}</span>
                </div>
              </div>
            </div>
            <div className="paddingBottom50 tabsContainer">
              <div style={{ fontSize: `${fontSize}px` }}>
                <DataTable
                  data={filteredTaskList}
                  columns={isSubmitted ? columnPostSubmit : columnPreSubmit}
                  getTrProps={this.getTrProps}
                  pageSizeHidden
                />
                {(acceptedCount > 0 || rejectedCount > 0) && (
                  <div className="text-center mb-5">
                    <button type="button" className="btn btn-pri" onClick={this.onSubmitReceivedSample}>
                      {isSubmitted ? 'OK' : 'Submit'}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <InPageLoading isLoading={isLoading} text={loadingText} />
            <Footer />
            <CustomModal
              isOpen={isShowRejectModal && !isReviewReason}
              type="action-modal"
              headerTitle={modalStep === 1 ? 'Reason' : 'Image (optional)'}
              cancelTitle="Cancel"
              onCancel={() => this.toggleReasonModal({ isClearData: true })}
              confirmTitle={modalStep === 1 ? 'Next' : 'Submit'}
              onConfirm={this.onNextReasonModal}
              content={modalStep === 1 ? this.renderReasonModalStep1() : this.renderReasonModalStep2()}
            />
            <CustomModal
              isOpen={isShowRejectModal && isReviewReason}
              type="action-modal"
              headerTitle="Reason"
              cancelTitle="Cancel"
              onCancel={() => this.toggleReviewReasonModal()}
              confirmTitle="Edit reason"
              onConfirm={this.onEditReason}
              content={this.renderReviewReason()}
            />
            <CustomModal
              isOpen={isShowConfirmModal}
              type="system-modal"
              headerTitle={isReacceptSample ? 'Do you want to re-accept' : 'Is this an urgent case ?'}
              cancelTitle="Cancel"
              onCancel={this.toggleConfirmModal}
              confirmTitle="Accept"
              onConfirm={isReacceptSample ? this.onReacceptSample : this.onAcceptSample}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, sampleIdentificationReducers: { receiveSample } }, ownProps) => ({
  ...ownProps,
  ...receiveSample,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  receiveSampleFilterAction: receiveSampleFilter,
  receiveValidateBarcodeAction: receiveValidateBarcode,
  resetReceiveSampleReducerAction: resetReceiveSampleReducer,
  rejectSampleAction: rejectSample,
  acceptUrgentSampleAction: acceptUrgentSample,
  reacceptSampleAction: reacceptSample,
  submitReceivedSamplesAction: submitReceivedSamples,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ReceiveSample));
