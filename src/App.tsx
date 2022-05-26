import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <HashRouter>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
