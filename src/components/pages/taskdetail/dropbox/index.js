import React, { PureComponent } from 'react';
import { ReactComponent as Plus } from 'assets/svg/plus_circle.svg';
import './style.scss';

class DropBox extends PureComponent {
  constructor() {
    super();
    this.state = {
      dragging: false,
    };
    this.dropRef = React.createRef();
  }

  componentDidMount() {
    const div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    const div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const { onUpload } = this.props;
    this.setState({ dragging: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  handleChangeFiles = e => {
    e.preventDefault();
    const { onUpload } = this.props;
    onUpload(e.target.files);
  };

  render() {
    const { dragging } = this.state;
    return (
      <div className={`checkout_dropbox ${dragging ? 'is-dragover' : ''}`}>
        <div ref={this.dropRef} className="checkout_dropbox__content">
          <div className="checkout_dropbox__dropzone">
            <label htmlFor="files" className="checkout_dropbox__label">
              <Plus width="50px" height="50px" />
              <span>Drag &amp; Drop or Click to Upload</span>
              <input
                type="file"
                name="files[]"
                id="files"
                multiple
                accept="image/*"
                onChange={this.handleChangeFiles}
                className="sr-only checkout_dropbox__input"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default DropBox;
