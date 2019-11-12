import React, { Component } from 'react';
import { downloadFile } from 'services/fileOperations';
import { downloadSuccess } from 'constants/api-fake-data/fake-file-operatation';
import { common } from 'assets';

class BinaryImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      binary: '',
      fileName: '',
      fileType: '',
    };
  }

  async componentDidMount() {
    const { fileId, onImageLoaded } = this.props;
    //const { status, data } = await downloadFile({ fileId });
    const status = 200;
    const data = downloadSuccess;
    let src = '';

    if (status === 200 && data.status === 'Pass') {
      this.setState({
        isLoaded: true,
        binary: data.fileData,
        fileName: data.fileName,
        fileType: data.fileType,
      });
      src = `data:image/png;base64,${data.fileData}`;
    } else {
      src = common.img__upload;
    }

    if (onImageLoaded) onImageLoaded(src);
  }

  render() {
    const { isLoaded, binary, fileName, fileType } = this.state;
    const { className, onClick } = this.props;
    const src = isLoaded ? `data:image/png;base64,${binary}` : common.img__upload;
    return (
      <div className={className}>
        <img
          src={src}
          alt={`${fileName}.${fileType}`}
          style={{ width: '100%', backgroundPosition: 'center center' }}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default BinaryImage;
