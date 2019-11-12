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

import CertificationTab from 'components/pages/inspectionForm/certificationTab';
import InfoTab from 'components/pages/inspectionForm/infoTab';

import AnalysisTab from './analysis';
import { getQueryInspectionFormDetailAction } from './action';

import './style.scss';

class FormDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '0',
      isDetailLoaded: false,
    };
  }

  componentDidMount() {
    const {
      getQueryInspectionFormDetailAction,
      location: { search },
    } = this.props;

    const { inspectionId } = queryString.parse(search);
    if (inspectionId) {
      getQueryInspectionFormDetailAction({ inspectionId }).then(() => {
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

  render() {
    const { activeTab, isDetailLoaded } = this.state;
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
            <BreadCrumb page="Inspection Form Detail" parent="Vector Inspection" />
            {isDetailLoaded && (
              <div className="paddingBottom50">
                <div className="go-back">
                  <a href="#" onClick={this.handleBack}>
                    Inspection ID: {formDetail && formDetail.info && formDetail.info.inspectionId}
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
                      <InfoTab detail={formDetail.info} />
                    </TabPane>
                    <TabPane tabId="1">
                      <AnalysisTab detail={formDetail.analysis} />
                    </TabPane>
                    <TabPane tabId="2">
                      <CertificationTab isSubmitted={isSubmitted} detail={formDetail.certification} />
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

const mapStateToProps = ({ global, vectorInspectionReducers: { queryInspectionFormDetail } }, ownProps) => ({
  ...ownProps,
  ...queryInspectionFormDetail,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getQueryInspectionFormDetailAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FormDetail));
