import React, { Fragment } from 'react';

import Header from './components/Header';

const App: React.FC = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default App;
