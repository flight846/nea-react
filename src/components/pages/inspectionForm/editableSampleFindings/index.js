/* eslint-disable react/button-has-type */
import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

import { SampleFindingStatusLOV, SpecimensLOV } from 'constants/data-list';

import { actionTryCatchCreator } from 'utils';

import {
  getFindingStatusLOV,
  getSpecimenLOV,
  getSpeciesForSpecimenLOV,
  getRodentSpecimenTypeLOV,
  getSampleTreatmentLOV,
  getSurveyPurposeLOV,
} from 'services/LOV/sampleInspectionForm';
import DropBox from 'components/common/dropbox';
import CustomModal from 'components/common/modal';

const LarvalInstars = ['1', '2', '3', '4'];

const initialState = {
  statusLOV: SampleFindingStatusLOV,
  specimenLOV: [],
  isSelectingRodentSpecimen: false,
  rodentSpecimenTypeLOV: [],
  specimenStageLOV: [],
  speciesLOV: [],
  isVector: false,
  vectorOfDiseaseLOV: null,
  purposeLOV: [],
  sampleTreatmentLOV: [],
  selectedSpeciesIndex: 0,
  rejFileList: [],
  isShowRemoveModal: false,
};

class EditableFindings extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    const statusResponse = await getFindingStatusLOV();

    const { status: specimenStatus, data: specimenData } = await getSpecimenLOV();
    const specimenLOV = specimenStatus === 200 && specimenData.status === 'Pass' ? specimenData.specimenCdVOList : [];
    specimenLOV.unshift({ specimenName: '-- Select --', specimenTypeCd: '' });

    const { status: rodentSpecimenTypeStatus, data: rodentSpecimenTypeData } = await getRodentSpecimenTypeLOV();
    const rodentSpecimenTypeLOV = rodentSpecimenTypeStatus === 200 ? rodentSpecimenTypeData.mastCdVo.mastCdDetList : [];
    rodentSpecimenTypeLOV.unshift({ codeDesc: '-- Select --', code: '' });

    const { status: sampleTreatmentStatus, data: sampleTreatmentData } = await getSampleTreatmentLOV();
    const sampleTreatmentLOV = sampleTreatmentStatus === 200 ? sampleTreatmentData.mastCdVo.mastCdDetList : [];

    const { status: surveyPurposeStatus, data: surveyPurposeData } = await getSurveyPurposeLOV();
    const purposeLOV = surveyPurposeStatus === 200 ? surveyPurposeData.mastCdVo.mastCdDetList : [];
    purposeLOV.unshift({ codeDesc: '-- Select --', code: '' });

    this.setState({
      statusLOV: statusResponse.status === 200 ? statusResponse.data : [],
      specimenLOV,
      rodentSpecimenTypeLOV,
      sampleTreatmentLOV,
      purposeLOV,
    });
  }

  onSelectSpecimen = async (specimenTypeCode, callback) => {
    const { specimenLOV } = this.state;
    const isSelectingRodentSpecimen =
      specimenLOV.find(item => item.specimenTypeCd === specimenTypeCode).specimenName === 'Rodent';

    const onSuccess = data => {
      const { speciesCodeVoList, stageValueList } = data;
      const speciesLOV = speciesCodeVoList || [];
      speciesLOV.unshift({ speciesCode: '', speciesName: '-- Select --' });
      this.setState(
        {
          specimenStageLOV: stageValueList || [],
          speciesLOV,
          vectorOfDiseaseLOV: '',
          // isSelectingRodentSpecimen: !stageValueList,
          isSelectingRodentSpecimen,
        },
        callback,
      );
    };

    await actionTryCatchCreator(getSpeciesForSpecimenLOV({ specimenTypeCode }), null, onSuccess, null);
  };

  onSelectSpecies = speciesCode => {
    const { speciesLOV } = this.state;
    const kIndex = speciesLOV.findIndex(item => item.speciesCode === speciesCode);
    this.setState({
      isVector: speciesLOV[kIndex].isVector,
      vectorOfDiseaseLOV: speciesLOV[kIndex].diseases,
    });
  };

  renderSpecimenStage = (finding, setFieldValue) => {
    const { specimenStageLOV } = this.state;
    const { specimenStage, isLarvalInstarSelected } = finding;
    let selectedStages = [];
    if (specimenStage && specimenStage.length > 0) {
      selectedStages = specimenStage;
    }

    const adultCheck = stage => {
      return stage === 'Adult';
    };
    const larvalInstarCheck = stage => {
      return LarvalInstars.includes(stage);
    };
    const resultHtml = [];

    if (specimenStageLOV.some(stage => larvalInstarCheck(stage))) {
      resultHtml.push(
        <li className="form-nea__block" key="specimen_stage_larval_instar">
          <div className="nea-chkbx form-group">
            <label className="custom-chckbbox">
              Larval Instar
              <Field
                type="checkbox"
                name="isLarvalInstarSelected"
                className={`form-control ${isLarvalInstarSelected && 'checked'}`}
                checked={isLarvalInstarSelected}
                onChange={e => {
                  const check = e.target.checked;
                  const stages = new Set(selectedStages);
                  if (!check) {
                    LarvalInstars.forEach(item => {
                      stages.delete(item);
                    });
                    setFieldValue('specimenStage', Array.from(stages));
                  }
                  setFieldValue('isLarvalInstarSelected', check);
                }}
              />
              <span className="checkmark" />
            </label>
          </div>
          {isLarvalInstarSelected && (
            <FieldArray
              name="specimenStage"
              render={arrayHelpers => (
                <ul className="form-nea__checkgroup-ul show">
                  {LarvalInstars.map(item => (
                    <li className="form-nea__inline" key={`specimen_stage_larval_instar_${item}`}>
                      <div className="nea-chkbx form-group">
                        <label className="custom-chckbbox">
                          {item}
                          <input
                            className={`form-control ${selectedStages.includes(item) && 'checked'}`}
                            name="specimenStage"
                            type="checkbox"
                            value={item.toString()}
                            checked={selectedStages.includes(item)}
                            onChange={e => {
                              if (e.target.checked) arrayHelpers.push(item);
                              else {
                                const idx = selectedStages.indexOf(item);
                                arrayHelpers.remove(idx);
                              }
                            }}
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            />
          )}
        </li>,
      );
    }
    specimenStageLOV.forEach((stage, index) => {
      if (adultCheck(stage)) {
        resultHtml.push(
          <FieldArray
            key={`specimen_stage_field_array_${stage}`}
            name="specimenStage"
            render={arrayHelpers => (
              <li className="form-nea__block form-group" key={`specimen_stage_${stage}_${index.toString()}`}>
                <div className="nea-chkbx form-group mb-0">
                  <label className="custom-chckbbox">
                    Adult
                    <input
                      className={`form-control ${selectedStages.includes(stage) && 'checked'}`}
                      name="specimenStage"
                      type="checkbox"
                      value={stage}
                      checked={selectedStages.includes(stage)}
                      onChange={e => {
                        if (e.target.checked) arrayHelpers.push(stage);
                        else {
                          const idx = selectedStages.indexOf(stage);
                          arrayHelpers.remove(idx);
                        }
                      }}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                {selectedStages.includes(stage) && (
                  <ul className="form-nea__checkgroup-ul show">
                    <li className="form-nea__inline sm-w-30p">
                      <div className="form-group">
                        <label className="custom-textbox">
                          Male(s)
                          <Field className="form-control textField" type="text" name="maleCount" placeholder="00" />
                        </label>
                      </div>
                    </li>
                    <li className="form-nea__inline sm-w-30p">
                      <div className="form-group hasError">
                        <label className="custom-textbox">
                          Female(s)
                          <Field className="form-control textField" type="text" name="femaleCount" placeholder="00" />
                        </label>
                      </div>
                    </li>
                    <li className="form-nea__inline sm-w-30p">
                      <div className="form-group hasError">
                        <label className="custom-textbox">
                          Not Identifiable
                          <Field
                            className="form-control textField"
                            type="text"
                            name="unidentifiedCount"
                            placeholder="00"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            )}
          />,
        );
      } else if (!larvalInstarCheck(stage)) {
        resultHtml.push(
          <FieldArray
            key={`specimen_stage_field_array_${stage}`}
            name="specimenStage"
            render={arrayHelpers => (
              <li className="form-nea__block" key={`specimen_stage_${stage}_${index.toString()}`}>
                <div className="nea-chkbx form-group">
                  <label className="custom-chckbbox">
                    {stage}
                    <input
                      className={`form-control ${selectedStages.includes(stage) && 'checked'}`}
                      type="checkbox"
                      value={stage}
                      checked={selectedStages.includes(stage)}
                      onChange={e => {
                        if (e.target.checked) arrayHelpers.push(stage);
                        else {
                          const idx = selectedStages.indexOf(stage);
                          arrayHelpers.remove(idx);
                        }
                      }}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </li>
            )}
          />,
        );
      }
    });

    return <ul className="form-nea__checkgroup mt-1-tablet">{resultHtml}</ul>;
  };

  onClickClear = () => {
    this.setState({
      ...initialState,
    });
  };

  onRemoveFinding = () => {
    const {
      finding: { findingsId },
      onRemove,
      sampleId,
    } = this.props;
    if (onRemove) onRemove({ sampleId, findingsId });
    this.setState({ isShowRemoveModal: false });
  };

  render() {
    const { finding, index, onSave, sampleId, barcodeId } = this.props;
    const {
      // findingsId,
      // findingStatus,
      // specimenName,
      // speciesName,
      // vectorOfDisease,
      // sampleTreatment,
      // purpose,
      // researcherName,
      specimenStage,
      // specimenType,
      // remarks,
      fileIdList,
    } = finding;
    const {
      // selectedSpecimenIndex,
      // selectedSpeciesIndex,
      statusLOV,
      specimenLOV,
      rodentSpecimenTypeLOV,
      isSelectingRodentSpecimen,
      // specimenStageLOV,
      speciesLOV,
      isVector,
      vectorOfDiseaseLOV,
      purposeLOV,
      sampleTreatmentLOV,
      isShowRemoveModal,
    } = this.state;
    return (
      <div>
        <Formik
          initialValues={{
            ...finding,
            isLarvalInstarSelected:
              specimenStage && specimenStage.length > 0
                ? LarvalInstars.some(item => specimenStage.includes(item))
                : false,
          }}
          validate={values => {
            const errors = {};
            const checkStatusInvalid = values.findingStatus !== 'Pending' && values.findingStatus !== 'Identified';
            if (checkStatusInvalid) {
              if (values.findingStatus === 'Others' && !values.remarks) {
                errors.remarks = 'Remark must be entered if Findings is ‘Others’';
              }
            } else {
              if (!values.specimenName) errors.specimenName = 'Required';
              if (!values.speciesName) errors.speciesName = 'Required';
              if (!values.sampleTreatment) errors.sampleTreatment = 'Required';
              else if (values.sampleTreatment === 'R') {
                if (!values.purpose) errors.purpose = 'Required';
                if (!values.researcherName) errors.researcherName = 'Required';
              }
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            if (onSave) {
              const checkStatusInvalid = values.findingStatus !== 'Pending' && values.findingStatus !== 'Identified';
              const fileIdList = checkStatusInvalid ? this.dropBoxRef.getFileList().map(file => file.fileId) : [];

              if (checkStatusInvalid) {
                onSave({
                  barcodeId,
                  sampleId,
                  SampleRejectionVO: {
                    remarks: values.remarks,
                    fileIdList,
                  },
                });
              } else {
                onSave({
                  barcodeId,
                  sampleId,
                  sampleFindingsVO: {
                    findingsId: '',
                    specimenCode: values.specimenName,
                    speciesCode: values.speciesName,
                    remarks: values.remarks,
                    specimenTypeCode: values.specimenType,
                    sampleTreatmentCode: values.sampleTreatment,
                    researchPurpose: values.purpose,
                    researchBy: values.researcherName,
                    specimenStages: values.specimenStage,
                    maleCount: values.maleCount,
                    femaleCount: values.femaleCount,
                    unidentifiedCount: values.unidentifiedCount,
                    status: values.findingStatus,
                    vectorOfDisease: vectorOfDiseaseLOV,
                  },
                });
              }
            }
            actions.setSubmitting(false);
            actions.setErrors({});
          }}
          render={({ values, errors, isSubmitting, setFieldValue }) => {
            const checkSpecimen = values.specimenName;
            const checkStatusInvalid = values.findingStatus !== 'Pending' && values.findingStatus !== 'Identified';
            return (
              <Form>
                <div className="row section finding-header">
                  <div className="col-md-9 col-xl-6 d-flex flex-column justify-content-center">
                    <div className="row nea-select-box form-group">
                      <div className="col-md-3 col-xl-3  d-flex flex-column justify-content-center">
                        <h3 className="bold-font">Findings {index}</h3>
                      </div>
                      <div className="col-md-9 col-xl-9">
                        <Field
                          component="select"
                          name="findingStatus"
                          className="form-control"
                          placeholder="Please select"
                        >
                          {statusLOV.map((item, sIndex) => (
                            <option value={item} key={`finding_status_select_${sIndex.toString()}`}>
                              {item}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xl-6">
                    <div className="nea-btn-group">
                      <button
                        type="button"
                        className="btn btn-sec mr-2"
                        disabled={isSubmitting}
                        onClick={() => this.setState({ isShowRemoveModal: true })}
                      >
                        Remove
                      </button>
                      <button
                        type="reset"
                        className="btn btn-sec mr-2"
                        disabled={isSubmitting}
                        onClick={this.onClickClear}
                      >
                        Clear
                      </button>
                      <button type="submit" className="btn btn-pri" disabled={isSubmitting}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {!checkStatusInvalid && (
                  <div className="row section">
                    <div className="col-md-12 col-xl-4">
                      <div className="label-group details-info">
                        <label className="small-grey-text">Specimen</label>
                        <div className="form-group">
                          <div className="showList d-block">
                            <Field
                              component="select"
                              name="specimenName"
                              className="form-control"
                              placeholder="Please select"
                              onChange={e => {
                                const { value } = e.target;
                                setFieldValue('specimenName', value);
                                this.onSelectSpecimen(value);
                              }}
                            >
                              {specimenLOV.map(specimen => (
                                <option
                                  key={`specimen_type_${specimen.specimenTypeCd}`}
                                  value={specimen.specimenTypeCd}
                                >
                                  {specimen.specimenName}
                                </option>
                              ))}
                            </Field>
                          </div>
                        </div>
                        <ErrorMessage className="col-form-error-label" name="specimenName" component="div" />
                      </div>
                      {isSelectingRodentSpecimen && (
                        <div className="label-group details-info">
                          <label className="small-grey-text">Specimen Type</label>
                          <div className="form-group">
                            <div className="showList d-block">
                              <Field
                                component="select"
                                name="specimenType"
                                className="form-control"
                                placeholder="Please select"
                              >
                                {rodentSpecimenTypeLOV.map(type => (
                                  <option key={`rodent_specimen_type_${type.code}`} value={type.code}>
                                    {type.codeDesc}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>
                          <ErrorMessage className="col-form-error-label" name="specimenType" component="div" />
                        </div>
                      )}
                      {!isSelectingRodentSpecimen && checkSpecimen && (
                        <div className="label-group details-info">
                          <label className="small-grey-text">Specimen Stage</label>
                          {this.renderSpecimenStage(values, setFieldValue)}
                        </div>
                      )}
                      {!checkSpecimen && (
                        <div className="label-group details-info">
                          <label className="small-grey-text">Vector of Diseases</label>
                          <div className="form-group">
                            <div className="d-block">
                              <Field
                                type="text"
                                name="vectorOfDisease"
                                className="form-control textField"
                                value={vectorOfDiseaseLOV}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-md-12 col-xl-8">
                      <div className="row details-info">
                        <div className="col-xl-6 col-md-12">
                          <div className="label-group details-info">
                            <label className="small-grey-text">Species</label>
                            <div className="form-group">
                              <div className="showList d-block">
                                <Field
                                  component="select"
                                  name="speciesName"
                                  className="form-control"
                                  placeholder="Please select"
                                  disabled={!checkSpecimen}
                                  onChange={e => {
                                    const { value } = e.target;
                                    setFieldValue('speciesName', value);
                                    this.onSelectSpecies(value);
                                  }}
                                >
                                  {checkSpecimen &&
                                    speciesLOV.map((item, index) => (
                                      <option value={item.speciesCode} key={`species_type_${index + 1}`}>
                                        {item.speciesName}
                                      </option>
                                    ))}
                                </Field>
                              </div>
                            </div>
                            <ErrorMessage className="col-form-error-label" name="speciesName" component="div" />
                          </div>
                          {checkSpecimen && (
                            <div className="label-group details-info">
                              <label className="small-grey-text">Vector of Diseases</label>
                              <div className="form-group">
                                <div className="d-block">
                                  <Field
                                    type="text"
                                    name="vectorOfDisease"
                                    className="form-control textField"
                                    value={vectorOfDiseaseLOV}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="col-xl-6 col-md-12">
                          <div className="label-group details-info">
                            <label className="small-grey-text">Sample Treatment</label>
                            <div className="form-group">
                              <div className="btn-group btn-group-toggle col-12" data-toggle="buttons">
                                {sampleTreatmentLOV.map(treatment => (
                                  <label
                                    key={`sample_treatment_${treatment.code}`}
                                    className={`btn btn-primary ${
                                      values.sampleTreatment === treatment.code ? 'active' : ''
                                    }`}
                                  >
                                    <Field type="radio" name="sampleTreatment" value={treatment.code} />
                                    {treatment.codeDesc}
                                  </label>
                                ))}
                              </div>
                            </div>
                            <ErrorMessage className="col-form-error-label" name="sampleTreatment" component="div" />
                          </div>
                          {values.sampleTreatment === 'R' && (
                            <>
                              <div className="label-group details-info">
                                <label className="small-grey-text">Purpose</label>
                                <div className="form-group">
                                  <div className="showList d-block">
                                    <Field
                                      component="select"
                                      name="purpose"
                                      className="form-control"
                                      placeholder="Please select"
                                    >
                                      {purposeLOV.map(purpose => (
                                        <option key={`purporse_LOV_${purpose.code}`} value={purpose.code}>
                                          {purpose.codeDesc}
                                        </option>
                                      ))}
                                    </Field>
                                  </div>
                                </div>
                                <ErrorMessage className="col-form-error-label" name="purpose" component="div" />
                              </div>
                              <div className="label-group details-info">
                                <label className="small-grey-text">Officer Name</label>
                                <div className="form-group">
                                  <div className=" d-block">
                                    <Field
                                      type="text"
                                      name="researcherName"
                                      className="form-control textField"
                                      placeholder="Officer Name"
                                    />
                                  </div>
                                </div>
                                <ErrorMessage className="col-form-error-label" name="researcherName" component="div" />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="label-group details-info">
                            <label className="small-grey-text mb-0">Remarks</label>
                            <Field
                              component="textarea"
                              name="remarks"
                              className="form-control"
                              rows="3"
                              placeholder="Remarks"
                            />
                            <ErrorMessage className="col-form-error-label" name="remarks" component="div" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {checkStatusInvalid && (
                  <div className="row section">
                    <div className="col-md-12 col-xl-6">
                      <div className="label-group details-info">
                        <label className="small-grey-text">Remarks</label>
                        <div className="form-group">
                          <div className="d-block">
                            <Field
                              component="textarea"
                              name="remarks"
                              className="form-control"
                              rows="3"
                              placeholder="Remarks"
                            />
                          </div>
                        </div>
                        <ErrorMessage className="col-form-error-label" name="remarks" component="div" />
                      </div>
                    </div>
                    <div className="col-md-12 col-xl-6 form-nea__checkgroup">
                      <div className="form-nea__checkgroup-toggle show">
                        <div className="form-group marginBottom15">
                          <div className="row">
                            <div className="label-group details-info col-12">
                              <label className="small-grey-text">Images</label>
                              <DropBox
                                submissionType="SAMPLEID"
                                submissionId={sampleId}
                                fileIdList={fileIdList}
                                ref={ref => {
                                  this.dropBoxRef = ref;
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="row section">
                <div className="col-12">
                  <div className="nea-text-box form-group">
                    <div className="row">
                      <div className="col-3">
                        <label className="col-form-label">Remarks</label>
                        <ErrorMessage
                          className="col-form-error-label"
                          name="remarks"
                          component="div"
                        />
                      </div>
                      <div className="col-9">
                        <Field
                          component="textarea"
                          name="remarks"
                          className="form-control"
                          rows="3"
                          placeholder="Remarks"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </Form>
            );
          }}
        />
        <CustomModal
          isOpen={isShowRemoveModal}
          type="system-modal"
          headerTitle="Confirm remove finding."
          cancelTitle="Cancel"
          onCancel={() => this.setState({ isShowRemoveModal: false })}
          confirmTitle="Confirm"
          onConfirm={this.onRemoveFinding}
        />
      </div>
    );
  }
}

export default EditableFindings;
