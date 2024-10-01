import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import { Provider } from 'react-redux';
import store from './Redux/Store/Store'; // Import your Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/graphics-designer">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
