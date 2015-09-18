if (Meteor.isClient) {

	HomepageController = RouteController.extend({
		onBeforeAction: function () {
			this.next();
		},
	    default: function () {
	      this.render('Homepage');
	    }
	});
}



if (Meteor.isServer) {
	var registration = true;
	
	if (Meteor.users.find().count() == 0) {
		registration = false;
	}

	Accounts.config({
	  forbidClientAccountCreation : registration
	});
}