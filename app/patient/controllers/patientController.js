if (Meteor.isClient) {

	Meteor.subscribe("patient");

	AutoForm.addHooks(['updatePatientForm', 'insertPatientForm'], {
		onSuccess: function(formType, result) {
			FlashMessages.sendSuccess('Patient card has been updated.');
			Router.go('patients');
		}
	});

	PatientController = RouteController.extend({
		onBeforeAction: function () {
			if (!Meteor.user()) {
				FlashMessages.sendWarning("Not authorized. Please log in.");
				Router.go('homepage');
			} else {
				this.next();
			}
		},

		list: function () {
	      this.render('Patient', {
	      	data: {
	      		settings: function () {
			        return {
			            collection: Patient.find(),
			            rowsPerPage: 10,
			            showFilter: true,
			            fields: [
			            {key: 'name', label: 'Jméno'}, 
			            {
			            	key: 'actions',
			            	label: 'Akce',
			            	tmpl: Template.patientActions
			            }]
			        };
			    }
	      	}
	      });
	    },

	    create: function () {
	      this.render('PatientCreate');
	    },

	    delete: function () {
	    	Patient.remove(this.params.id);
	    },

	    update: function () {
	      this.render('PatientUpdate', {
	      	data:  Patient.findOne({_id: this.params.id})
	      });
	    },
	});
}

if (Meteor.isServer) {
	Meteor.publish("patient", function() {
		return Patient.find();
	});
}