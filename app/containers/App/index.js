/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// import HomePage from 'containers/HomePage/homepage';
import LoginPage from 'containers/LoginPage/LoginPage';
import SignupPage from 'containers/SignupPage/SignupPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
