import React from 'react';
import BinaryImageGallery from 'components/common/binaryImageGallery';

const LarvalInstars = ['1', '2', '3', '4'];

class ReadOnlyFindings extends React.PureComponent {
  renderSpecimenStage = finding => {
    const { specimenStage, maleCount, femaleCount, unidentifiedCount } = finding;
    if (!specimenStage || specimenStage === '') {
      return <></>;
    }

    const adultCheck = stage => {
      return stage === 'A';
    };
    const larvalInstarCheck = stage => {
      return LarvalInstars.includes(stage);
    };

    const resultHtml = [];

    if (LarvalInstars.some(item => specimenStage.includes(item))) {
      resultHtml.push(
        <li className="form-nea__block" key="specimen_stage_larval_instar">
          <div className="nea-chkbx form-group">
            <label className="custom-chckbbox">
              Larval Instar
              <input className="form-control checked" type="checkbox" value="" checked disabled />
              <span className="checkmark" />
            </label>
          </div>
          <ul className="form-nea__checkgroup-ul show">
            {LarvalInstars.map(item => (
              <li className="form-nea__inline" key={`specimen_stage_larval_instar_${item}`}>
                <div className="nea-chkbx form-group">
                  <label className="custom-chckbbox">
                    {item}
                    <input
                      className={`form-control ${specimenStage.includes(item) && 'checked'}`}
                      type="checkbox"
                      value={item}
                    />
                    <span className="checkmark disabled" />
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </li>,
      );
    }

    if (Array.isArray(specimenStage)) {
      specimenStage.forEach((stage, index) => {
        if (adultCheck(stage)) {
          resultHtml.push(
            <li className="form-nea__block" key={`specimen_stage_${stage}_${index.toString()}`}>
              <div className="nea-chkbx form-group">
                <label className="custom-chckbbox">
                  Adult
                  <input className="form-control checked" type="checkbox" value={stage} checked disabled />
                  <span className="checkmark" />
                </label>
              </div>
              <ul className="form-nea__checkgroup-ul show">
                <li className="form-nea__inline sm-w-30p">
                  <div className="form-group">
                    <label className="custom-textbox">
                      Male(s)
                      <input
                        className="form-control textField"
                        type="text"
                        value={maleCount}
                        placeholder="00"
                        disabled
                      />
                    </label>
                  </div>
                </li>
                <li className="form-nea__inline sm-w-30p">
                  <div className="form-group hasError">
                    <label className="custom-textbox">
                      Female(s)
                      <input
                        className="form-control textField"
                        type="text"
                        value={femaleCount}
                        placeholder="00"
                        disabled
                      />
                    </label>
                  </div>
                </li>
                <li className="form-nea__inline sm-w-30p">
                  <div className="form-group hasError">
                    <label className="custom-textbox">
                      Not Identifiable
                      <input
                        className="form-control textField"
                        type="text"
                        value={unidentifiedCount}
                        placeholder="00"
                        disabled
                      />
                    </label>
                  </div>
                </li>
              </ul>
            </li>,
          );
        } else if (!larvalInstarCheck(stage)) {
          resultHtml.push(
            <li className="form-nea__block" key={`specimen_stage_${stage}_${index.toString()}`}>
              <div className="nea-chkbx form-group">
                <label className="custom-chckbbox">
                  {stage}
                  <input className="form-control checked" type="checkbox" value={stage} checked readOnly />
                  <span className="checkmark" />
                </label>
              </div>
            </li>,
          );
        }
      });
    }

    return <ul className="form-nea__checkgroup mt-1-tablet">{resultHtml}</ul>;
  };

  render() {
    const { finding, index, isShowEdit, onPressEdit } = this.props;
    const {
      // findingsId,
      findingStatus,
      specimenName,
      speciesName,
      vectorOfDisease,
      sampleTreatment,
      purpose,
      researcherName,
      // specimenStage,
      specimenType,
      remarks,
      fileIdList,
    } = finding;
    const checkFindingStatus = !findingStatus || findingStatus === 'Pending' || findingStatus === 'Identified';
    return (
      <div>
        <div className="row section finding-header">
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="d-flex row">
              <div className="col-md-4 col-xl-3">
                <h3 className="font-weight-bold">Findings {index}</h3>
              </div>
              <div className="col-md-8 col-xl-9">
                <h3>{findingStatus}</h3>
              </div>
            </div>
          </div>
          {isShowEdit && (
            <div className="col-6">
              <div className="nea-btn-group">
                <small className="mr-3 body2" style={{ alignSelf: 'center' }}>
                  Save as at <span>01/02/2019 18:00</span>
                </small>
                <button
                  type="button"
                  className="btn btn-sec"
                  onClick={onPressEdit && onPressEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
        {checkFindingStatus && (
          <div className="row section">
            <div className="col-4">
              <div className="label-group details-info">
                <label className="small-grey-text mb-0">Specimen</label>
                <p className="col-form-label font-weight-bold">{specimenName}</p>
              </div>
              {specimenName === 'Rodent' && (
                <div className="label-group details-info">
                  <label className="small-grey-text mb-0">Specimen Type</label>
                  <p className="col-form-label font-weight-bold">{specimenType}</p>
                </div>
              )}
              {specimenName !== 'Rodent' && (
                <div className="label-group details-info">
                  <label className="small-grey-text mb-0">Specimen Stage</label>
                  <div className="col-form-label font-weight-bold">{this.renderSpecimenStage(finding)}</div>
                </div>
              )}
            </div>
            <div className="col-8">
              <div className="row details-info">
                <div className="col-6">
                  <div className="label-group details-info">
                    <label className="small-grey-text mb-0">Species</label>
                    <p className="col-form-label font-weight-bold font-italic">{speciesName}</p>
                  </div>
                  <div className="label-group details-info">
                    <label className="small-grey-text mb-0">Vector of Disease</label>
                    <p className="col-form-label font-weight-bold font-italic">{vectorOfDisease}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="label-group details-info">
                    <label className="small-grey-text mb-0">Sample Treatment</label>
                    <p className="col-form-label font-weight-bold">{sampleTreatment}</p>
                  </div>
                  {sampleTreatment === 'Research' && (
                    <>
                      <div className="label-group details-info">
                        <label className="small-grey-text mb-0">Purpose</label>
                        <p className="col-form-label font-weight-bold">{purpose}</p>
                      </div>
                      <div className="label-group details-info">
                        <label className="small-grey-text mb-0">Officer Name</label>
                        <p className="col-form-label font-weight-bold">{researcherName}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="label-group details-info">
                    <label className="small-grey-text mb-0">Remarks</label>
                    <p className="col-form-label font-weight-bold">{remarks}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!checkFindingStatus && (
          <div className="row section">
            <div className="col-md-12 col-xl-6">
              <div className="label-group details-info">
                <label className="small-grey-text mb-0">Remarks</label>
                <p className="col-form-label font-weight-bold">{remarks}</p>
              </div>
            </div>
            <div className="col-md-12 col-xl-6 form-nea__checkgroup">
              <div className="form-nea__checkgroup-toggle show">
                <div className="form-group marginBottom15">
                  <div className="row">
                    <div className="label-group details-info">
                      <label className="small-grey-text mb-0">Images</label>
                      <BinaryImageGallery fileIdList={fileIdList} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ReadOnlyFindings;
