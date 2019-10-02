import React, { PureComponent } from 'react';
import './style.scss';

class Review extends PureComponent {
  renderUploadedImages = () => {
    const { files } = this.props;
    return files.map((file, index) => (
      <div
        key={`checkout_preview__item_${index.toString()}`}
        className="col-lg-5th col-md-3 col-sm-4 col-6"
      >
        <div className="checkout_preview__wrapper">
          <div className="checkout_preview__item">
            <img src={file.url} alt="home_example" />
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="checkout_preview">
        <div className="checkout_preview__content">
          <div className="checkout_preview__list">
            <div className="row no-gutters">{this.renderUploadedImages()}</div>
          </div>
        </div>
      </div>
    );
  }
}

Review.defaultProps = {
  file: [],
};

export default Review;
