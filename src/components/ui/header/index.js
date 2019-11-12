/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Avatar } from 'assets/svg/avatar.svg';
import { ReactComponent as Bell } from 'assets/svg/bell.svg';
import { common } from 'assets';

import { toggleMenu, changeFontsize } from 'store/actions';

import './style.scss';

class Header extends React.PureComponent {
  handleChangeFontSize = event => {
    event.preventDefault();
    const size = event.target.getAttribute('size');
    const { changeFontsizeAction } = this.props;
    changeFontsizeAction(size);
  };

  render() {
    const { className, toggleMenuAction, showMenu, userRole } = this.props;
    return (
      <header className={`header__main ${className || ''}`}>
        <div className="bg-light-grey govtSite">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img src={common.national__icon} alt="national__icon" />
                {'A Singapore Government Agency Website'}
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row paddingTop15 paddingBottom15">
              <div className="col-md-3 col-lg-2 col-6">
                <a href="#" title="NEA">
                  <img src={common.logo} alt="NEA" className="logoImg" />
                </a>
              </div>
              <div className="col-md-9 col-lg-10 col-6 text-right">
                <ul className="headerRHS">
                  <li>
                    <ul className="fontIncrease">
                      <li>
                        <a className="smallFont" href="#" size={14} onClick={this.handleChangeFontSize}>
                          A
                        </a>
                      </li>
                      <li>
                        <a className="mediumFont" href="#" size={16} onClick={this.handleChangeFontSize}>
                          A
                        </a>
                      </li>
                      <li>
                        <a className="bigFont" href="#" size={18} onClick={this.handleChangeFontSize}>
                          A
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Avatar className="avatarImg" />
                    <div className="userName">Ben Wong</div>
                  </li>
                  <li>
                    <div className="userName">{userRole}</div>
                  </li>
                  <li>
                    <Bell className="bellImg" />
                  </li>
                  <li className="ipadNavCont">
                    <button type="button" className="btn-link header__toggle" onClick={toggleMenuAction}>
                      <div className={`ipadNav ${showMenu ? 'on' : ''}`}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  showMenu: global.ui.showMenu,
  userRole: global.ui.userRole,
});
const mapDispatchToProps = {
  toggleMenuAction: toggleMenu,
  changeFontsizeAction: changeFontsize,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
