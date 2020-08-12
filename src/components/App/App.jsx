import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signup from '../auth/Signup';
import Header from '../header/Header';
// import MoviesList from '../movies/MoviesList';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>

  );
}
  
