import * as React from 'react';
import './App.css';
import Main from './components/Main';
import Glossary from './pages/Glossary';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Share from './pages/Share';
import Header from './components/Header';
import Footer from './components/Footer';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  }, []);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/glossary" component={Glossary} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/post-interview-share" component={Share} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
