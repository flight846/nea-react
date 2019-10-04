/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
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

const Ui = () => {
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
          <TabNav />
          <NewFilter />
          <ShowList />
          <Tables />
          <Footer />
          <CustomModal className='modal-dialog-centered' show type='action-modal' />
        </div>
      </div>
    </Fragment>
  );
};

export default Ui;
