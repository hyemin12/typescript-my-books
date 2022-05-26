import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <Switch>
          <Route></Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
