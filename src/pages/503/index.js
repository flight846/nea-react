import React from 'react';
import { ReactComponent as ErrorIcon } from 'assets/svg/error.svg';
import { ReactComponent as ServiceUnavailableIcon } from 'assets/svg/503.svg';
import { Link } from 'react-router-dom';
import './style.scss';

const ServiceUnavailable = () => (
  <div className="app__page service_navailable__page">
    <main className="service_navailable__content container-fluid text-center">
      <ServiceUnavailableIcon className="service_navailable__icon" />
      <div className="service_navailable__inner">
        <ErrorIcon />
        <h3 className="service_navailable__title">Service unavaible</h3>
        <p className="service_navailable__desc">
          Maybe you must go back and try a different keyword
        </p>
      </div>

    </main>
  </div>
);

export default ServiceUnavailable;
