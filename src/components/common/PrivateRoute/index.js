/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from 'utils';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      getData('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to="/login"
        />
      ))}
  />
);

const mapStateToProps = ({ global }, ownProps) => {
  const { user } = global.data;

  return { user, ...ownProps };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
