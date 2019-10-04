import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const SampleStatus = () => {
	return (
		<div class="SampleSelWrapper">
		    <div class="sampleSelCont">
		        <div class="sampleTxt">Sample Accepted</div>
		        <div class="sampleCount">6</div>
		        <div class="clearfix"></div>
		    </div>
		    <div class="sampleSelCont">
		        <div class="sampleTxt">Sample Rejected</div>
		        <div class="sampleCount">6</div>
		        <div class="clearfix"></div>
		    </div>
		</div>
	)
}

export default SampleStatus;