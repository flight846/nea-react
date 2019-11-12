import React from 'react';
import { connect } from 'react-redux';

import Accordion from 'components/common/accordion';
import ReadOnlyFindings from 'components/pages/inspectionForm/readonlySampleFindings';

// import './style.scss';

class AnalysisTab extends React.Component {
  constructor(props) {
    super(props);
    const habitatGroups = props.detail ? props.detail.habitatGroups || [] : [];
    this.state = {
      habitatGroups,
    };
  }

  getClassNameFromSampleStatus = status => {
    let headerColor = '';
    let badgeClass = '';
    let isSampleEdittable = false;

    switch (status) {
      case 'Identified': {
        headerColor = 'grey';
        badgeClass = 'badge-success';
        isSampleEdittable = false;
        break;
      }
      case 'Pending Identification': {
        headerColor = 'grey';
        badgeClass = 'badge-warning';
        isSampleEdittable = true;
        break;
      }
      case 'Sending to EHI': {
        headerColor = 'grey';
        badgeClass = 'badge-purple';
        isSampleEdittable = true;
        break;
      }
      case 'Rejected': {
        headerColor = 'grey';
        badgeClass = 'badge-danger';
        isSampleEdittable = true;
        break;
      }
      default: {
        headerColor = 'grey';
        badgeClass = 'badge-light';
        isSampleEdittable = false;
        break;
      }
    }

    return { headerColor, badgeClass, isSampleEdittable };
  };

  render() {
    const { habitatGroups } = this.state;
    return (
      <div className="inspection_form_analysis">
        {habitatGroups &&
          habitatGroups.map((habitat, hIndex) => (
            <div className="tab-pane__group" key={`habitat_groups_${hIndex.toString()}`}>
              <p className="tab-pane__title">
                Habitat {habitat.serialNo}: {habitat.habitatType}
                <span className="m-1">|</span>
                {habitat.habitatSize}
                <span className="m-1">|</span>
                {habitat.locationBreeding}
              </p>
              {habitat.samples &&
                habitat.samples.map((sample, sIndex) => {
                  const {
                    update,
                    sampleStatus,
                    barcodeId,
                    sampleId,
                    collectedDateTime,
                    receivedDateTime,
                    receivedBy,
                    sentDateTime,
                    firstExaminedDateTime,
                    identifiedBy,
                    densityInContainer,
                    densityPerDip,
                    findings,
                  } = sample;
                  const { headerColor, badgeClass } = this.getClassNameFromSampleStatus(sampleStatus);
                  const headerChildren = (
                    <>
                      <h3 className="mr-2">Barcode ID: </h3>
                      <h3 className="bold-font">{barcodeId}</h3>
                      <span className={`badge ${badgeClass}`}>{sampleStatus}</span>
                    </>
                  );
                  return (
                    <Accordion
                      key={`habitat_${hIndex + 1}_sample_${sIndex + 1}`}
                      id={`habitat_${hIndex + 1}_sample_${sIndex + 1}`}
                      isEdit={update}
                      isOpen={false}
                      headerColor={headerColor}
                      headerChildren={headerChildren}
                    >
                      <div className="row section">
                        <div className="col-xl-3 col-5 mb-2">
                          <p className="small-grey-text mb-0">Sample ID:</p>
                          <p className="mb-0">{sampleId}</p>
                        </div>
                        <div className="col-xl-9 col-7">
                          <div className="row">
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Date and Time Collected</p>
                              <p className="mb-0">{collectedDateTime}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Received as at</p>
                              <p className="mb-0">{receivedDateTime}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Received by</p>
                              <p className="mb-0">{receivedBy}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Sent as at</p>
                              <p className="mb-0">{sentDateTime}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">First examined at</p>
                              <p className="mb-0">{firstExaminedDateTime}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Identified by</p>
                              <p className="mb-0">{identifiedBy}</p>
                            </div>
                            <div className="col-6 col-xl-4 details-info">
                              <p className="small-grey-text mb-0">Density</p>
                              <p className="mb-0">
                                {densityInContainer}
                                {', '}
                                {densityPerDip}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Edit Findings */}
                      <div>
                        {findings &&
                          findings.map((finding, fIndex) => (
                            <ReadOnlyFindings
                              key={`readonly_finding_${finding.findingsId}`}
                              finding={finding}
                              index={fIndex + 1}
                              isShowEdit={false}
                            />
                          ))}
                      </div>
                    </Accordion>
                  );
                })}
            </div>
          ))}
      </div>
    );
  }
}

// export default AnalysisTab;

const mapStateToProps = ({ global, vectorInspectionReducers: { queryInspectionFormDetail } }, ownProps) => ({
  ...ownProps,
  ...queryInspectionFormDetail,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnalysisTab);
