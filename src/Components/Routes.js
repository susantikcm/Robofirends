import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RobotList from '../Containers/RobotList';
import About from './About';
import Error from './Error';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={RobotList} />
            <Route path="/About" component={About} />
            <Route component={Error} />
        </Switch>
    );
}

export default Routes;