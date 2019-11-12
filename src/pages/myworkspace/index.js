import React, { useState, useEffect } from 'react';
import { getData } from 'utils';
import { UserRole } from 'constants/index';

import EHIAnalystWorkspace from 'modules/myWorkspace/ehiAnalyst';
import ROOfficerWorkspace from 'modules/myWorkspace/roOfficer';
import ROTeamLeaderWorkspace from 'modules/myWorkspace/roTeamLeader';
import RCUTeamLeaderWorkspace from 'modules/myWorkspace/rcuTeamLeader';
import ManagerWorkspace from 'modules/myWorkspace/manager';

const MyWorkspace = props => {
  const userRole = getData('userRole');

  switch (userRole) {
    case UserRole.EHI_Analyst: {
      return <EHIAnalystWorkspace />;
    }
    case UserRole.RCU_Officer:
    case UserRole.RO_Officer: {
      return <ROOfficerWorkspace />;
    }
    case UserRole.RO_TL: {
      return <ROTeamLeaderWorkspace />;
    }
    case UserRole.RCU_TL: {
      return <RCUTeamLeaderWorkspace />;
    }
    case UserRole.Manager: {
      return <ManagerWorkspace />;
    }

    default:
      return <></>;
  }
};

export default MyWorkspace;
