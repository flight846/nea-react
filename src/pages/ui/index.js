/* eslint-disable react/jsx-fragments */
import React, { Component, Fragment } from 'react';
import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import BreadCrumb from 'components/ui/breadcrumb';
import TabNav from 'components/ui/tabnav';
// import Filter from 'components/ui/filter';
import NewFilter from 'components/ui/newfilter';
import ShowList from 'components/ui/showlist';
import Tables from 'components/ui/tables';
import Footer from 'components/ui/footer';
import CustomModal from 'components/ui/modal';
// import './style.scss';

class Ui extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      modalOpened: false,
      modalType: 'action-modal',
      activeTab: '0'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-content">
          <NavBar />
          <div className="contentWrapper">
            <BreadCrumb />
            <div className="main-title">
              <h1>Identity Samples</h1>
            </div>
            <div className="tabsContainer">
              <TabNav onToggleTab={ (tab) => { this.toggle(tab) } } activeTab={ this.state.activeTab } menu={['All (60)', 'CRO (20)', 'ERO (20)', 'WRO (20)']}/>
            </div>
            <NewFilter />
            <ShowList />
            <Tables />
            <Footer />
            <CustomModal className='modal-dialog-centered' show={this.state.modalOpened} type={this.state.modalType} />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Ui;
