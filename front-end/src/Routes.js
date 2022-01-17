import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home';

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
        </Switch>
    );
}