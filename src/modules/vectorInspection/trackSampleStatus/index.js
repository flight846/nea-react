import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import Header from 'components/ui/header';
import NavBar from 'components/ui/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import SearchBox from 'components/common/searchBox';
import Sort from 'components/common/sort';
import Filter, { FilterType } from 'components/common/filter';
import DataTable from 'components/common/data-table';
import Footer from 'components/ui/footer';

import './style.scss';

import * as action from './action';

const searchData = [
  {
    label: 'Inspection ID',
    value: 'inspectionId',
  },
  {
    label: 'Barcode ID',
    value: 'barcodeId',
  },
  {
    label: 'Sample ID',
    value: 'sampleId',
  },
  {
    label: 'RO Officer',
    value: 'roOfficer',
  },
];

const columns = [
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
    Cell: cellInfo => (
      <a href="#" className="text-blue" onClick={() => this.navigateToDetail(cellInfo.row.barcodeId)}>
        {cellInfo.row.barcodeId}
      </a>
    ),
  },
  {
    Header: 'Sample ID',
    accessor: 'sampleId',
  },
  {
    Header: 'Deposited by',
    accessor: 'depositorName',
  },
  {
    Header: 'Sender Name',
    accessor: 'senderName',
  },
  {
    Header: 'Sent as at',
    accessor: 'sendDateTime',
  },
  {
    Header: 'Received by EHI as at',
    accessor: 'receivedDateTime',
  },
  {
    Header: 'Identification Status',
    accessor: 'sampleStatusDesc',
  },
];

const filterValues = [
  {
    type: FilterType.SELECT,
    title: 'Sample Status',
    id: 'receivedDateTime',
    values: [
      'Collected by Officer',
      'Deposited by Officer',
      'Rejected by Sender',
      'Sent to EHI',
      'Received by EHI',
      'Rejected by EHI',
    ],
  },
  {
    type: FilterType.SELECT,
    title: 'Identification Status',
    id: 'sampleStatusDesc',
    values: ['ID Pending', 'ID Completed'],
  },
];

const TrackSampleStatus = props => {
  const {
    getTrackListingAction,
    getTrackListingFilterAction,
    data: { samples, filteredSamples },
  } = props;

  const [sortValue, setSortValue] = useState({
    id: 'breedingDectionDate',
    label: 'Breeding Detection',
    desc: false,
  });

  const [filterValue, setFilterValue] = useState();

  const [searchText, setSearchText] = useState('');

  const [debounceSearchText] = useDebounce(searchText, 1000);

  const [searchType, setSearchType] = useState('inspectionId');

  const onChangeFilter = data => {
    setFilterValue(data);
  };

  const onChangeSort = value => {
    setSortValue(value);
  };

  const onChangeText = text => {
    setSearchText(text);
  };

  const onChangeSearchType = event => {
    setSearchType(event.target.value);
  };

  const filterSample = () => {
    getTrackListingFilterAction({ searchText, searchType, sortValue, filterValue });
  };

  useEffect(() => {
    getTrackListingAction({
      startDate: 'string',
      endDate: 'string',
    });
  }, []);

  useEffect(() => {
    filterSample();
  }, [debounceSearchText, searchType, sortValue, filterValue]);

  return (
    <>
      <Header />

      <div className="main-content">
        <NavBar active="Track Sample Status" />

        <div className="contentWrapper">
          <Breadcrumb parent="Sample Management" page="Track Sample Status" />

          <div className="main-title">
            <h1>Track Sample Status</h1>
          </div>

          <div className="navbar navbar-expand filterMainWrapper">
            <div className="collapse navbar-collapse">
              <SearchBox
                placeholder="Search by keyword"
                searchTypes={searchData}
                value={searchText}
                onChangeText={onChangeText}
                onChangeSearchType={onChangeSearchType}
              />
              <Filter className="navbar-nav filterWrapper" data={filterValues} onChange={onChangeFilter} />
              <Sort
                className="navbar-nav sortWrapper"
                data={columns}
                value={sortValue}
                desc={sortValue.desc}
                onChange={onChangeSort}
              />
            </div>
          </div>
          <div>
            <DataTable data={filteredSamples} columns={columns} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ global, vectorInspectionReducers: { trackStatus } }) => ({
  ...global,
  ...trackStatus,
});

const mapDispatchToProps = {
  getTrackListingAction: action.getTrackListingAction,
  getTrackListingFilterAction: action.getTrackListingFilterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(TrackSampleStatus));
