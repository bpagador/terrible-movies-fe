import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signup from '../auth/Signup';
// import MoviesList from '../movies/MoviesList';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>

  );
}
  
