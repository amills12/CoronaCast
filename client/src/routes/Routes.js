import React from 'react';
import PropTypes from 'prop-types'; 
import { Route, Redirect } from 'react-router-dom'; 
import { useAuth0 } from '@auth0/auth0-react';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = useAuth0().isAuthenticated;

    if (isPrivate && !signed) {
        return <Redirect to="/" />;
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};