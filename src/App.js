import React, { Component } from 'react';
import {Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import Routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <div>
        <Spinner size={ SpinnerSize.large } />
        <Routes />
      </div>
    );
  }
}

export default App;
