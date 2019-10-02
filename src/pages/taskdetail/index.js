import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import BreadCrumb from 'components/ui/breadcrumb';

import TrapInfo from 'components/pages/taskdetail/trapinfo';
import Specimen from 'components/pages/taskdetail/specimen';
import ShowCause from 'components/pages/taskdetail/showcause';

import { ReactComponent as Back } from 'assets/svg/back.svg';
import './style.scss';

class TaskDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

  toggle = tab => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <TabPane className="task_detail__page">
        <Header />
        <TabPane className="main-content">
          <NavBar active="workspace" />
          <TabPane className="contentWrapper">
            <BreadCrumb page="detail" parent="My Workspace" />

            <div className="task_detail__header row align-items-center">
              <div className="col-6">
                <div className="main-title task_detail__title">
                  <button
                    type="button"
                    className="btn btn-link task_detail__back"
                  >
                    <span className="sr-only">back</span>
                    <Back width="30px" height="30px" />
                  </button>
                  <h1>Task ID: 2019-24-530123-2A</h1>
                </div>
              </div>
              <div className="col-6 ">
                <div className="task_detail__controls text-right">
                  <button type="button" className="btn btn-sec">
                    Save as draft
                  </button>
                  <button type="button" className="btn btn-sec">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <TabPane className="task_detail__body">
              <Nav className="task_detail__tabs" tabs>
                <NavItem className="task_detail__tab">
                  <NavLink
                    className={`${activeTab === '1' ? 'active' : ''}`}
                    onClick={() => this.toggle('1')}
                  >
                    Trap Info
                  </NavLink>
                </NavItem>
                <NavItem className="task_detail__tab">
                  <NavLink
                    className={`${activeTab === '2' ? 'active' : ''}`}
                    onClick={() => this.toggle('2')}
                  >
                    Specimen Identification
                  </NavLink>
                </NavItem>
                <NavItem className="task_detail__tab">
                  <NavLink
                    className={`${activeTab === '3' ? 'active' : ''}`}
                    onClick={() => this.toggle('3')}
                  >
                    Show Cause
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                className="task_detail__content"
                activeTab={activeTab}
              >
                <TabPane className="task_detail__panel" tabId="1">
                  <TrapInfo />
                </TabPane>
                <TabPane className="task_detail__panel" tabId="2">
                  <Specimen />
                </TabPane>
                <TabPane className="task_detail__panel" tabId="3">
                  <ShowCause />
                </TabPane>
              </TabContent>
            </TabPane>
          </TabPane>
        </TabPane>
      </TabPane>
    );
  }
}

export default TaskDetail;
