import React from 'react';
import Routes from '../../config/routes';

import ExNavigator from '@exponent/react-native-navigator';

const LoggedOut = () => {
    const route = Routes.getSignInRoute();
    return (
        <ExNavigator
            initialRoute={route}
            style={{ flex: 1 }}
            showNavigationBar={route.showNavigationBar}
        />
    );
};

export default LoggedOut;