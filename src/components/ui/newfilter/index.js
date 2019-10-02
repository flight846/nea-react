import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import { ReactComponent as Filters } from 'assets/svg/filter.svg';
import { ReactComponent as Sort } from 'assets/svg/sort.svg';

import './style.scss';

const Newfilter = () => {
	return (
		<div className="navbar navbar-expand filterMainWrapper">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav searchFilter">
          <li>
            <div className="searchWrapper hidden">
              <input type="text" className="searchTextfield" placeholder="Please scan or enter Barcode ID" />
              <img src="img/icons/search.svg" className="searchIcon" />
            </div>
            <div className="searchWrapper mainSearch">
              <input type="text" className="searchTextfield" placeholder="Please scan or enter Barcode ID" />
              <img src="img/icons/search.svg" className="searchIcon" />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav filterWrapper ml-auto">
          <li className="nav-item dropdown position-static">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
            </a>
		                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className="clearfix filterColsCont">
                        <div className="filterCols">
                          <div className="paddingBottom10 font-bold">Premise</div>
                          <div className="searchWrapper">
                              <input type="text" className="searchTextfield" placeholder="Search premise" />
                              <img src="img/icons/search.svg" className="searchIcon" />
                          </div>
                          <div className="chkboxCont">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1">All</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" for="customCheck2">Apartment</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" for="customCheck3">HDB</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                <label className="custom-control-label" for="customCheck4">Condo</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                <label className="custom-control-label" for="customCheck5">Landed</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                <label className="custom-control-label" for="customCheck6">All</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                <label className="custom-control-label" for="customCheck7">Apartment</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                <label className="custom-control-label" for="customCheck8">HDB</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                <label className="custom-control-label" for="customCheck9">Condo</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                <label className="custom-control-label" for="customCheck10">Landed</label>
                            </div>
                          </div>
		                        </div>
		                        <div className="filterCols">
		                            <div className="paddingBottom10 font-bold">Division</div>
		                            <div className="searchWrapper">
		                                <input type="text" className="searchTextfield" placeholder="Search division" />
		                                <img src="img/icons/search.svg" className="searchIcon" />
		                            </div>
		                            <div className="chkboxCont">
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck11" />
		                                    <label className="custom-control-label" for="customCheck11">All</label>
		                                </div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck12" />
		                                    <label className="custom-control-label" for="customCheck12">Ang Mo Kio</label>
		                                </div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck13" />
		                                    <label className="custom-control-label" for="customCheck13">Aljunied</label>
		                                </div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck14" />
		                                    <label className="custom-control-label" for="customCheck14">Eunos</label>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="filterCols">
		                            <div className="paddingBottom10 font-bold">Status</div>
		                            <div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck15" />
		                                    <label className="custom-control-label" for="customCheck15">All</label>
		                                </div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck16" />
		                                    <label className="custom-control-label" for="customCheck16">Pending Audit</label>
		                                </div>
		                                <div className="custom-control custom-checkbox">
		                                    <input type="checkbox" className="custom-control-input" id="customCheck17" />
		                                    <label className="custom-control-label" for="customCheck17">Show Cause</label>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="filterBtnsCont clearfix">
		                        <div className="filterBtns">
		                            <a href="#" className="btn btn-pri">Apply</a>
		                        </div>
		                        <div className="filterBtns">
		                            <a href="#" className="btn btn-sec">Reset</a>
		                        </div>
		                    </div>
		                </div>
		            </li>
		        </ul>
        <ul className="navbar-nav sortWrapper">
          <li className="nav-item dropdown position-static">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort: Sent as at
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className="clearfix">
                          <div className="sortList">
                              <ul>
                                  <li><a href="#">Premise</a></li>
                                  <li><a href="#">Division</a></li>
                                  <li className="active"><a href="#">Task ID</a></li>
                                  <li><a href="#">Address</a></li>
                                  <li><a href="#">Trap Code</a></li>
                                  <li><a href="#">Eweek</a></li>
                                  <li><a href="#">Sample Bottles</a></li>
                                  <li><a href="#">Specimen</a></li>
                                  <li><a href="#">Status</a></li>
                              </ul>
                          </div>
                          <div className="sortBtnsCont clearfix">
                              <div className="sortBtns">
                                  <a href="#" className="btn btn-pri">Ascending</a>
                              </div>
                              <div className="sortBtns">
                                  <a href="#" className="btn btn-sec">Descending</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
		        </ul>
      </div>
		</div>
	)
}

export default Newfilter;
