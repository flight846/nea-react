import React from 'react';

import './style.scss';

const TrapInfo = () => (
  <div className="trapinfo">
    <div className="trapinfo__content">
      <div className="row">
        <div className="col-6">
          <div className="trapinfo__row">
            <div className="trapinfo__label">RO</div>
            <div className="trapinfo__value">CRO</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Division</div>
            <div className="trapinfo__value">Ang Mo Kio</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">GRC</div>
            <div className="trapinfo__value">Ang Mo Kio GRC</div>
          </div>
        </div>
        <div className="col-6">
          <div className="trapinfo__row">
            <div className="trapinfo__label">Block</div>
            <div className="trapinfo__value">123</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Road</div>
            <div className="trapinfo__value">Ang Mo Kio Road</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Level</div>
            <div className="trapinfo__value">02</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Unit</div>
            <div className="trapinfo__value">123</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Trap Code</div>
            <div className="trapinfo__value">2A</div>
          </div>
          <div className="trapinfo__row">
            <div className="trapinfo__label">Postal Code</div>
            <div className="trapinfo__value">530123</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TrapInfo;
