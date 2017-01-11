
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
 
Meteor.startup(function() {
   if (Meteor.users.find().count() != 0) return;
 
  Accounts.createUserWithPhone({
    phone: '+33611223344',
    profile: {
      name: 'Andy',
      picture: 'silhouette2.png'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+33610203040',
    profile: {
      name: 'Caroline',
      picture: 'silhouette1.png'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+33637977717',
    profile: {
      name: 'Andrew',
      picture: 'silhouette2.png'
    }
  });
});