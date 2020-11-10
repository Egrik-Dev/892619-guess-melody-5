import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const {render, exact, path, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
