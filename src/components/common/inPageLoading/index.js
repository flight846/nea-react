import React from 'react';
import { Modal } from 'reactstrap';
import './style.scss';

const InPageLoading = props => {
  const { isLoading, text } = props;
  return (
    <Modal isOpen={isLoading} className="loading-modal modal-dialog-centered modal-no-border">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="lds-ripple">
            <div />
            <div />
          </div>
          <span>{text || 'Loading'}</span>
        </div>
      </div>
    </Modal>
  );
};
export default InPageLoading;
