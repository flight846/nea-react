import React from 'react';
// import Header from 'components/layout/header';

import './style.scss';

const Blocked = () => (
  <div className="app__page blocked__page">
    {/* <Header /> */}
    <main className="blocked__content container-fluid">
      <h1 className="blocked__title"> We&apos;re sorry!</h1>
      <p className="blocked__des">
        You do not have access to view this section.
      </p>
    </main>
  </div>
);

export default Blocked;
