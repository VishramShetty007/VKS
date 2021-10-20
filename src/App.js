import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/main.scss';
import 'antd/dist/antd.min.css';
import history from './history';
import Loader from 'components/Global/Loader';
import Layout1 from 'components/Layout';

const LoginPage = React.lazy(() => import('pages/Auth.js'));

require('dotenv').config();

const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loader />}>
      <Switch>
        {/*START: Onboarding Flow*/}
        <Route exact path="/" component={LoginPage} />
        {/*END: Onboarding */}

        {/*START: Layout1 */}
        <Route path="" component={Layout1} />
        {/*END: Layout1 */}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
