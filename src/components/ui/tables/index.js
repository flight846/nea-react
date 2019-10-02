/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';

// import './style.scss';

const Tables = props => {
  const { className, fontSize } = props;

  return (
    <div className={`tables__main ${className || ''}`}>
      <div className="tblCompo" style={{ fontSize: `${fontSize}px` }}>
        <table>
          <thead>
            <tr className="tbl-headings">
              <th align="left" valign="middle" className="col1">
                BarcodeID
              </th>
              <th align="left" valign="middle" className="col2">
                Sent as at
              </th>
              <th align="left" valign="middle" className="col4">
                RO
              </th>
              <th
                align="left"
                valign="middle"
                className="col4 text-center"
                style={{ width: '21%' }}
              >
                Action
              </th>
              <th align="left" valign="middle" className="col5">
                Sender&apos;s Name
              </th>
              <th align="left" valign="middle" className="col6">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr className="bg-white">
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr>
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr className="bg-white bg-pink warning">
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <div className="actionBtns">
                  <a href="#" className="btn btn-sec">
                    Accept
                  </a>
                  <a href="#" className="btn btn-sec">
                    Reject
                  </a>
                </div>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr>
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr className="bg-white">
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <div className="text-red">
                  Invalid-Damaged / broken / defaced barcode
                </div>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr>
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr className="bg-white">
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr>
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
            <tr className="bg-white">
              <td align="left" valign="middle" className="text-blue">
                HH02-M06-300119
              </td>
              <td align="left" valign="middle">
                29/01/2019 15:30
              </td>
              <td align="left" valign="middle">
                CRO
              </td>
              <td align="left" valign="middle">
                <a href="#" className="btn btn-sec full-width">
                  Reject
                </a>
              </td>
              <td align="left" valign="middle">
                John Smith Anthony Cumberbatch
              </td>
              <td align="left" valign="middle">
                9123 0000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tables);
