if (Meteor.isClient) {
	Meteor.startup(function() {
		TAPi18n.setLanguage('cs').done(function() {
			console.log(TAPi18n.getLanguage());
		});

		i18n.setLanguage('cs');
	});
};