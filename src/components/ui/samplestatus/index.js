import React from 'react';
import './style.scss';

const SampleStatus = () => {
  return (
    <div className="SampleSelWrapper">
      <div className="sampleSelCont clearfix">
        <div className="sampleTxt">Sample Accepted</div>
        <div className="sampleCount">6</div>
      </div>
      <div className="sampleSelCont clearfix">
        <div className="sampleTxt">Sample Rejected</div>
        <div className="sampleCount">6</div>
      </div>
    </div>
  )
}

export default SampleStatus;
