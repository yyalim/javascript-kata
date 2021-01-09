import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Store from './Components/Store';

render(
  <Store>
    <App />
  </Store>,
  document.getElementById('app')
);
