if (Meteor.isClient) {

	Meteor.subscriber('user');

	var registration = false;
	if (Meteor.users.find().length === 0) {
		registration = true;
	}
	
	Accounts.config({
	  forbidClientAccountCreation : registration
	});

	HomepageController = RouteController.extend({
		onBeforeAction: function () {
			this.next();
		},
	    default: function () {
	      this.render('Homepage');
	    }
	});

	/*Template.user.helpers({
		labelClass: function() {
		  if (this.status && this.status.idle)
		    return "label-warning"
		  else if (this.status && this.status.online)
		    return "label-success"
		  else
		    return "label-default"
		}
	});*/

	/*Template.AppLayout.helpers({
		usersOnline: function() {
		  return Meteor.users.find();
		}
	});*/
}

if (Meteor.isServer) {
	/*Meteor.publish("userStatus", function() {
	  return Meteor.users.find({'status.online': true});
	});*/
}