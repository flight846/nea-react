import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as AddImageIcon } from 'assets/svg/AddImage.svg';
import { ReactComponent as PlusIcon } from 'assets/svg/plus_circle.svg';

import InPageLoading from 'components/common/inPageLoading';

import { getSysConfigurations, uploadFile, deleteFile, downloadFile } from 'services/fileOperations';

import './style.scss';

class DropBox extends Component {
  constructor(props) {
    super(props);
    const { fileList, fileIdList } = props;
    this.state = {
      dragging: false,
      accept: '',
      maxSingleFileSize: 0,
      maxGroupFileSize: 0,
      networkDisabled: false,
      networkErrors: [],
      fileList: fileList || [],
      fileIdList: fileIdList || [],
      isLoading: false,
    };
    this.dropRef = React.createRef();
  }

  componentDidMount() {
    const div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);

    this.getFileSysConfigurations();
    this.getPreviousFile();
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
      if (onUpload) onUpload(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  handleChangeFiles = e => {
    e.preventDefault();
    this.onUploadFiles(e.target.files);
  };

  getPreviousFile = () => {
    const { fileIdList } = this.state;
    if (fileIdList && fileIdList.length > 0) {
      fileIdList.forEach(fileId => {
        this.downloadPreviousFile(fileId);
      });
    }
  };

  downloadPreviousFile = async fileId => {
    const { fileList } = this.state;
    const { status, data } = await downloadFile({ fileId });

    if (status === 200 && data.status === 'Pass') {
      fileList.push({
        fileId: data.fileId,
        fileName: data.fileName + '.' + data.fileType,
        file: data.fileData,
      });
    } else {
      fileList.push({
        fileId,
        fileName: 'Unable to load this image.',
        file: {},
      });
    }

    this.setState({
      fileList,
    });
  };

  getFileSysConfigurations = async () => {
    const { submissionType, submissionId } = this.props;
    const { status, data } = await getSysConfigurations({ submissionType, submissionId });

    if (status === 200 && data.status === 'Pass') {
      let accept = '';
      data.allowedFileTypes.forEach(item => {
        accept += `.${item}, `;
      });
      this.setState({
        accept,
        maxSingleFileSize: parseFloat(data.maxSingleFileSize),
        maxGroupFileSize: parseFloat(data.maxGroupFileSize),
      });
    } else {
      this.setState({
        networkDisabled: true,
        networkErrors: data.errorMessage || [String(`HTTP code ${status}`)],
      });
    }
  };

  getFileList = () => {
    const { fileList } = this.state;
    return fileList;
  };

  onUploadFiles = async files => {
    const { fileList, maxSingleFileSize, maxGroupFileSize } = this.state;
    const { submissionType, submissionId } = this.props;
    const selectedFile = files[0];

    if (selectedFile.size > maxSingleFileSize) {
      toast.error(
        `Selected file exceed max Single file size allowed: ${maxSingleFileSize} bytes (~ ${maxSingleFileSize /
          1048576} MB)`,
      );
      return;
    }

    if (fileList.length > 0) {
      const currentTotalFileSize =
        fileList.map(item => item.file.size).reduce((total, current) => total + current) + selectedFile.size;
      if (currentTotalFileSize > maxGroupFileSize) {
        toast.error(
          `Selected file exceed max Group file size allowed: ${maxGroupFileSize} bytes (~ ${maxGroupFileSize /
            1048576} MB)`,
        );
        return;
      }
    }

    this.setState({
      isLoading: true,
    });

    const file = new Blob([selectedFile]);
    const formData = new FormData();
    formData.append('file', file, selectedFile.name);
    formData.append('fileStatus', '');
    formData.append('submissionType', submissionType);
    formData.append('submissionId', submissionId);

    const { status, data } = await uploadFile(formData);

    this.setState({
      isLoading: false,
    });

    if (status === 200) {
      if (data.status === 'Pass') {
        fileList.push({
          fileId: data.fileId,
          fileName: selectedFile.name,
          file: selectedFile,
        });
        this.setState({
          fileList,
        });
      } else {
        toast.error(data.errorMessage.join(', '));
      }
    } else {
      toast.error(`HTTP code ${status}`);
    }
  };

  onDeleteFile = async index => {
    const { fileList } = this.state;
    const { fileId } = fileList[index];
    const { status, data } = await deleteFile({ fileId });
    if (status === 200) {
      if (data.status === 'Pass') {
        const temp = fileList;
        temp.splice(index, 1);
        this.setState({
          fileList: temp,
        });
      } else {
        toast.error(data.errorMessageList.join(', '));
      }
    } else {
      toast.error(`HTTP code ${status}`);
    }
  };

  render() {
    const { dragging, fileList, networkDisabled, networkErrors, accept, isLoading } = this.state;
    const { disabled } = this.props;
    return (
      <div>
        <div className="upload-drop-zone" id="drop-zone" ref={this.dropRef}>
          <AddImageIcon className="mb-4 d-desktop-only" alt="" />
          {networkDisabled ? (
            <div className="text-center">
              <span className="d-desktop-only">File upload is disabled due to network error:</span>
              {networkErrors.map((error, eIndex) => (
                <span className="d-desktop-only" key={`network_error_${eIndex + 1}`}>
                  {error}
                </span>
              ))}
            </div>
          ) : (
            <div className="d-flex drag-drop-text justify-content-center">
              <span className="d-desktop-only">Drag & Drop or</span>
              <PlusIcon className="plus-icon d-ipad-only d-mobile-only" />
              <div className="form-group">
                <input
                  className="m-0"
                  type="file"
                  name=""
                  disabled={disabled || false}
                  id="js-upload-files"
                  accept={accept || 'image/*'}
                  onChange={this.handleChangeFiles}
                />
                <label htmlFor="js-upload-files" className="font-bold browse d-desktop-only">
                  Browse
                </label>
                <span className="font-bold browse d-ipad-only d-mobile-only">
                  Upload document
                  <span className="text-black">({accept})</span>
                </span>
              </div>
              <span className="d-desktop-only">files to upload</span>
            </div>
          )}
        </div>
        <div className="upload-drop-zone__file mt-4 mb-4">
          <ul className="">
            {fileList &&
              fileList.map((item, index) => (
                <li className="" id="" key={`image_upload__${index + 1}`}>
                  {`${index + 1}. ${item.fileName}`}
                  <div className="remove-button" onClick={() => this.onDeleteFile(index)} />
                </li>
              ))}
          </ul>
        </div>
        <InPageLoading isLoading={isLoading} />
      </div>
    );
  }
}

export default DropBox;
