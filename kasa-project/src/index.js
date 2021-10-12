import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageStyle from './styles/index.js'

ReactDOM.render(
  <React.StrictMode>
    <App /><PageStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
