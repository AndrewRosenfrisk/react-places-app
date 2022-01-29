import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/:userId/places" exact={true}>
          <UserPlaces />
        </Route>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/places/new" exact={true}>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
