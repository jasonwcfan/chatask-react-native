import React from 'react';
import SignIn from '../routes/SignIn';

export const routes = {
    getSignInRoute() {
        return {
            renderScene(navigator) {
                return <SignIn navigator={navigator} />;
            },

            showNavigationBar: false,
        };
    },
};

export default routes;
