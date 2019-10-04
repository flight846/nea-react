import React from 'react';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import './style.scss';

const SearchBox = () => (
  <ul className="navbar-nav searchFilter">
    <li>
      <div className="searchWrapper hidden">
        <input
          type="text"
          className="searchTextfield"
          placeholder="Please scan or enter Barcode ID"
        />
        <Search className="searchIcon" />
      </div>
      <div className="searchWrapper mainSearch">
        <input
          type="text"
          className="searchTextfield"
          placeholder="Please scan or enter Barcode ID"
        />
        <Search className="searchIcon" />
      </div>
    </li>
  </ul>
);

export default SearchBox;
