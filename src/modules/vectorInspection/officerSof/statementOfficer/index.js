import React from 'react';

class StatementOfcer extends React.PureComponent {
  render() {
    const { sof } = this.props;
    const habitatInfos = sof?.habitatInfos || [];
    const isShowAmendment = false;
    const isEditable = false;
    return (
      <>
        <div className="marginTop20 marginBottom60">
          <div className="cardWrapper">
            <div className="cardTitle bg-blue text-white">Officer Information</div>
            <div className="cardDesc bg-white">
              <div>
                <div className="row paddingBottom10">
                  <div className="col-md-4 col-lg-3">Name of Officer</div>
                  <div className="col-md-4 col-lg-3">{sof?.officerInfo?.officerName}</div>
                </div>
                <div className="row paddingBottom10">
                  <div className="col-md-4 col-lg-3">NRIC</div>
                  <div className="col-md-4 col-lg-3">{sof?.officerInfo?.officerId}</div>
                </div>
                <div className="row paddingBottom10">
                  <div className="col-md-4 col-lg-3">Designation</div>
                  <div className="col-md-4 col-lg-3">{sof?.officerInfo?.designation}</div>
                </div>
                <div className="row paddingBottom10">
                  <div className="col-md-4 col-lg-3">Regional Office</div>
                  <div className="col-md-4 col-lg-3">{sof?.officerInfo?.regionOffice}</div>
                </div>
                <div className="row paddingBottom10">
                  <div className="col-md-4 col-lg-3">Constituency in Charge</div>
                  <div className="col-md-4 col-lg-3">{sof?.officerInfo?.division}</div>
                </div>
              </div>
              <div className="row paddingTop20">
                <div className="col-md-12">
                  On <strong>{sof?.officerInfo?.inspectionDate}</strong>, at about{' '}
                  <strong>{sof?.officerInfo?.inspectionTime}</strong>, I was deployed to{' '}
                  <strong>{sof?.officerInfo?.breedingLocation}</strong> and detected{' '}
                  <strong>{sof?.officerInfo?.vectorType}</strong>. The sample was shown to the{' '}
                  <strong>
                    {sof?.officerInfo?.witnessRelationship}, {sof?.officerInfo?.witnessName},{' '}
                    {sof?.officerInfo?.witnessIdType} {sof?.officerInfo?.witnessId}
                  </strong>{' '}
                  <br />
                  <br />
                  Verbally given / Physically seen
                  <br />
                  Details of breeding detected are as follow:
                </div>
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="cardTitle bg-blue text-white">Habitat Information</div>
            <div className="cardDesc bg-white">
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <div className="tblCompo habitatTbl">
                      <table>
                        <thead>
                          <tr className="tbl-headings">
                            <th align="left" valign="middle" className="col1">
                              S/No
                            </th>
                            <th align="left" valign="middle" className="col2">
                              Habitat Type
                            </th>
                            <th align="left" valign="middle" className="col4">
                              Habitat Size
                            </th>
                            <th align="left" valign="middle" className="col4">
                              Location
                            </th>
                            <th align="center" valign="middle" colSpan="2" className="col5 text-center">
                              Density
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {habitatInfos.map((habitat, hIndex) => (
                            <tr key={`habitat_table_row_${hIndex + 1}`}>
                              <td align="left" valign="middle" className="text-blue">
                                {habitat?.serialNo}
                              </td>
                              <td align="left" valign="middle">
                                {habitat?.habitatType}
                              </td>
                              <td align="left" valign="middle">
                                {habitat?.habitatSize}
                              </td>
                              <td align="left" valign="middle">
                                {habitat?.locationBreeding}
                              </td>
                              <td align="left" valign="middle">
                                {habitat?.densityInContainer}
                              </td>
                              <td align="left" valign="middle">
                                {habitat?.densityPerDip}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="cardTitle bg-blue text-white">Remarks</div>
            <div className="cardDesc bg-white">
              <div className="row">
                {isEditable && (
                  <div className="col-md-9">
                    {sof?.remarks}
                    <br />
                    <br />
                  </div>
                )}
                {!isEditable && (
                  <div className="col-md-12">
                    {sof?.remarks}
                    <br />
                    <br />
                  </div>
                )}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <strong>
                    The above statement is true to the best of my knowledge and belief. I understand that if the
                    statement will be tendered in evidence, I will be liable to prosecution if I have willfully stated
                    anything which I know to be false or does not believe to be true.
                  </strong>
                </div>
              </div>
              <div>
                <div className="row paddingBottom30 paddingTop40">
                  <div className="col-md-2">Date of Statement</div>
                  <div className="col-md-4">
                    <strong>{sof?.dateOfStatement}</strong>
                  </div>
                </div>
              </div>
              {!isEditable && (
                <div className="row">
                  <div className="col-md-12 paddingTop10 paddingBottom30">
                    <div className="downloadBtn">
                      <a href="#">Download Statement of Officer</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {isShowAmendment && (
            <div className="cardWrapper">
              <div className="cardTitle bg-blue text-white">Reason for Amendment</div>
              <div className="cardDesc bg-white">
                <div className="row">
                  <div className="col-md-12">{sof?.reasonForAmendment}</div>
                </div>
                <div>
                  <div className="row paddingBottom30 paddingTop40">
                    <div className="col-md-2">Date of Statement</div>
                    <div className="col-md-4">
                      <strong>{sof?.dateOfAmendment} (today's date)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default StatementOfcer;
