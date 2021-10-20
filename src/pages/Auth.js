import { Redirect, Route, Switch } from 'react-router-dom';

import AuthLayout from 'components/Onboarding/AuthLayout';

import Loadable from 'react-loadable';
import Loader from 'components/Global/Loader';

const LoadableSignInComponent = Loadable({
  loader: () => import('../components/Onboarding/SignIn'),
  loading: Loader
});

const Auth = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path="/" component={LoadableSignInComponent} />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </AuthLayout>
  );
};

export default Auth;
