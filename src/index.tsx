import '@/assets/stylesheets/index.scss';

import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '@/App';

import Home from './components/Home';
import Profile from './components/Profile/Profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </App>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
