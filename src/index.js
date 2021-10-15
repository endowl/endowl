import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main';
import Glossary from './pages/Glossary';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Share from './pages/Share';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';

smoothScrollPolyfill.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/glossary" component={Glossary} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/post-interview-share" component={Share} />
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
