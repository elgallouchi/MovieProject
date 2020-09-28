import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/films' component={Movies} />
        <Route exact path='/series' component={Series} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
      </>
  );
}

export default App;
