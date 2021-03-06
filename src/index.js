import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  reduxStore from './redux/Store/store'
import { Provider }  from 'react-redux'


ReactDOM.render(
    <Provider store={reduxStore}>
      <App/>
    </Provider>
    ,
  document.getElementById('root')
);

reportWebVitals();



// https://www.openstreetmap.org/welcome