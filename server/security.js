Patient.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

Meteor.users.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

Bandage.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();