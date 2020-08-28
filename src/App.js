import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* Header */}
        <Switch>
          <Route path="/search">
            <SearchPage />
            {/* SearchPage */}
          </Route>
          <Route path="/">
            <Home />
            {/* Home */}
          </Route>
        </Switch>

        <Footer />
        {/* Footer */}
      </Router>


    </div>
  );
}

export default App;
