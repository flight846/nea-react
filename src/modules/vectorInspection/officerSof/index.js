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

import StatementOfcer from './statementOfficer';
import AdditionalInfo from './additionalInfo';

import { getSOFDetailAction, resetSOFDetailAction } from './action';

import './style.scss';

class OfficerSof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '0',
      isDetailLoaded: false,
    };
  }

  componentDidMount() {
    const {
      resetSOFDetailAction,
      getSOFDetailAction,
      location: { search },
    } = this.props;

    const { inspectionId } = queryString.parse(search);
    if (inspectionId) {
      resetSOFDetailAction();
      getSOFDetailAction(inspectionId).then(() => {
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
      data: { inspectionId, sof },
      fontSize,
    } = this.props;
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="task" />
          <div className="contentWrapper">
            <BreadCrumb />
            {isDetailLoaded && (
              <>
                <div className="go-back">
                  <a href="#" onClick={this.handleBack}>
                    Statement of Officer for Inspection ID: {inspectionId}
                  </a>
                </div>
                <div className="tabsContainer">
                  <TabNav
                    onToggleTab={this.toggle}
                    activeTab={activeTab}
                    menu={['Statement of Officer', 'Additional Info']}
                  />
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="0">
                      <StatementOfcer sof={sof} fontSize={fontSize} />
                    </TabPane>
                    <TabPane tabId="1">
                      <AdditionalInfo sof={sof} />
                    </TabPane>
                  </TabContent>
                </div>
              </>
            )}
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, vectorInspectionReducers: { officerSof } }, ownProps) => ({
  ...ownProps,
  ...officerSof,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getSOFDetailAction,
  resetSOFDetailAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(OfficerSof));
