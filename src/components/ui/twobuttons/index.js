import React from 'react';

import './style.scss';

const TwoButtons = () => {
  return (
    <div className="component__action-dot">
      <div className="action-dot">
        ...
        <div className="action-dot-click" id="ac_dot">
          <a href="#" className="action-list">
            View Reason
          </a>
          <a href="#" className="action-list">
            Reaccept
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoButtons;
