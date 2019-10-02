import React from 'react';
import { ReactComponent as ErrorIcon } from 'assets/svg/error.svg';
import { ReactComponent as NotFoundIcon } from 'assets/svg/404.svg';
// import { Link } from 'react-router-dom';
import './style.scss';

const NotFound = () => (
  <div className="app__page notfound__page">
    <main className="notfound__content container-fluid text-center">
      <NotFoundIcon className="notfound__icon" />
      <div className="notfound__inner">
        <ErrorIcon />
        <h3 className="notfound__title mb-5">Page not found</h3>
        <p className="notfound__desc">Maybe you must go back and try a different keyword</p>
      </div>
    </main>
  </div>
);

export default NotFound;
