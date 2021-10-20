import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleMemberLogout } from 'redux/user/user.actions';
import { selectUserAuthToken, selectUser } from 'redux/user/user.selectors';

import jwt_decode from 'jwt-decode';
import moment from 'moment';

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { user, token, handleMemberLogout, history } = this.props;

      if (user.token) {
        const jwtExpiry = jwt_decode(user.token).exp * 1000;
        const tokenExpiryTime = moment(jwtExpiry).format();
        const currentTime = moment().format();

        if (currentTime > tokenExpiryTime) {
          history.push('/auth/signin');
          this.props.handleMemberLogout();
        }
      }

      if (!token) {
        handleMemberLogout();
        history.push('/auth/signin');
      }
    }

    render() {
      const { user } = this.props;

      return (
        <div>
          {user.isLoggedIn ? <ComposedComponent {...this.props} /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: selectUser(state),
      token: selectUserAuthToken(state)
    };
  };

  const mapDispatchToProps = {
    handleMemberLogout
  };

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
}
