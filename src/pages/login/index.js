import React from 'react';
import { common } from 'assets';
import './style.scss';

const Login = () => (
  <div className="loginBG">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div className="loginWrapper">
            <div className="row">
              <div className="col-md-12 neaLogo">
                <img src={common.logo} alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 paddingTop10 paddingBottom10 bold-font">
                <h3>Login to VCS2</h3>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-8 offset-md-2 paddingTop15 paddingBottom15">
                  <div className="form-group hasError">
                    <input type="text" placeholder="Username" className="textfield" />
                  </div>
                  <div className="errMsg">Wrong username</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 paddingTop15 paddingBottom5">
                  <div className="form-group hasError">
                    <input type="password" placeholder="Password" className="textfield" />
                    <div className="errMsg">Wrong password</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 paddingTop5 paddingBottom15 forgetPwd">
                  <a href="#">Forget password?</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 paddingTop20">
                  <a href="#" className="btn btn-pri">Sign in</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
