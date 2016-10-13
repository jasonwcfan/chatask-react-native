import Meteor from 'react-native-meteor';

const Users = {
    addFriend: function(email) {
        if (Meteor.collection('users').find({'emails.address': {$in: [email.toLowerCase()]}}).length > 0) {
            Meteor.call('users.sendFriendRequest', Meteor.user(), email.toLowerCase());
            return 'Friend request sent'
        } else {
            return 'No user with that email';
        }
    }
};

export default Users;