import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';

import './style.scss';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderActionModal = () => {
    const { headerTitle, content, confirmTitle, onConfirm, cancelTitle, onCancel } = this.props;
    return (
      <div className="action-modal shadow-sm">
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close">
            <CloseIcon style={{ height: '40px', width: '40px', display: 'block' }} onClick={onCancel} />
          </button>
        </div>
        <div className="modal-body">
          <div className="is-reject-form">
            <p className="mb-4 bold-font title">{headerTitle}</p>
            {content && content}
          </div>
        </div>
        <div className="modal-footer justify-content-center">
          <button type="button" className="btn btn-sec" onClick={onCancel}>
            {cancelTitle}
          </button>
          <button type="submit" className="btn btn-pri" onClick={onConfirm}>
            {confirmTitle}
          </button>
        </div>
      </div>
    );
  };

  renderSystemModal = () => {
    const { headerTitle, content, confirmTitle, onConfirm, cancelTitle, onCancel } = this.props;
    return (
      <div className="system-modal shadow-sm">
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close">
            <CloseIcon style={{ height: '40px', width: '40px', display: 'block' }} onClick={onCancel} />
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-title bold-font title text-center">{headerTitle}</p>
          <p className="text-center">{content}</p>
        </div>
        <div className="modal-footer justify-content-center mb-4">
          <button type="button" className="btn btn-sec" onClick={onCancel}>
            {cancelTitle}
          </button>
          <button type="button" className="btn btn-sec" onClick={onConfirm}>
            {confirmTitle}
          </button>
        </div>
      </div>
    );
  };

  renderInfoModal = () => {
    const { onCancel } = this.props;
    return (
      <div className="info-modal shadow-sm">
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close">
            <CloseIcon style={{ height: '40px', width: '40px', display: 'block' }} onClick={onCancel} />
          </button>
        </div>
        <div className="modal-body">
          <div className="container marginBottom30">
            <div className="row">
              <div className="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="legendValue text-blue">AC</div>
                    <span class="text-black bold-font">Accessible</span>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue text-dark-red">IR</div>
                    <span class="text-black bold-font">Refused Entry</span>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue text-green">IL</div>
                    <span class="text-black bold-font">Locked</span>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue text-orange">VC</div>
                    <span class="text-black bold-font">Vacant</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>BR</small>
                    </div>
                    <span class="text-black bold-font">Breeding</span>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>T</small>
                    </div>
                    <span class="text-black bold-font">Treated</span>
                    <small class="remarks">
                      (with at least ie preventive measure such as ULV Spraying, Mozzie, Zap, etc)
                    </small>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>CL</small>
                    </div>
                    <span class="text-black bold-font">Call Letter</span>
                    <small class="remarks"></small>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>S35</small>
                    </div>
                    <span class="text-black bold-font">Section 35</span>
                    <small class="remarks"></small>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>S35R</small>
                    </div>
                    <span class="text-black bold-font">Section 35 Reminder</span>
                    <small class="remarks"></small>
                  </li>
                  <li class="list-group-item">
                    <div class="legendValue w-30 text-red">
                      <small>S36</small>
                    </div>
                    <span class="text-black bold-font">Section 36</span>
                    <small class="remarks"></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { className, type, isOpen, onCancel } = this.props;
    const modalClass = type !== 'action-modal' ? `${className} modal-dialog-centered` : className;
    return (
      <Modal isOpen={isOpen} toggle={onCancel} className={modalClass}>
        {type === 'action-modal'
          ? this.renderActionModal()
          : type === 'system-modal'
          ? this.renderSystemModal()
          : this.renderInfoModal()}
      </Modal>
    );
  }
}

export default CustomModal;
