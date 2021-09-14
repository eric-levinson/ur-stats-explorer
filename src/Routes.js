import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

/*const thangs = [
  {
    name: 'Season 10',
    groupID: 'season-10-j1nooa6jlw',
    subGroups: [
      { name: 'Linguine League',
        groupID: 'linguine-league-byyq7tp2h0'},
    ]
  }
]*/

class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/explore/:origin' component={ExplorePage} />
          <Route path='/s10/' component={ExplorePage} origin='season-10-j1nooa6jlw' />
          <Route path='/s11' component={ExplorePage} origin='season-11-phqfzmk1fq' />

          
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
