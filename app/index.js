import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

class App extends Component {
    render() {
        const { status, user, loggingIn } = this.props;

        if (status.connected === false || loggingIn) {
            return <Loading />;
        } else if (user !== null) {
            return <LoggedIn />;
        } else {
            return <LoggedOut />;
        }
    }
};

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
