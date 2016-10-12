import Meteor from 'react-native-meteor';

const Users = {
    addFriend: function(email) {
        console.log(email);
        console.log(Meteor.collection('users').find({'emails.address': {$in: [email.toLowerCase()]}}));
        // Meteor.call('users.sendFriendRequest', Meteor.user(), email);
    }
};

export default Users;