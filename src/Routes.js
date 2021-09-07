import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/explore/:season/:league/:week/:match' component={ExplorePage} />

          
          <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
