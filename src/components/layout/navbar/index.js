/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { UserRole } from 'constants/index';

import NavbarItem from './navbarItem';

import './style.scss';

const Admin_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'Claim Task',
    href: '/sample-identification/claim-task',
    className: 'cPool',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Receive Sample',
        href: '/sample-identification/receive-sample',
      },
      {
        name: 'Query Sample Status',
        href: '/sample-identification/query-sample-status',
      },
      {
        name: 'Query Inspection Form Status',
        href: '/sample-identification/query-inspection-form-status',
      },
    ],
  },
];

const EHI_Admin_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Receive Sample',
        href: '/sample-identification/receive-sample',
      },
    ],
  },
];

const EHI_Analyst_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'Claim Task',
    href: '/sample-identification/claim-task',
    className: 'cPool',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      // {
      //   name: 'Receive Sample',
      //   href: '/sample-identification/receive-sample',
      // },
      {
        name: 'Query Sample Status',
        href: '/sample-identification/query-sample-status',
      },
      {
        name: 'Query Inspection Form Status',
        href: '/sample-identification/query-inspection-form-status',
      },
    ],
  },
];

const RO_Officer_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'Deposit/Send Sample',
    href: '/vector-inspection/deposit-send-samples',
    className: 'cPool',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Track Sample Status',
        href: '#',
      },
    ],
  },
  {
    name: 'Inspection Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Block Summary',
        href: '/vector-inspection/block-summary',
      },
      {
        name: 'Latest Inspection',
        href: '',
      },
      {
        name: 'Query Inspection Form Status',
        href: '/vector-inspection/query-inspection-form-status',
      },
      {
        name: 'Query Form 3 Status',
        href: '',
      },
      {
        name: 'Query Rodent Inspection',
        href: '/vector-inspection/query-rodent-inspection',
      },
      {
        name: 'Ground Surveilliance for RCC',
        href: '/vector-inspection/ground-surveillance-for-rcc',
      },
    ],
  },
  {
    name: 'Fogging Audit',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Query Fogging',
        href: '/vector-inspection/query-fogging',
      },
    ],
  },
];

const RO_TL_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Track Sample Status',
        href: '#',
      },
      {
        name: 'List of Samples ID-ed',
        href: '#',
      },
    ],
  },
  {
    name: 'Inspection Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Block Summary',
        href: '/vector-inspection/block-summary',
      },
      {
        name: 'Latest Inspection',
        href: '',
      },
      {
        name: 'Query Inspection Form Status',
        href: '/vector-inspection/query-inspection-form-status',
      },
      {
        name: 'Query Form 3 Status',
        href: '',
      },
      {
        name: 'Query Rodent Inspection',
        href: '/vector-inspection/query-rodent-inspection',
      },
      {
        name: 'Ground Surveilliance for RCC',
        href: '/vector-inspection/ground-surveillance-for-rcc',
      },
    ],
  },
  {
    name: 'Fogging Audit',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Query Fogging',
        href: '/vector-inspection/query-fogging',
      },
    ],
  },
  {
    name: 'Rodent Audit',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Query Audit Task',
        href: '/vector-inspection/query-audit-task',
      },
      {
        name: 'Query Late Submission',
        href: '/vector-inspection/query-late-submission',
      },
    ],
  },
];

const Manager_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Inspection Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Block Summary',
        href: '/vector-inspection/block-summary',
      },
      {
        name: 'Latest Inspection',
        href: '',
      },
      {
        name: 'Query Form 3 Status',
        href: '',
      },
    ],
  },
  {
    name: 'Fogging Audit',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Ad Hoc Fogging Audit',
        href: '',
      },
      {
        name: 'Query Fogging',
        href: '/vector-inspection/query-fogging',
      },
    ],
  },
  {
    name: 'Rodent Audit',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Ad Hoc Rodent Audit',
        href: '#',
      },
      {
        name: 'Query Audit Task',
        href: '/vector-inspection/query-audit-task',
      },
      {
        name: 'Query Late Submission',
        href: '/vector-inspection/query-late-submission',
      },
    ],
  },
];

const RCU_Officer_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'Deposit/Send Sample',
    href: '/vector-inspection/deposit-send-samples',
    className: 'cPool',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Track Sample Status',
        href: '#',
      },
    ],
  },
  {
    name: 'Inspection Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Block Summary',
        href: '/vector-inspection/block-summary',
      },
      {
        name: 'Latest Inspection',
        href: '',
      },
      {
        name: 'Query Form 3 Status',
        href: '',
      },
      {
        name: 'Query Rodent Inspection',
        href: '/vector-inspection/query-rodent-inspection',
      },
      {
        name: 'Ground Surveilliance for RCC',
        href: '/vector-inspection/ground-surveillance-for-rcc',
      },
    ],
  },
];

const RCU_TL_Menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'dashboard',
  },
  {
    name: 'My Workspace',
    href: '/my-workspace',
    className: 'workspace',
  },
  {
    name: 'Sample Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Track Sample Status',
        href: '#',
      },
      {
        name: 'List of Samples ID-ed',
        href: '#',
      },
    ],
  },
  {
    name: 'Inspection Management',
    className: 'subNav qrySample',
    subMenus: [
      {
        name: 'Block Summary',
        href: '/vector-inspection/block-summary',
      },
      {
        name: 'Latest Inspection',
        href: '',
      },
      {
        name: 'Query Form 3 Status',
        href: '',
      },
      {
        name: 'Query Rodent Inspection',
        href: '/vector-inspection/query-rodent-inspection',
      },
      {
        name: 'Ground Surveilliance for RCC',
        href: '/vector-inspection/ground-surveillance-for-rcc',
      },
    ],
  },
];

const NavBar = props => {
  const { className, showMenu, active, userRole } = props;
  console.log('TCL: userRole', userRole);

  const getMenuByRole = () => {
    switch (userRole) {
      case UserRole.Admin:
        return Admin_Menu;
      case UserRole.EHI_Admin:
        return EHI_Admin_Menu;
      case UserRole.EHI_Analyst:
        return EHI_Analyst_Menu;
      case UserRole.RO_Officer:
        return RO_Officer_Menu;
      case UserRole.RO_TL:
        return RO_TL_Menu;
      case UserRole.Manager:
        return Manager_Menu;
      case UserRole.RCU_Officer:
        return RCU_Officer_Menu;
      case UserRole.RCU_TL:
        return RCU_TL_Menu;
      default:
        return [];
    }
  };

  const renderMenu = () => {
    const roleMenus = getMenuByRole();
    return (
      <>
        {roleMenus &&
          roleMenus.map((menu, mIndex) => <NavbarItem key={`navbar_menu_${mIndex + 1}`} item={menu} active={active} />)}
      </>
    );
  };

  return (
    <nav className={`nav__main ${className || ''}`}>
      <div className={`overlay ${showMenu ? '' : 'hidden'}`} />
      <div className={`menuWrapper ${showMenu ? '' : 'hidden'}`}>
        <div className="container">
          <div className="iMenu">
            <div className="iNavTitle">Vector Control System 2</div>
            <ul>{renderMenu()}</ul>
          </div>
        </div>
      </div>
      <div className="leftNavCont bg-blue cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
        <div>
          <div className="leftNavTitle">Vector Control System 2</div>
          <ul className="leftNav"> {renderMenu()} </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  active: '',
  userRole: 'Admin',
};

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  showMenu: global.ui.showMenu,
  userRole: global.ui.userRole,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NavBar));
