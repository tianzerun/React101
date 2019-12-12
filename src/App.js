import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// the import statement is a little different from the one above because
// the 'react-router-dom' package exports multiple things, we need to use the curly braces syntax
// to target the ones that we need. We can use as to rename things just like how 'as' is used in Python import statements.
import Users from './users/pages/Users';
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
    // 1. exact prop means the path has to be exactly as specified path in order to render the enclosed component (not merely matching partially)
    // 2. Redirect to the path '/' when the user entered path does not comply with any one of the defined path.
    // 3. Wrapping Switch around Routes is necessary because we want React to stop doing route matching once the expected route has been found.
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Users/>
                    </Route>
                    <Route path="/:userId/places" exact>
                        <UserPlaces/>
                    </Route>
                    <Route path='/places/new' exact>
                        <NewPlace/>
                    </Route>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </Router>
    )
};

export default App;
