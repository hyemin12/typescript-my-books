import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/create';

import Home from './pages/Home';
import Error from './pages/Error';
import SigninPage from './pages/SigninPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
