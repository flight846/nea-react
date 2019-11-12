import React from 'react';
import { ReactComponent as AddImage } from 'assets/svg/AddImage.svg';
import { ReactComponent as Plus } from 'assets/svg/plus.svg';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';
import { common } from 'assets';

const InfoModal = () => {
  return (
    <div className="info-modal shadow-sm">
      <div className="modal-header">
        <button type="button" className="close" aria-label="Close">
          <CloseIcon
            style={{ height: '40px', width: '40px', display: 'block' }}
          />
        </button>
      </div>
      <div className="modal-body">
        <p className="modal-title bold-text text-center">Leave this Page?</p>
        <p className="text-center">Changes that you made may not be saved</p>
      </div>
    </div>
  );
};

export default InfoModal;
