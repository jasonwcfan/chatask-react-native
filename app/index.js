import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import LoggedOut from './layouts/LoggedOut';
import SignIn from './routes/SignIn';
// import LoggedIn from './layouts/LoggedIn';
// import Loading from './components/Loading';
import settings from './config/settings';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
} from '@exponent/ex-navigation';

Meteor.connect(settings.METEOR_URL);

class App extends Component {
    render() {
        const { status, user, loggingIn } = this.props;

        // if (status.connected === false || loggingIn) {
        //     return <Loading />;
        // } else if (user !== null) {
        //     return <LoggedIn />;
        // } else {
        //     return <LoggedOut />;
        // }
        if (status.connected === false || loggingIn) {
            return (
                <NavigationProvider router={Router}>
                    <StackNavigation initialRoute={Router.getRoute('signIn')} />
                </NavigationProvider>
            );
        } else {
            console.log('oops, no component is being displayed!');
        }
    }
};

const Router = createRouter(() => ({
    signIn: () => SignIn,
}));

App.propTypes = {
    status: React.PropTypes.object,
    user: React.PropTypes.object,
    loggingIn: React.PropTypes.bool,
};

export default createContainer(() => {
    return {
        status: Meteor.status(),
        user: Meteor.user(),
        loggingIn: Meteor.loggingIn(),
    };
}, App);
