if (Meteor.isClient) {

	Meteor.subscribe("user");

	UserController = RouteController.extend({
		onBeforeAction: function () {
			if (!Meteor.user() || !Meteor.user().profile.admin) {
				FlashMessages.sendWarning("Not authorized. Only admins have access to this section.");
				Router.go('homepage');
			} else {
				this.next();
			}
		},
		list: function () {
	      this.render('User', {
	      	data: {
	      		settings: function () {
			        return {
			            collection: Meteor.users.find(),
			            rowsPerPage: 10,
			            showFilter: true,
			            fields: [
			            {key: 'profile.name', label: 'Jméno'}, 
			            {
			            	key: 'actions',
			            	label: 'Akce',
			            	tmpl: Template.userActions
			            }]
			        };
			    }
	      	}
	      });
	    },

	    create: function () {
	      this.render('UserCreate');
	    },

	    delete: function() {
	    	Meteor.users.remove(this.params.id);
	    },

	    update: function () {
	      this.render('UserUpdate', {
	      	data:  {
	      		user: Meteor.users.findOne({_id: this.params.id})
	      	}
	      });
	    },
	});

	Template.UserCreate.events({
		'click #saveUser': function (event) {
			event.preventDefault();
			// TODO add validation
			Meteor.call('createAccount', {
                email : $("#email").val(),
                password : $("#password").val(),
                profile  : {
                    name: $("#name").val(),
                    admin: $("#admin").is(":checked")
                }
    		});
			
			Router.go('users');

			return false;
		}
	});

	Template.UserUpdate.events({
		'click #saveUser': function (event) {
			event.preventDefault();
			// TODO add validation
			Meteor.users.update({_id:$("#id").val()}, {$set:{"profile.name":$("#name").val()}, $set:{"profile.admin":$("#admin").is(':checked')}});

			if ($("#password").val().length > 0) {
				Meteor.call('userSetPassword', {
					id: $("#id").val(),
					password: $("#password").val()
				})
			}

			Router.go('users');

			return false;
		}
	});

}

if (Meteor.isServer) {
	Meteor.methods({
		createAccount: function(data) {
			var userId = Accounts.createUser(data);
		},

		userSetPassword: function(data) {
			Accounts.setPassword(data.id, data.password);
		}
	});
	
	Meteor.publish("user", function() {
	  return Meteor.users.find();
	});
}