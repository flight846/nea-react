/* eslint-disable camelcase */
import React, { Component } from 'react';
import Loading from 'components/common/loading';
import './style.scss';
import { getData } from 'utils';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class FlashScreen extends Component {
  constructor() {
    super();
    this.state = {
      redirectLink: '',
    };
  }

  async componentDidMount() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const token = url.searchParams.get('token') || getData('token');
    console.log(token);
    if (!token) {
      this.setState({ redirectLink: '/login' });
    } else {
      this.setState({ redirectLink: '/dashboard' });
    }
  }

  render() {
    const { redirectLink } = this.state;
    return (
      <div>
        {redirectLink !== '' ? (
          <Redirect to={redirectLink} />
        ) : (
          <div className="app__page flash__page">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <Loading />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  redirectLink: global.ui.redirectLink,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashScreen);
