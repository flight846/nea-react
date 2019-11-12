/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ReactComponent as Close } from 'assets/svg/close.svg';

import Dropbox from '../../../common/dropbox';
import Review from '../review';

import './style.scss';

class Specimen extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  handleUpload = files => {
    const newFiles = [];
    const that = this;
    Array.prototype.forEach.call(files, file => {
      const img = document.createElement('img');
      img.src = window.URL.createObjectURL(file);

      img.onload = function() {
        const url = this.src;
        newFiles.push({
          file,
          url,
        });
        that.setState({ files: newFiles });
      };
    });
  };

  render() {
    const { files } = this.state;
    return (
      <div className="specimen">
        <div className="specimen__section">
          <div className="specimen__header">
            Outsourced Contractor&apos;s Identification of Specimen
          </div>
          <div className="specimen__content">
            <div className="row">
              <div className="col-6">
                <div className="specimen__number">
                  <div className="label">Total Number of Sample Bottle(s)</div>
                  <div className="value">1</div>
                </div>
                <div className="specimen__number">
                  <div className="label">Total Number of Specimen(s)</div>
                  <div className="value">10</div>
                </div>
              </div>

              <div className="col-6">
                <div className="specimen__types">
                  <div className="specimen__row">
                    <div className="specimen__label">Specimen:</div>
                  </div>
                  <div className="specimen__type">
                    <div className="type">Ae.aegypti</div>
                    <div className="male">Male 1</div>
                    <div className="female">Female 1</div>
                  </div>
                  <div className="specimen__type">
                    <div className="type">Ae.aegypti</div>
                    <div className="male">Male 1</div>
                    <div className="female">Female 1</div>
                  </div>
                  <div className="specimen__type">
                    <div className="type">Ae.aegypti</div>
                    <div className="male">Male 1</div>
                    <div className="female">Female 1</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="specimen__remark">
                  <div className="label">Remarks:</div>
                  <div className="value">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse hendrerit commodo enim, et malesuada tortor
                    suscipit non. Maecenas at bibendum nulla, et semper elit.
                    Vivamus nec dolor vitae orci bibendum pellentesque. Etiam
                    metus mi, viverra id dignissim at, aliquam rutrum arcu.
                    Suspendisse vel leo sit amet sem interdum mattis vel in
                    magna. Nam fermentum imperdiet ante, non ornare neque
                    convallis a. Quisque consectetur non risus vitae bibendum.
                    Donec dolor neque, ultricies a viverra nec, vehicula et
                    nisi. Nullam placerat odio sit amet risus porttitor
                    faucibus. Donec convallis mollis lacus ac vulputate.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="specimen__section">
          <div className="specimen__header">
            Analyst&lsquo;s Identification of Specimen
          </div>
          <div className="specimen__content">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="specimen__number">
                  <div className="label">Total Number of Sample Bottle(s)</div>
                  <div className="value">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="specimen__number">
                  <div className="label">Total Number of Specimen(s)</div>
                  <div className="value">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-8">
                <div className="specimen__types">
                  <div className="specimen__row">
                    <div className="specimen__label">Specimen:</div>
                  </div>

                  <div className="specimen__type">
                    <div className="type">
                      <select className="form-control">
                        <option>Ae.aegypti</option>
                        <option>Ae.albopictus</option>
                        <option>Ae.malayensis</option>
                        <option>Ae.species</option>
                        <option>Cx.quinquefasciatus</option>
                        <option>Cx.species</option>
                        <option>Other Mosquitoes</option>
                        <option>Chironomid</option>
                        <option>Other Insects</option>
                        <option>Unable to Identify</option>
                      </select>
                    </div>
                    <div className="male">
                      Male{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="female">
                      Female{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="control">
                      <button type="button" className="btn btn-link">
                        <span className="sr-only"> close</span>
                        <Close />
                      </button>
                    </div>
                  </div>
                  <div className="specimen__type">
                    <div className="type">
                      <select className="form-control">
                        <option>Ae.aegypti</option>
                        <option>Ae.albopictus</option>
                        <option>Ae.malayensis</option>
                        <option>Ae.species</option>
                        <option>Cx.quinquefasciatus</option>
                        <option>Cx.species</option>
                        <option>Other Mosquitoes</option>
                        <option>Chironomid</option>
                        <option>Other Insects</option>
                        <option>Unable to Identify</option>
                      </select>
                    </div>
                    <div className="male">
                      Male{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="female">
                      Female{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="control">
                      <button type="button" className="btn btn-link">
                        <span className="sr-only"> close</span>
                        <Close />
                      </button>
                    </div>
                  </div>
                  <div className="specimen__type">
                    <div className="type">
                      <select className="form-control">
                        <option>Ae.aegypti</option>
                        <option>Ae.albopictus</option>
                        <option>Ae.malayensis</option>
                        <option>Ae.species</option>
                        <option>Cx.quinquefasciatus</option>
                        <option>Cx.species</option>
                        <option>Other Mosquitoes</option>
                        <option>Chironomid</option>
                        <option>Other Insects</option>
                        <option>Unable to Identify</option>
                      </select>
                    </div>
                    <div className="male">
                      Male{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="female">
                      Female{' '}
                      <input type="text" className="form-control d-inline" />
                    </div>
                    <div className="control">
                      <button type="button" className="btn btn-link">
                        <span className="sr-only"> close</span>
                        <Close />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="specimen__remark">
                  <div className="label">Images:</div>
                  <div className="value">
                    {files.length ? (
                      <Review files={files} />
                    ) : (
                      <Dropbox onUpload={this.handleUpload} />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="specimen__remark">
                  <div className="label">Remarks:</div>
                  <div className="value">
                    <textarea rows="4" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Specimen;
