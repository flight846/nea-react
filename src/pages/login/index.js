import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserRole } from 'constants/index';
import { storeData } from 'utils';
import { common } from 'assets';
import { updateUserRole } from 'store/actions';

import './style.scss';

const Login = ({ history, updateUserRoleAction }) => {
  const handleLogin = event => {
    event.preventDefault();
    const token = event.target.getAttribute('token');
    const dataRole = event.target.getAttribute('data-role');
    storeData('token', token);
    storeData('userRole', dataRole);
    updateUserRoleAction(dataRole);
    if (history) {
      history.push('/dashboard');
    }
  };
  return (
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
                  <div className="col-md-12 paddingTop20">
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token="Admin"
                        data-role={UserRole.Admin}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in Supper Admin
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token="eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.wQ-V3G-_OuHwkKXs9xkabg5DM_V5gbeObBdwePD3_3269DrzsMPmMB8kmxNbaeYfJelkO8PAD3mxt_sLu1dh4OMhLP53Td6ETHeS6Q50F0_px0BeN0cOLg0O4KQBtBzB41fNmlDyNLUPAhcIX1QbUMMyLMw_zgiTX4l8xEL0fD-1k1KQPrDVPKQY5OdkvCvpVINCpruflaWmCeD6bYFhQcMS78OR7bySh8MkEssKFrzfq-fR0gyRvwXK_Ct2NtUdmLuV6kM7KJ4FRAMSyVkZn1j1Jm-qisiQqPvpoXAtcs7Urff64YkBiT6r_XCUMGuXJvjebyltCYUkL2c-PeAbnw.oOdGUsumtPYn3H2cMUpJWwhpKXMK438P6GfVhCIoMUk.vbgDjMdFO8DPwT3dapqScy5sNe8_oyg-kSKqHMiNxlhESYBSBXa69DHV1tdkIr-EFd5NgzoHWHgyKYNlnHpNup4FD8DHUbkqgUXbD4Aya-zrXeoM5956o1RhI56Yfy9VN3MQup_6KaZNZYqhJ6qBXZA2tNql_NZLrsSt3Gvh3VzkHmC_tPG46UqqTGh-ANwHUtpGRiMPL4Wp7q6mNMaELgCoWWHC-EzMvxNp-MMMntpF-NGaTHMwP0n9eu3xHL9xmNaWWBoUrbwTLkJvi8oocBiUc2CWrDETe6WwmKky7QTvuBT5Ik0DSeRU9MSqUvS5PUqycJNevmUJ4Y7kKEXx57z3evlAkaC1Gt7t-l2SxIiuF-x2nLltK5NFZZGGkrQu9ny9Fkx_Er8ka6KumTKICMK2z5qK6qxJaO33LS4TXMsq9Jlw7FsopZdLocAZloqXcaUvbx8yoatRkEinnRWrDpkw1OybHi6_AWUrbf99HOrBllmlqV0yBDxolDOSaz-4a6mSEoKcH0YVouhJwSqU9BeZjyD41gM.hLRTLGNdqE4Gn38DWIaMsg"
                        data-role={UserRole.EHI_Analyst}
                        type="button"
                        className="btn btn-pri mb-3 test"
                      >
                        Sign in EHI Analyst
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token="eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.vk9ZY-9aASMm_jutDvvaW7To54jt4pu-Br6pvyZXt_9v2cSAAXSt_z_TY_0NM4047SLqLx1_ysgTZC-KJg2Iog8SgvEVQsX2gdj8IyfNTpDZORvUDdobDZdfXnlav5ZHTCK8o92hebkmqzpiC8jmovGfGc97cuZNPnpuovtTgdeGOTaUj7B3Z37gnui7qQkuydGUwfTIZrcrpQ06ksi0Z8OMnwX6OatX1CuWrqpWvbCK7BVJmNqPToh1CvtIw5a9c766gAlYYpzHhHcDRQbSEcGhmWDYXBIv-AQx1Wrof-3aucwRoflge9zNCCduebH03G9PH2g_F-YFJ6OvLZYipw.9IPwuHhPwYBtVC8iGmV9jTld2oXGAlN_FkmPn3HtcAk.SleCbMILZd9YpBBFIxHhZMqeSEhH52fcgOaodfInLNG9egL8MI2ISKagO0AvWWDTeKb23qUr2k4TP1LFy1wZZA06H-Q1Ab-5Bf7yy80Ex3aUokQ0F3LDYF26HVOO_WC6roSqhJFjgcJe6u0K9ReLVUdU7LfWoAVHJrCNVuS_QwXg_nbMocKJz0s_BTKjUH2iUqLDzfvbNxahAyvoU-NYOlu5rhIcKAFGnLzLErYSCFeQaZW6eSdTOyOaNHLZl1WNPlcbNcwJ8chhIr3LEyxksD1Xe2NgRUmXS6rp6owypSRg-H8WOPM1BJbx2EHEGJcxrmCOcQ2GwUReZx9d3gBe99FN5iJ2kd3uEbJgci40ZQ2JuB2_7tGkmLg6rVI9EG4q1GT8wB35pgmE7_GWIGM6qrLK_NOGTtGPrz1vuswjDTrSXki7msMVBMI-P2lKNBq-5sLMDX0F1Y5odOeOhFgi12E3o2oGMcMgTVXOYNLEtaVzuuE_sFaatkP03WJuAAKqoEsXGAptu0CvnA.CP0iuuE5I4Z2P5wGBmcFPQ"
                        data-role={UserRole.EHI_Admin}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in EHI Admin
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token=""
                        data-role={UserRole.RO_Officer}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in RO Officer
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token="eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.mpUaB8VfISauYblSNhyXn-rvU7FiVaQHQ8s9-rQu7WdVSV-4J-P25YacM33cWSpiUE4eNkG5XCUaeAfnoZfqeoZQ5Dt_9LrNTrFqV_Ss21aJiJF6GLLUr1aVx73U0k779AKuSY9YEhMnAFDJFEoJdMPMJD0qH1ddI_Ak9fgdRhL3PQQq4DAFzMeXfe0bGrHdQHBAq91aKbUp4O1zW0-NrvzXhOaLjr4Jio-aUrXg-CKGVMPs7QNnaPVKPDoYm0HElynzFb-dPaefvnxhOO_psoYnQAKpxa21_cVbB6ZSQAPqVy5eizFUTf7GopiT844k3rl1Qv--Yx55a14_wDqWwg.PUwPPUG4aZ7WX_gieP9NJcUkF-Bvx70H2CqMk7JEHI4.LrYuj7IXMeS9UJAXD5SOMYV9Zr-Zi9VDcROFbF5vgcOwP4O4O4qFpps4vcpAIIqbvMYtn-sxGdlaqknIzv1KK-WLzQWJxIfjUA6eZrkgzhdv20YugFIUUA96VwOjxUFLantdYvHCZBo3Z-F3nuKzmYgEWWWDzznQkKSU-BfB0Yqmn-9LT-wmpmTxtzVKvLuhj-Jccp36-LPDjQPTsb7l97ovDY3Cg2lGdOZd53R3sGzO5dB2T0pomNhrsPuSTL3LEPYVDYrI_XF8D_tvDcqpyvY_iI7IjfWDoRGuNfuTIup1CktNIPlfBl8IhzEQlHiAVwdWFHMWe70G27RHTWIJjo0GLptep2BalFSsOsA0tAzlNt0nGY7OFZ9FTxhrKS0SdncxDCGVWr2lnIbSeFkYWLSZAJMWfMsorGBgQ2mOS-XJrTxZa7ai1C-JqmfC87kn718buUNwBYtGkKRrvnbAfIM_kt8bDdYXwlhP2lYD1i27yhLFlenKzV9eUdTlKRA.DoQ_H8D_thprnueo9M6gZg"
                        data-role={UserRole.RO_TL}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in RO Team Leader
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token=""
                        data-role={UserRole.Manager}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in Manager
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token=""
                        data-role={UserRole.RCU_Officer}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in RCU Officer
                      </button>
                    </div>
                    <div className="">
                      <button
                        onClick={handleLogin}
                        token=""
                        data-role={UserRole.RCU_TL}
                        type="button"
                        className="btn btn-pri mb-3"
                      >
                        Sign in RCU TL
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ global }, ownProps) => ({
  ...ownProps,
  userRole: global.ui.userRole,
});

const mapDispatchToProps = {
  updateUserRoleAction: updateUserRole,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
