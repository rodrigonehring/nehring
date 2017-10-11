import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home';

export default function() {
  return (
    <BrowserRouter>
      <Route component={Home} />
    </BrowserRouter>
  )
}