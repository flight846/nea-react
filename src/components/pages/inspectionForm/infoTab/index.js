import React from 'react';

// import './style.scss';

const InfoTab = props => {
  const { detail } = props;
  if (!detail) {
    return <div />;
  }
  const {
    premisesAddress,
    // inspectionStatus,
    regionOfficeCode,
    collectorName,
    collectorDesignation,
    collectedDateTime,
    surveyPurpose,
  } = detail;
  // TODO: show VOID in upper right corner
  // TODO: add "Statement of Officer" for role Officer based on FSD file page 55
  return (
    <div className="inspection_form_info">
      {/* <p className="tab-pane__title text-bold">FORM 3 ID: </p> */}
      <div className="tab-pane__group">
        <div className="card bg-white">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <div className="label-group mb-4">
                  <label className="small-grey-text mb-0">RO</label>
                  <p className="col-form-label font-weight-bold">{regionOfficeCode}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="label-group mb-4">
                  <label className="small-grey-text mb-0">Date and Time Collected</label>
                  <p className="col-form-label font-weight-bold">{collectedDateTime}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="label-group mb-4">
                  <label className="small-grey-text mb-0">Collector's Name (Designation)</label>
                  <p className="col-form-label font-weight-bold">
                    {collectorName} ({collectorDesignation})
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="label-group mb-4">
                  <label className="small-grey-text mb-0">Disease Control</label>
                  <p className="col-form-label font-weight-bold">{surveyPurpose}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="label-group mb-4">
                  <label className="small-grey-text mb-0">Address of Premises</label>
                  <p className="col-form-label font-weight-bold">{premisesAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
