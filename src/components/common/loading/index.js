import React from 'react';
import './style.scss';

const Loading = (props) => {
  const text = props.text || 'Loading...';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="lds-ripple">
          <div />
          <div />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Loading;
