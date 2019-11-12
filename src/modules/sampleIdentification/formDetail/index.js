import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import queryString from 'query-string';

import Header from 'components/ui/header';
import TabNav from 'components/ui/tabnav';
import NavBar from 'components/layout/navbar';
import BreadCrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';
import InPageLoading from 'components/common/inPageLoading';

import InfoTab from './info';
import AnalysisTab from './analysis';
import CertificationTab from './certification';
import { getFormDetailAction, certifyFindingWithEmails, resetFormDetailReducer } from './action';

import './style.scss';

class FormDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '0',
      isDetailLoaded: false,
      scannedBarcodeId: '',
    };
  }

  componentDidMount() {
    const {
      resetFormDetailReducerAction,
      getFormDetailAction,
      // match: { params },
      location: { search },
    } = this.props;

    const { barcodeId, inspectionId } = queryString.parse(search);

    if (barcodeId) {
      resetFormDetailReducerAction();
      getFormDetailAction({ barcodeId }).then(() => {
        this.setState({
          isDetailLoaded: true,
          scannedBarcodeId: barcodeId,
        });
      });
    } else if (inspectionId) {
      resetFormDetailReducerAction();
      getFormDetailAction({ inspectionId }).then(() => {
        this.setState({
          isDetailLoaded: true,
        });
      });
    }
  }

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  onCeritfyFindings = emails => {
    const {
      certifyFindingWithEmailsAction,
      data: { formDetail },
    } = this.props;
    const inspectionId = formDetail.info ? formDetail.info.inspectionId || null : null;
    certifyFindingWithEmailsAction({ inspectionId, emailList: emails });
  };

  render() {
    const { activeTab, isDetailLoaded, scannedBarcodeId } = this.state;
    const {
      ui: { isLoading, isSubmitted },
      data: { formDetail },
    } = this.props;
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="form-detail" />
          <div className="contentWrapper">
            <BreadCrumb page="Detail" parent="Sample Management" />
            {isDetailLoaded && (
              <div className="paddingBottom50">
                <div className="go-back">
                  <a href="#" onClick={this.handleBack}>
                    Back to Inspection ID: {formDetail && formDetail.info && formDetail.info.inspectionId}
                  </a>
                </div>
                <div className="tabsContainer">
                  <TabNav
                    onToggleTab={this.toggle}
                    activeTab={activeTab}
                    menu={['Info', 'Analysis', 'Certification']}
                  />
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="0">
                      <InfoTab detail={formDetail?.info} />
                    </TabPane>
                    <TabPane tabId="1">
                      <AnalysisTab detail={formDetail?.analysis} scannedBarcodeId={scannedBarcodeId} />
                    </TabPane>
                    <TabPane tabId="2">
                      <CertificationTab
                        isSubmitted={isSubmitted}
                        detail={formDetail?.certification}
                        onSubmit={this.onCeritfyFindings}
                      />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            )}
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, sampleIdentificationReducers: { formDetail } }, ownProps) => ({
  ...ownProps,
  ...formDetail,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getFormDetailAction,
  certifyFindingWithEmailsAction: certifyFindingWithEmails,
  resetFormDetailReducerAction: resetFormDetailReducer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FormDetail));
