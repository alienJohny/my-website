import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Music from './pages/Music';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/resume'} component={Resume} />
          <Route path={'/music'} component={Music} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
