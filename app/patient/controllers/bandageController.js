if (Meteor.isClient) {

	Meteor.subscribe("bandage");

	AutoForm.addHooks(['updateBandageForm', 'insertBandageForm'], {
		onSuccess: function(formType, result) {
			if (formType == 'insert') {
				Bandage.update({_id:result}, {$set:{"patientId": Session.get('patientId')}}, {validate: false});	
			}

			FlashMessages.sendSuccess('Bandage has been updated.');
			Router.go('patient-bandages', {id: Session.get('patientId')});
		}
	});

	BandageController = RouteController.extend({
		onBeforeAction: function () {
			if (!Meteor.user()) {
				FlashMessages.sendWarning("Not authorized. Please log in.");
				Router.go('homepage');
			} else {
				this.next();
			}
		},

	    list: function () {
	    	var id = this.params.id;
	    	this.render('PatientBandages', {
	    		data: {
	    			patientId: id,
	    			patient: Patient.findOne({_id:id}),
		    		settings: function () {
			        return {
			            collection: Bandage.find({patientId: id}),
			            rowsPerPage: 10,
			            showFilter: true,
			            fields: [
			            {key: 'date', label: 'Datum'}, 
			            {key: 'bandageBy', label: 'Převazy'},
			            {key: 'pain', label: 'Bolest'},
			            {key: 'secretion', label: 'Sekrece'}, 
			            {key: 'temperature', label: 'Teplota'},
			            {key: 'size', label: 'Velikost'},
			            {key: 'woundSurrounding', label: 'Okolí rány'},
			            {key: 'infection', label: 'Infekce'},
			            {key: 'coating', label: 'Obklady'},
			            {key: 'secretion', label: 'Sekrece'},
			            {key: 'debridement', label: 'Débridement'},
			            {key: 'compression', label: 'Komprese'},
			            {key: 'photoDocumentation', label: 'Fotodokumentace'},
			            {
			            	key: 'actions',
			            	label: 'Akce',
			            	tmpl: Template.bandageActions
			            }]
			        };
			    }
		    	}
	    	});
	    },

	    create: function () {
	      Session.set('patientId', this.params.id);

	      this.render('BandageCreate');
	    },

	    delete: function () {
	    	Bandage.remove(this.params.id);
	    },

	    update: function () {
	    	console.log(this.params.id);
	      this.render('BandageUpdate', {
	      	data:  Bandage.findOne({_id: this.params.id})
	      });
	    },
	});
}

if (Meteor.isServer) {
	Meteor.publish("bandage", function() {
		return Bandage.find();
	});
}