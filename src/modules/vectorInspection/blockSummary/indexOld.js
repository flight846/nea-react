import React, {Fragment,Component} from 'react';

import { Link, withRouter } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Breadcrumb from 'components/ui/breadcrumb';
import Footer from 'components/ui/footer';

import './style.scss';

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

class BlockSummary extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <div className="main-content">
                    <NavBar active="task" />
                    <div className="contentWrapper">
                        <Breadcrumb />
                        <div className="main-title">
                            <h1>Block Summary</h1>
                        </div>
                        <div className="block-summary filterMainWrapper" style={{ padding: '30px' }}>
                            <form>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="nea-select-box navtab-select form-group" style={{ width: '254px' }}>
                                            <select className="form-control text-blue" placeholder="Please select">
                                                <option>Search by</option>
                                                <option>Option</option>
                                                <option>Option</option>
                                            </select>
                                        </div>      
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder='Search by keywords'/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Add from date</button>
                                        <button className="btn btn-outline-secondary" type="button">Add to date</button>
                                    </div>      
                                </div>

                                <div className="form-inline justify-content-between">
                                    <div className="nea-select-box form-group form-group__stacked">
                                        <label>Premise Type</label>
                                        <select className="form-control text-blue" placeholder="Please select">
                                            <option>Search by</option>
                                            <option>Option</option>
                                            <option>Option</option>
                                        </select>
                                    </div>
                                    <div className="nea-select-box form-group form-group__stacked">
                                        <label>RO</label>
                                        <select className="form-control text-blue" placeholder="Please select">
                                            <option>Search by</option>
                                            <option>Option</option>
                                            <option>Option</option>
                                        </select>
                                    </div>
                                    <div className="form-group form-group__stacked">
                                        <div className="searchToken show">
                                            <div className="searchWrapper">
                                                <label>Division</label>
                                                <input type="text" className="searchTextfield" placeholder="Division" />
                                            </div>
                                            <div className="chkboxCont shadow-sm" style={{ maxHeight: '120px' }}>
                                                <div className="custom-control custom-checkbox marginBottom15">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        <p className="mb-0">A</p>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox marginBottom15">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">
                                                        <p className="mb-0">B</p>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox marginBottom15">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">
                                                        <p className="mb-0">C</p>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox marginBottom15">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                    <label className="custom-control-label" htmlFor="customCheck4">
                                                        <p className="mb-0">D</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group form-group__stacked">
                                        <label>Officer Name</label>
                                        <input type="text" className="form-control"/>
                                        <SearchIcon className="searchIcon" />
                                    </div>

                                    <div className="button-group text-right">
                                        <button type="submit" className="btn btn-primary marginTop30">Search</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <button type="submit" className="btn btn-outline text-blue" style={{ textDecoration: 'underline'}}>Show less option</button>
                                    </div>
                                </div>

                            
                            </form>
                            
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlockSummary;
