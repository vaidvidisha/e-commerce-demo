import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import "react-web-tabs/dist/react-web-tabs.css";
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Reducer/index';
import reportWebVitals from './reportWebVitals';
import RingDetail from './Container/RingDetail'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <RingDetail />
          </Route>
          <Route exact path="/ring-detail">
            <RingDetail />
          </Route>
        </Switch>
    </BrowserRouter>
  </Provider>
  
)

ReactDOM.render(app,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
