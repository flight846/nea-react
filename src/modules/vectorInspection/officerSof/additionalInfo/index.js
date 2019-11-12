/* eslint-disable react/jsx-boolean-value */
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
    const { sof } = this.props;
    const editingRemarks = new Set();
    if (sof?.additionalInfo?.isEditable) {
      if (sof?.additionalInfo?.elderResidentsRemark) {
        editingRemarks.add('elderResidentsRemark');
      }
      if (sof?.additionalInfo?.maidDomesticHelperRemark) {
        editingRemarks.add('maidDomesticHelperRemark');
      }
      if (sof?.additionalInfo?.otherOccupantsRemark) {
        editingRemarks.add('otherOccupantsRemark');
      }
      if (sof?.additionalInfo?.personWithDisabilitiesRemark) {
        editingRemarks.add('personWithDisabilitiesRemark');
      }
      if (sof?.additionalInfo?.hoardingIssuesRemark) {
        editingRemarks.add('hoardingIssuesRemark');
      }
      if (sof?.additionalInfo?.housekeepingIssuesRemark) {
        editingRemarks.add('housekeepingIssuesRemark');
      }
    }

    this.state = {
      editingRemarks,
      isAmending: false,
    };
  }

  onAddRemark = remark => {
    const { editingRemarks } = this.state;
    if (editingRemarks.has(remark)) {
      editingRemarks.delete(remark);
    } else {
      editingRemarks.add(remark);
    }
    this.setState({
      editingRemarks,
    });
  };

  renderRemark = (name, value) => {
    const { sof } = this.props;
    const { editingRemarks } = this.state;
    const isEditable = sof?.additionalInfo?.isEditable || false;
    if (isEditable) {
      if (editingRemarks.has(name)) {
        return (
          <>
            <div className="bold-text">Remarks</div>
            <div>
              <Field component="textarea" name={name} className="textareaField" rows="3" placeholder="Remarks" />
            </div>
          </>
        );
      }
      return (
        <div className="add-line-item">
          <a className="add-line--a" onClick={() => this.onAddRemark(name)}>
            <span className="add-line-plus">+</span>
            <span className="add-line-text">Add Remarks</span>
          </a>
        </div>
      );
    }
    return value && value !== '' ? (
      <>
        <div className="bold-text">Remarks</div>
        <div>{value}</div>
      </>
    ) : (
      <></>
    );
  };

  renderRadioGroup = (name, value, setFieldValue) => {
    const { sof } = this.props;
    const isEditable = sof?.additionalInfo?.isEditable || false;

    return (
      <>
        <div className="col-md-5 col-lg-5 col-3">
          <FormGroup check>
            <Label check>
              <Field
                type="radio"
                name={name}
                value={true}
                checked={value === true}
                onChange={() => setFieldValue(name, true)}
                disabled={!isEditable}
              />{' '}
              Yes
            </Label>
          </FormGroup>
        </div>
        <div className="col-md-5 col-lg-5 col-3">
          <FormGroup check>
            <Label check>
              <Field
                type="radio"
                name={name}
                value={false}
                checked={value === false}
                onChange={() => setFieldValue(name, false)}
                disabled={!isEditable}
              />{' '}
              No
            </Label>
          </FormGroup>
        </div>
      </>
    );
  };

  render() {
    const { sof } = this.props;
    const { editingRemarks } = this.state;
    const isEditable = sof?.additionalInfo?.isEditable || false;
    const isElderResidents = sof?.additionalInfo?.isElderResidents || false;
    const isMaidDomesticHelper = sof?.additionalInfo?.isMaidDomesticHelper || false;
    const isOtherOccupants = sof?.additionalInfo?.isOtherOccupants || false;
    const isPersonWithDisabilities = sof?.additionalInfo?.isPersonWithDisabilities || false;
    const isHoardingIssues = sof?.additionalInfo?.isHoardingIssues || false;
    const isHousekeepingIssues = sof?.additionalInfo?.isHousekeepingIssues || false;
    return (
      <>
        <Formik
          initialValues={sof?.additionalInfo}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            actions.setErrors({});
          }}
          render={({ values, errors, isSubmitting, setFieldValue }) => {
            return (
              <Form>
                <div className="marginTop20 marginBottom60">
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Elder residents</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup('isElderResidents', values.isElderResidents, setFieldValue)}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('elderResidentsRemark')}</div>
                    </div>
                  </div>
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Maid/ domestic helper</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup('isMaidDomesticHelper', values.isMaidDomesticHelper, setFieldValue)}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('maidDomesticHelperRemark')}</div>
                    </div>
                  </div>
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Other occupants</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup('isOtherOccupants', values.isOtherOccupants, setFieldValue)}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('otherOccupantsRemark')}</div>
                    </div>
                  </div>
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Person(s) with disabilities</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup(
                            'isPersonWithDisabilities',
                            values.isPersonWithDisabilities,
                            setFieldValue,
                          )}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('personWithDisabilitiesRemark')}</div>
                    </div>
                  </div>
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Hoarding issues</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup('isHoardingIssues', values.isHoardingIssues, setFieldValue)}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('hoardingIssuesRemark')}</div>
                    </div>
                  </div>
                  <div className="remarksCont bg-white">
                    <div className="row">
                      <div className="col-md-4 col-lg-3 bold-text">Housekeeping issues</div>
                      <div className="col-md-3 col-lg-2 xs-paddingBottom10 xs-paddingTop10">
                        <div className="row">
                          {this.renderRadioGroup('isHousekeepingIssues', values.isHousekeepingIssues, setFieldValue)}
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-7">{this.renderRemark('housekeepingIssuesRemark')}</div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        />
      </>
    );
  }
}

export default AdditionalInfo;
