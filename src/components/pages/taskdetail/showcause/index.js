import React, { PureComponent } from 'react';
import './style.scss';

class ShowCause extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="showcause">
        <div className="showcause__content">
          <div className="showcause__title">Initial Lapse Assessment: *</div>
          <div className="showcause__control">
            <select className="form-control">
              <option value="Failure to identify samples correctly">
                Failure to identify samples correctly
              </option>
              <option value="No lapses observed">No lapses observed</option>
            </select>
          </div>

          <div className="showcause__title">Recommend to show cause? *</div>
          <div className="showcause__control">
            <label htmlFor="recomment__yes" className="showcause__checkbox">
              <input
                type="radio"
                name="recomment"
                id="recomment__yes"
                className="form-control"
              />
              Yes
            </label>

            <label htmlFor="recomment__no" className="showcause__checkbox">
              <input
                type="radio"
                name="recomment"
                id="recomment__no"
                className="form-control"
              />
              No
            </label>
          </div>

          <div className="showcause__title">Remarks</div>
          <div className="showcause__control">
            <textarea rows="4" className="form-control" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCause;
