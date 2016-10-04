import React from 'react';
import Routes from '../../config/routes';
import SignIn from '../../routes/SignIn';

import {Scene, Router} from 'react-native-router-flux';

const LoggedOut = () => {
    const route = Routes.getSignInRoute();
    return (
        // <ExNavigator
        //     initialRoute={route}
        //     style={{ flex: 1 }}
        //     showNavigationBar={route.showNavigationBar}
        // />
        <Router>
            <Scene key="loggedOut" component={SignIn} title="Sign In" initial={true} />
        </Router>
    );
};

export default LoggedOut;