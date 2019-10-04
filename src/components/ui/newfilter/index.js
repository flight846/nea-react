import React from 'react';
import FilterToggle from '../filtertoggle';
import SortbyToggle from '../sortbytoggle';
import Searh from '../search';

import './style.scss';

const Newfilter = () => (
  <div className="navbar navbar-expand filterMainWrapper">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav searchFilter">
        <li>
          <Searh />
        </li>
      </ul>
      <FilterToggle className="navbar-nav filterWrapper ml-auto" />
      <SortbyToggle className="navbar-nav sortWrapper" />
    </div>
  </div>
);

export default Newfilter;
